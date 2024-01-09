const mongoose = require("mongoose");
const studentModel = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    IEPduedate: { type: Date, required: true},
    phonenumber: { type: Number, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    postalcode: { type: String, required: true, trim: true },
    country: { type: String, required: true, trim: true },
    state: { type: String, required: true, trim: true },
    role: { type: String, default: 'user' },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentModel);

