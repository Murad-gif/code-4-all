const { forgot_password, update_password } = require("./student_controller");

const { Router } = require("express");
const router = Router();

router.post("/api/student/forgot-password", forgot_password);
router.post("/api/student/reset-password", update_password);

module.exports = router;
