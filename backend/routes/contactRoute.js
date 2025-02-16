const express = require('express');
const Contact = require('../models/ContactModel');
const router = express.Router();

// Handle POST request for contact form submission
router.post('/', async (req, res) => {
  const { name, mobile, message } = req.body;

  // Create a new contact entry
  const newContact = new Contact({
    name,
    mobile,
    message,
  });

  try {
    // Save to database
    await newContact.save();
    res.status(200).send('Message received!');
  } catch (error) {
    res.status(500).send('Error saving the message.');
  }
});

module.exports = router;
