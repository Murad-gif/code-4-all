const {
  getStudentByEmail,
  getStudentByResetToken,
  updatePasswordByEmail,
} = require("./student_service");
const db = require("./db/db_conn");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const { randomUUID } = require("crypto");

const transporter = nodemailer.createTransport({
  service: process.env.SERVICE,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

module.exports = {
  forgot_password: async (req, res) => {
    const { email } = req.body;
    console.log(email);

    try {
      const user = await getStudentByEmail(email);
      console.log(user);

      if (!user) {
        return res.status(401).send("Invalid email address. Try again!!!");
      }

      const resetToken = randomUUID();
      console.log("Line 75: " + resetToken);
      const resetExp = new Date(Date.now() + 3600000);
      console.log("Line 77: " + resetExp);

      db.query(
        "UPDATE student SET reset_password_token = ?, reset_exp = ? WHERE email = ?",
        [resetToken, resetExp, email]
      );

      console.log("Line 84: " + email);

      const url = `http://localhost:3000/newPassword/${resetToken}`;

      console.log("Line 88: " + url);

      const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: email,
        subject: "Reset Password",
        html: `<h4>Hello, ${user.first_name}</h4>
        <p>You have requested to reset your password.</p>
        <p>Click the link below to change your password:</p>
        <p><a href=${url}>Reset password</a></p><br>
        <p>Ignore this email if you do remember your password, or you have not made the request.</p>`,
      };
      await transporter.sendMail(mailOptions);

      res.send("Email found. Email has been sent with reset link!!!");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  },

  update_password: async (req, res) => {
    const { resetToken, newPassword } = req.body;
    console.log(resetToken);
    console.log(newPassword);

    try {
      const student = await getStudentByResetToken(resetToken);
      console.log(student);

      if (!student) {
        return res
          .status(401)
          .send("Invalid token. No user with that token!!!");
      }

      if (!student || student.reset_exp < new Date()) {
        return res.status(400).json({ message: "Invalid or expired token" });
      }
      console.log(student.reset_exp);

      const enteredPassword = newPassword;
      console.log("Line 95: " + enteredPassword);
      const hashedPassword = await bcrypt.hash(enteredPassword, 10);
      console.log("Line 97: " + hashedPassword);

      await updatePasswordByEmail(student.email, hashedPassword);

      console.log("Line 104:" + hashedPassword);
      console.log("Line 105: " + student.email);

      res.send("Password updated successfully!!!");
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal server error");
    }
  },
};
