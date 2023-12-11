const express = require("express");

const router = express.Router();
const {
  createTour,
  getAllTours,
  getTour,
  updateTour,
  deleteTour,
  checkBody,
  aliasTopTours,
} = require("../controllers/tourController");

router.route("/top-5-cheap").get(aliasTopTours, getAllTours);

router.post("/", checkBody, createTour);
router.get("/", getAllTours);
router.get("/:id", getTour);
router.patch("/:id", updateTour);
router.delete("/:id", deleteTour);

module.exports = router;
