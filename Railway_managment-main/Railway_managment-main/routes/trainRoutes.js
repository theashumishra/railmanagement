const express = require('express');
const { addTrain, getSeatAvailability } = require('../controllers/trainController');
const authenticate = require('../middlewares/authMiddleware');

const adminOnly = require('../middlewares/adminMiddleware');
const router = express.Router();

router.post('/add', authenticate, adminOnly, addTrain); 
router.get('/availability', getSeatAvailability);

module.exports = router;
