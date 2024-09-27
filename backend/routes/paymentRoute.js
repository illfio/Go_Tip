const express = require("express");
const router = express.Router();
const PaymentMethod = require("./models/PaymentMethod");

router.post("/payment-methods", async (req, res) => {
  const newPaymentMethod = await PaymentMethod.create(req.body);
  res.json(newPaymentMethod);
});

router.get("/payment-methods/:userId", async (req, res) => {
  const methods = await PaymentMethod.findByUserId(req.params.userId);
  res.json(methods);
});
