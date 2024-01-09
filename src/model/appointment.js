const mongoose = require("mongoose");

const appointmentModel = new mongoose.Schema(
  {
    startdate: { type: Date, required: true},
    enddate: { type: Date, required: true},
    studentid: { type: String, required: true, trim: true },
    appointmenttype: { type: String, required: true, trim: true },
    teachername: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    fileholder: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", appointmentModel);

