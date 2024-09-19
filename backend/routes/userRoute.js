const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../model/userModel");
const Customer = require("../model/customerModel");
const Worker = require("../model/workerModel");
const Owner = require("../model/ownerModel");
const WorkerBusiness = require("../model/workerBusinessModel");

require("dotenv").config();
app.use(cors());
app.use(bodyParser.json());

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
      let workerID = await Worker.addWorker(userID);
      await WorkerBusiness.addRoleID(userID, workerID[0], user.workerRoleID);
      res.json({ userID: userID, workerID: workerID[0], token });
    } else {
      let ownerID = await Owner.addOwner(userID);
      res.json({ userID: response[0], ownerID: ownerID[0], token });
    }
  } catch (error) {
    console.error({ error: error });
  }
});

module.exports = router;
