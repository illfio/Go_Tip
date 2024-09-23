const express = require("express");
const router = express.Router();
const Customer = require("../model/customerModel");
const Worker = require("../model/workerModel");
const Owner = require("../model/ownerModel");
const Business = require("../model/businessModel");
const WorkerBusiness = require("../model/workerBusinessModel");

router.get("/getBusiness/:bid", async (req, res) => {
  const businessID = req.params.bid;
  try {
    let result = await Business.getBusinessInfo(businessID);
    res.json(result);
  } catch (error) {
    console.error({ error: error });
  }
});

router.get("/getWorkers/:bid", async (req, res) => {
  const businessID = req.params.bid;
  try {
    let result = await WorkerBusiness.getWorkersInBusiness(businessID);
    res.json(result);
  } catch (error) {
    console.error({ error: error });
  }
});

module.exports = router;
