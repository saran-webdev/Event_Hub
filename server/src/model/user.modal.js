const mongoose = require("mongoose");

// Define EventUserSchema and model
const EventUserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNo: { type: String, required: true },
  department: { type: String, required: true },
  college: { type: String, required: true },
  phoneNo: { type: String, required: true },
  email: { type: String, required: true },
  performanceType: { type: String, required: true },
  partnerName: { type: String }, // Only for duo performance
  memberNames: [{ type: String }] // Only for group performance
});

const EventUser = mongoose.model("Event-User-Data", EventUserSchema);

module.exports = EventUser;
