const Admin = require("../model/admin");
const Student = require("../model/student");
const Appointment = require("../model/appointment");
const jwt = require("jsonwebtoken");

//REGISTER ADMIN
exports.adminRegister = async (req, res) => {
  try {
    const admin = await Admin.findOne({ username: req.body.username });
    if (admin) return res.status(400).json({ message: "username already exist, Try another" });
    const newAdmin = new Admin(req.body);
    await newAdmin.save();
    return res.status(201).json({ message: 'Your account is successfully created' });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};

//LOGIN ADMIN
exports.adminLogin = async (req, res) => {
  try {
    const admin = await Admin.findOne({ username: req.body.username });
    if (admin) {
      if (admin.password === req.body.password) {
        const { _id, role, username } = admin;
        const token = jwt.sign({ _id, role }, "jdad4a#$@hsehfjdhf", { expiresIn: "1d" });
        return res.status(200).json({ token, _id, role, username });
      } else {
        res.status(400).json({ message: "Incorrect email or password" });
      }
    } else {
      res.status(400).json({ message: "Incorrect email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};


exports.addStudent = async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    return res.status(201).json({ message: 'Student data added successfully' });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};

exports.getAllStudent = async (req, res) => {
  try {
    const result = await Student.find({}).sort({ createdAt: -1 });
    return res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: 'Student data delete successfully' });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    await Student.findByIdAndUpdate(req.body._id, { ...req.body }, { new: true });
    return res.status(200).json({ message: 'Student data updated successfully' });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};


exports.addAppointment = async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    return res.status(201).json({ message: 'Appointment data added successfully' });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};


exports.getAllAppointment = async (req, res) => {
  try {
    const result = await Appointment.find({});
    return res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};

exports.deleteAppointment = async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: 'Appointment data delete successfully' });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};

exports.updateAppointment = async (req, res) => {
  try {
    await Appointment.findByIdAndUpdate(req.body._id, { ...req.body }, { new: true });
    return res.status(200).json({ message: 'Appointment data updated successfully' });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong " + error });
  }
};

