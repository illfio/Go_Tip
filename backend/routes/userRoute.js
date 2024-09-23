const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../model/userModel");
const Customer = require("../model/customerModel");
const Worker = require("../model/workerModel");
const Owner = require("../model/ownerModel");
const WorkerBusiness = require("../model/workerBusinessModel");

require("dotenv").config();

const encrypt = async (password) => {
  let hashed = await bcrypt.hash(password, 10);
  return hashed;
};

const compare = async (password, hashed) => {
  let compare = await bcrypt.compare(password, hashed);
  return compare;
};

const generateToken = async (userID, userEmail) => {
  const secret = process.env.JWT_SECRET;

  const payload = {
    userID: userID,
    userEmail: userEmail,
  };

  const token = jwt.sign(payload, secret, { expiresIn: "1h" });
  return token;
};

router.get("/", async (req, res) => {
  try {
    let result = await User.getAllUsers();
    res.send(result);
  } catch (error) {
    console.error({ error: error });
  }
});

router.post("/register", async (req, res) => {
  try {
    let user = {
      firstName: req.body.first_name,
      lastName: req.body.last_name,
      dob: req.body.dob,
      email: req.body.email,
      password: req.body.password,
      phoneNumber: req.body.phone_number,
      bio: req.body.bio,
      bioImageUrl: req.body.bio_image_url,
      role_id: req.body.roleID,
      workerRoleID: req.body.workerRoleID,
    };

    if (!user.email) return res.json({ message: "enter an email" });
    else if (!user.password) return res.json({ message: "enter a password" });
    else {
      let find = await User.findEmail(user.email);
      if (find) return res.json({ message: "email is already registered" });
    }

    let hashed = await encrypt(user.password);
    let token = await generateToken(user.user);
    let response = await User.addUser({ ...user, password: hashed });
    let userID = response;

    if (user.role_id === 0) {
      let customerID = await Customer.addCustomer(userID);
      res.json({ userID: userID, customerID: customerID[0], token });
    } else if (user.role_id === 1) {
      let workerID = await Worker.addWorker(userID, user.workerRoleID);
      res.json({ userID: userID, workerID: workerID[0], token });
    } else {
      let ownerID = await Owner.addOwner(userID);
      res.json({ userID: response[0], ownerID: ownerID[0], token });
    }
  } catch (error) {
    console.error({ error: error });
  }
});

router.post("/login", async (req, res) => {
  const userEmail = req.body.email;
  const userPassword = req.body.password;
  const userID = req.body.uid;
  const token = await generateToken(userID, userEmail);

  // if no user email
  if (!userEmail) res.send({ message: "enter email", boolean: false });
  // if no password
  else if (!userPassword)
    res.send({ message: "enter password", boolean: false });
  // find the email
  else {
    let checkEmail = await User.findEmail(req.body.email);
    // if email does not exist in db
    if (!checkEmail)
      return res.send({ message: "account does not exist", boolean: false });

    const checkPassword = await compare(req.body.password, checkEmail.password);

    if (!checkPassword)
      res.send({ message: "invalid email or password", boolean: false });
    else {
      let result = await User.findEmail(userEmail);
      let { user_id, email } = result;

      res.send({
        user: {
          id: user_id,
          email: email,
        },
        message: "login successful",
        boolean: true,
        token,
      });
    }
  }
});

router.post("/googleLogin", async (req, res) => {
  const userEmail = req.body.email;
  const googleID = req.body.googleID;
  let userLoginID = "";
  let userLoginEmail = "";

  try {
    let find = await User.findGoogleEmailAndGoogleID({
      email: userEmail,
      googleID: googleID,
    });

    // if there is a matching email and googleID
    if (find) {
      user_id = find.user_id;
      email = find.email;
      username = find.username;
    }
    // if there is no email or googleID
    else {
      let find = await User.findEmail({ email: userEmail });

      // if there was no matching email to googleID, link
      if (find) {
        user_id = find.user_id;
        email = find.email;
        username = find.username;

        await User.updateGoogleID({
          email: userEmail,
          googleID: googleID,
        });
      }

      // // means there is no existing account, make new user
      else {
        await User.addUser({
          email: userEmail,
          password: "",
          googleID: googleID,
        });

        let find = await User.findEmail({ email: userEmail });
        user_id = find.user_id;
        email = find.email;
      }
    }

    const token = await generateToken(user_id, email, username);
    res.json({
      user: {
        id: user_id,
        email: email,
        username: username,
      },
      message: "login successful",
      boolean: true,
      token,
    });
  } catch (error) {
    console.error({ error: error });
  }

  // const token = await generateToken(googleID, userEmail);
  // if there is no email, log in as new user
});

module.exports = router;
