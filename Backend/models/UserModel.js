// Assuming you have already installed and set up mongoose
const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  contact: {
    type: String,
    required: true
  },
  nic: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  petName: {
    type: String,
    required: true
  },
  petImage: {
    type: String, // Store the image URL
    required: true
  },
  breed: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
});

// Create the user model
const User = mongoose.model('User', userSchema);

module.exports = User;
