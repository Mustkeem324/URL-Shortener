const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const app = express();

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Body parser middleware
app.use(express.json({ extended: false }));

// Define routes
app.use('/api/url', require('./routes/url'));

// Handle redirect to original URL
app.get('/:code', async (req, res) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.code });

    if (url) {
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json('No URL found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
