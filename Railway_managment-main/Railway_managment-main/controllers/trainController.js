const Train = require('../models/Train');

const addTrain = (req, res) => {
  const { source, destination, totalSeats } = req.body;
  Train.addTrain(source, destination, totalSeats, totalSeats, (err, result) => {
    if (err) return res.status(500).json({ message: 'Failed to add train' });
    res.status(200).json({ message: 'Train added successfully' });
  });
};

const getSeatAvailability = (req, res) => {
  const { source, destination } = req.query;
  Train.getTrainAvailability(source, destination, (err, trains) => {
    if (err) return res.status(500).json({ message: 'Error fetching trains' });
    res.status(200).json({ trains });
  });
};

module.exports = { addTrain, getSeatAvailability };
