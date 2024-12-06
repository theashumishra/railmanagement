const db = require('../config/db');

class Booking {
  static bookSeat(userId, trainId, seatsBooked, callback) {
    const query = `INSERT INTO Bookings (user_id, train_id, seats_booked) VALUES (?, ?, ?)`;
    db.query(query, [userId, trainId, seatsBooked], callback);
  }

  static getBookingDetails(userId, trainId, callback) {
    const query = `SELECT * FROM Bookings WHERE user_id = ? AND train_id = ?`;
    db.query(query, [userId, trainId], callback);
  }
}

module.exports = Booking;
