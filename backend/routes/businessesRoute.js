const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../model/userModel");
const Customer = require("../model/customerModel");
const Worker = require("../model/workerModel");
const Owner = require("../model/ownerModel");
const WorkerBusiness = require("../model/workerBusinessModel");
const Businesses = require("../model/businessesModel");

router.get("/", async (req, res) => {
  try {
    let result = await Businesses.getBusiness();
    res.json(result);
  } catch (error) {
    console.error({ error: error });
  }
});

module.exports = router;
