const db = require("./db/db_conn");
module.exports = {
  getStudentByEmail: (email) => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM student WHERE email = ?",
        email,
        (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results[0]);
          }
        }
      );
    });
  },

  updatePasswordByEmail: (email, password) => {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE student SET password = ? WHERE email = ?",
        [password, email],
        (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        }
      );
    });
  },

  getStudentByResetToken: (resetToken) => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM student WHERE reset_password_token = ?",
        resetToken,
        (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results[0]);
          }
        }
      );
    });
  },
};
