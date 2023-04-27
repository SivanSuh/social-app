const express = require("express");
const cardModel = require("../models/cardModel");
const {
  getAllCard,
  addCard,
  updateCard,
  deleteCard,
} = require("../controllers/cardController");

const router = express.Router();

router.get("/all-card", getAllCard);
router.post("/create-card", addCard);
router.put("/update-card", updateCard);

router.delete("/delete-card/:id", deleteCard);
module.exports = router;
