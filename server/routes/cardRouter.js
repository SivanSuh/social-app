const express = require("express");
const cardModel = require("../models/cardModel");
const router = express.Router();

router.get("/all-card", async (req, res) => {
  try {
    const getAllCrad = await cardModel.find();
    res.send(getAllCrad);
  } catch (error) {
    console.log(error);
  }
});
router.post("/create-card", async (req, res) => {
  try {
    const newCard = new cardModel(req.body);
    await newCard.save();
  } catch (err) {
    res.status(400).json(err);
  }
});
router.put("/update-card", async (req, res) => {
  try {
    await cardModel.findOneAndUpdate({ _id: req.body.cardId }, req.body);
    res.status(200).json("card updated");
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delete-card", async (req, res) => {
  try {
    await cardModel.findOneAndDelete({ _id: req.body.cardId });
    res.status(200).json("Card Silindi");
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
