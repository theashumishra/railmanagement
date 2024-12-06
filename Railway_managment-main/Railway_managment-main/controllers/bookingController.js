const Train = require('../models/Train');
const Booking = require('../models/Booking');

const bookSeat = (req, res) => {
  const { trainId, seatsBooked } = req.body;
  const userId = req.user.id;

  Train.getTrainAvailability(trainId, (err, trains) => {
    if (err || trains.length === 0) return res.status(404).json({ message: 'Train not found' });
    const train = trains[0];

    if (train.available_seats < seatsBooked) {
      return res.status(400).json({ message: 'Not enough available seats' });
    }

    // Handle race condition
    Train.updateAvailableSeats(trainId, train.available_seats - seatsBooked, (err, result) => {
      if (err) return res.status(500).json({ message: 'Error booking seat' });

      Booking.bookSeat(userId, trainId, seatsBooked, (err, bookingResult) => {
        if (err) return res.status(500).json({ message: 'Error booking seat' });
        res.status(200).json({ message: 'Seat booked successfully', booking: bookingResult });
      });
    });
  });
};

const getBookingDetails = (req, res) => {
  const { trainId } = req.query;
  const userId = req.user.id;

  Booking.getBookingDetails(userId, trainId, (err, bookingDetails) => {
    if (err || bookingDetails.length === 0) return res.status(404).json({ message: 'Booking not found' });
    res.status(200).json({ bookingDetails });
  });
};

module.exports = { bookSeat, getBookingDetails };
