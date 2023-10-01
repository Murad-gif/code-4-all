import React from "react";
import tick_img from "../../images/login-register-icons/404-tick.png";
import { Link } from "react-router-dom";
function DonationsConfirmation() {
  return (
    <div className="body">
      <div className="confirm-container">
        <div className="confirm-message">
          <div className="popup">
            <img src={tick_img} alt="tick img" />
            <h2 className="confirm-title">Thank you!</h2>
            <p>Your donation has been processed successfully!</p>
            <Link to="/">
              <button type="button" className="confirm-btn">
                OK
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationsConfirmation;
