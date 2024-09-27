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

const Payment = {
  createPayment(paymentMethod) {
    return knex("payment_methods").insert(paymentMethod).select("*");
  },
  updatePayment(id, paymentMethod) {
    return knex("payment_methods").where({ id }).update(paymentMethod);
  },
  deletePayment(id) {
    return knex("payment_methods").where({ id }).del();
  },
};
