import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import new_password from "../../images/login-register-icons/reset_email.svg";
import Swal from "sweetalert2";

function UpdatePassword() {
  const [email, setEmail] = useState("");
  // const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const Navigate = useNavigate();

  const fireAlert = (message, icon, navigate) => {
    Swal.fire({
      title: message,
      icon: icon,
    }).then((result) => {
      if (navigate) {
        if (result.isConfirmed) {
          Navigate("/account");
        }
      }
    });
  };

  const fireAlert1 = (message, icon, navigate) => {
    Swal.fire({
      title: message,
      icon: icon,
    }).then((result) => {
      if (navigate) {
        if (result.isDismissed) {
          //
        }
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      "http://localhost:5000/api/student/update-password",
      {
        newPassword,
        email,
      }
    );
    if (res.status === 200) {
      console.log(res.data);
      fireAlert("Password updated successfully!!!", "success", "true");
    } else {
      fireAlert1("Password not updated!!!", "error", "false");
    }
  };

  const indicator = document.querySelector(".pass-indicator");
  const input = document.querySelector(".pass");
  const weak = document.querySelector(".weak");
  const medium = document.querySelector(".medium");
  const strong = document.querySelector(".strong");
  const text = document.querySelector(".pass-text");
  const showPass = document.querySelector(".show-pass");
  const passRegexWeak = /[a-z]/;
  const passRegexMedium = /\d+/;
  const passRegexStrong = /.[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
  var no;

  const passwordIndicator = () => {
    if (input.value !== "") {
      indicator.style.display = "block";
      indicator.style.display = "flex";
      if (
        input.value.length <= 3 &&
        (input.value.match(passRegexWeak) ||
          input.value.match(passRegexMedium) ||
          input.value.match(passRegexStrong))
      )
        no = 1;
      if (
        input.value.length >= 6 &&
        ((input.value.match(passRegexWeak) &&
          input.value.match(passRegexMedium)) ||
          (input.value.match(passRegexMedium) &&
            input.value.match(passRegexStrong)) ||
          (input.value.match(passRegexWeak) &&
            input.value.match(passRegexStrong)))
      )
        no = 2;
      if (
        input.value.length >= 6 &&
        input.value.match(passRegexWeak) &&
        input.value.match(passRegexMedium) &&
        input.value.match(passRegexStrong)
      )
        no = 3;
      if (no === 1) {
        weak.classList.add("active");
        text.style.display = "block";
        text.textContent = "Your password is too weak";
        text.classList.add("weak");
      }
      if (no === 2) {
        medium.classList.add("active");
        text.textContent = "Your password is medium";
        text.classList.add("medium");
      } else {
        medium.classList.remove("active");
        text.classList.remove("medium");
      }
      if (no === 3) {
        weak.classList.add("active");
        medium.classList.add("active");
        strong.classList.add("active");
        text.textContent = "Your password is strong";
        text.classList.add("strong");
      } else {
        strong.classList.remove("active");
        text.classList.remove("strong");
      }
      showPass.style.display = "block";
      showPass.onclick = function () {
        if (input.type === "password") {
          input.type = "text";
          showPass.textContent = "HIDE";
          showPass.style.color = "#acacac";
        } else {
          input.type = "password";
          showPass.textContent = "SHOW";
          showPass.style.color = "#000";
        }
      };
    } else {
      indicator.style.display = "none";
      text.style.display = "none";
      showPass.style.display = "none";
    }
  };

  return (
    <div>
      <div className="body">
        <div className="account-container">
          <div className="forms-container">
            <div className="new">
              {/* Form that contains new password and confirm password fields */}
              <form className="sign-in-form" noValidate onSubmit={handleSubmit}>
                <h2 className="form-title">Reset Password</h2>
                {error && <p>{error}</p>}
                <div className="input-field">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email*"
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input
                    className="pass"
                    type="password"
                    name="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    onKeyUp={passwordIndicator}
                    placeholder="New Password*"
                  />
                  <span className="show-pass">SHOW</span>
                </div>
                <div className="pass-indicator">
                  <span className="weak"></span>
                  <span className="medium"></span>
                  <span className="strong"></span>
                </div>
                <div className="pass-text"></div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password*"
                  />
                </div>
                {/* Redirect to login form */}
                <input type="submit" className="account-btn" value="Change" />
              </form>
            </div>
          </div>

          <div className="new-panels-container">
            <div className="new-panel new-left-panel">
              <div className="new-panel-content">
                <h3>Have received a reset password email?</h3>
                <p>
                  Jut enter your new password here and you'll have access to
                  your account once again!
                </p>
              </div>
              <img src={new_password} className="image" alt="sign in logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdatePassword;
