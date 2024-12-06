require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const trainRoutes = require('./routes/trainRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/train', trainRoutes);
app.use('/api/booking', bookingRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
