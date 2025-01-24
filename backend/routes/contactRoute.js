const express = require('express');
const router = express.Router();
const Contact = require('../models/ContactModel');

// POST endpoint to handle contact form submissions
router.post('/', async (req, res) => {
  try {
    const { name, mobile, message } = req.body;

    // Create a new Contact document in MongoDB
    const newContact = new Contact({
      name,
      mobile,
      message,
    });

    // Save the contact to the database
    await newContact.save();

    // Send a success response
    res.status(200).send('Message sent successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong!');
  }
});

module.exports = router;
