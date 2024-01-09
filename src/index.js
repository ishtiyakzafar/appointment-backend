const express = require("express");
const app = express();
const env = require("dotenv");
const cors = require("cors");
const port = process.env.PORT || 2000;

//ENVIRONMENT VARIABLE/CONSTANTS
env.config();

//MONGODB CONNECTION
require("./db/conn");

const adminRoutes = require("./routes/admin");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Appointment Tracking Server is up and running");
});

app.use("/api", adminRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


