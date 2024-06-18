// Assuming you're using Express.js for your Node.js backend
const mongoose = require("mongoose");

// Define schema for user registration data
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rollNo: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  college: {
    type: String,
    required: true
  },
  phoneNo: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  performanceType: {
    type: String,
    required: true
  },
  partnerName: { type: String }, // Only for duo performance
  memberNames: [{ type: String }] // Only for group performance
});

const User = mongoose.model("User", userSchema);

module.exports = User;
