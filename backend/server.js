const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactRoute = require('./routes/contactRoute');

// Initialize the Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all origins (customize if needed)
app.use(bodyParser.json());

// MongoDB Atlas connection string
const mongoURI = 'mongodb+srv://janhavikhonde8220:IwHJAQwGYkxaZdlA@cluster0.lwbv4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
// Connect to MongoDB Atlas
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.log('Error connecting to MongoDB:', error));

// Routes
app.use('/api/contact', contactRoute);

// Set up the server to listen on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
