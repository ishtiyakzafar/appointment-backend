const express = require("express");
const router = express.Router();
const { requireLogin, adminMiddleware } = require("../common-middleware");
const {
  adminLogin,
  adminRegister,
  addStudent,
  getAllStudent,
  deleteStudent,
  updateStudent,
  addAppointment,
  getAllAppointment,
  deleteAppointment,
  updateAppointment,
} = require("../controllers/admin");

router.post("/admin/login", adminLogin);
router.post("/admin/register", adminRegister);
router.post("/admin/add-student", requireLogin, adminMiddleware, addStudent);
router.get("/admin/get-all-student", requireLogin, adminMiddleware, getAllStudent);
router.delete("/admin/delete-student/:id", requireLogin, adminMiddleware, deleteStudent);
router.post("/admin/update-student", requireLogin, adminMiddleware, updateStudent);


router.post("/admin/add-appointment", requireLogin, adminMiddleware, addAppointment);
router.get("/admin/get-all-appointment", requireLogin, adminMiddleware, getAllAppointment);
router.delete("/admin/delete-appointment/:id", requireLogin, adminMiddleware, deleteAppointment);
router.post("/admin/update-appointment", requireLogin, adminMiddleware, updateAppointment);

module.exports = router;
