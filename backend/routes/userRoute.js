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

require("dotenv").config();
app.use(cors());
app.use(bodyParser.json());

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
      phoneNumber: req.body.phone_number,
      bio: req.body.bio,
      bioImageUrl: req.body.bio_image_url,
      userTypeID: req.body.user_type_id,
    };

    let response = await User.addUser(user);
    let userID = response[0];

    if (user.userTypeID === 1) {
      let customerID = await Customer.addCustomer(userID);
      res.json({ user: userID, customerID: customerID[0] });
    } else if (user.userTypeID === 2) {
      let workerID = await Worker.addWorker(userID);
      res.json({ user: userID, workerID: workerID[0] });
    } else {
      let ownerID = await Owner.addOwner(userID);
      res.json({ user: response[0], ownerID: ownerID[0] });
    }
  } catch (error) {
    console.error({ error: error });
  }
});

module.exports = router;
