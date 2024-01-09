const mongoose = require("mongoose");

const adminModel = new mongoose.Schema(
  {
    username: { type: String, required: true, trim: true },
    password: { type: String, required: true },
    role: { type: String, default: 'admin' },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admin", adminModel);

