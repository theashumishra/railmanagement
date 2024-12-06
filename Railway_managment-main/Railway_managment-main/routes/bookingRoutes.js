const express = require('express');
const { bookSeat, getBookingDetails } = require('../controllers/bookingController');
const authenticate = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/book', authenticate, bookSeat);
router.get('/details', authenticate, getBookingDetails);

module.exports = router;
