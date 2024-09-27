const express = require("express");
const router = express.Router();
const Worker = require("./models/workerModel");

router.post("/worker-payouts", async (req, res) => {
  const newPayout = await WorkerPayout.create(req.body);
  res.json(newPayout);
});

router.get("/worker-payouts/:workerId", async (req, res) => {
  const payouts = await WorkerPayout.findByWorkerId(req.params.workerId);
  res.json(payouts);
});

module.exports = router;
