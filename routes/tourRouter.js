const express = require('express');

const router = express.Router();
const {
  createTour,
  getAllTours,
  getTour,
  updateTour,
  deleteTour,
  checkId,
  checkBody,
} = require('../controllers/tourController');

// router.param('id', checkId);

router.post('/', checkBody, createTour);
router.get('/', getAllTours);
router.get('/:id', getTour);
router.patch('/:id', updateTour);
router.delete('/:id', deleteTour);

module.exports = router;
