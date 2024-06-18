const express = require("express");
const router = express.Router();

const EventUser = require("../model/user.modal.js");
const User = require("../model/user.js");

// Form1
router.post("/event-user-register", async (req, res) => {
  try {
    const {
      name,
      rollNo,
      department,
      college,
      phoneNo,
      email,
      performanceType,
      partnerName,
      memberNames
    } = req.body;

    console.log(req.body);

    // Create a new EventUser instance
    const registration = new EventUser({
      name,
      rollNo,
      department,
      college,
      phoneNo,
      email,
      performanceType,
      partnerName,
      memberNames
    });

    await registration.save();

    res.status(201).send({ message: "Data Submitted Successfully" });
  } catch (error) {
    console.error(error);

    res.status(400).json({ error: error.message });
  }
});

router.get("/get-event-users", (req, res) => {
  EventUser.find({})
    .sort({ name: 1 }) // Sort by name in ascending order
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: "An error occurred" });
    });
});

// Form2
router.post("/event-user-register-two", async (req, res) => {
  try {
    // Extract data from request body
    const {
      name,
      rollNo,
      department,
      college,
      phoneNo,
      email,
      performanceType,
      partnerName,
      memberNames
    } = req.body;
    console.log(req.body);
    // Create a new user instance using the User model
    const newUser = new User({
      name,
      rollNo,
      department,
      college,
      phoneNo,
      email,
      performanceType,
      partnerName,
      memberNames
    });
    console.log("<><>", newUser);
    // Save the user data to the database
    await newUser.save();

    // Respond with success message
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    // If an error occurs, respond with error message
    console.error("Error saving user data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/get-event-userss", (req, res) => {
  User.find({})
    .sort({ name: 1 }) // Sort by name in ascending order
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: "An error occurred" });
    });
});

module.exports = router;
