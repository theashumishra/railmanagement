const db = require("../config/db");

class Train {
  static addTrain(source, destination, totalSeats, availableSeats, callback) {
    const query = `INSERT INTO Trains (source, destination, total_seats, available_seats) VALUES (?, ?, ?, ?)`;
    db.query(
      query,
      [source, destination, totalSeats, availableSeats],
      callback
    );
  }

  static getTrainAvailability(source, destination, callback) {
    const query = `SELECT * FROM Trains WHERE source = ? AND destination = ?`;
    db.query(query, [source, destination], callback);
  }

  static updateAvailableSeats(trainId, availableSeats, callback) {
    const query = `UPDATE Trains SET available_seats = ? WHERE id = ?`;
    db.query(query, [availableSeats, trainId], callback);
  }
}

module.exports = Train;
