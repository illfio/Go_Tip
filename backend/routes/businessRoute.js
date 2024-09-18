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
const Business = require("../model/businessModel");

router.get("/", async (req, res) => {
  try {
    let result = await Business.getBusiness();
    res.json(result);
  } catch (error) {
    console.error({ error: error });
  }
});

router.get("/getWorkers/:id", async (req, res) => {
  try {
    let result = await Business.getWorkersInBusiness(req.params.id);

    res.json(result);
  } catch (error) {
    console.error({ error: error });
  }
});

module.exports = router;
