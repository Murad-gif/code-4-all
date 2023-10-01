import React from 'react'
import img1 from"../images/footer image/brunel-logo-blue.png"
import img2 from "../images/footer image/codecademy-logo-vector.png"
import img3 from "../images/footer image/Logo_of_the_United_Nations.svg.png"
import img4 from "../images/footer image/ioc_logo_onwhite_aw.258x0-is-hidpi.png"
import "../Styles/Sponsors.css";
function Sponsors() {
  return (
    <div className="sponsor-header">
        <h2>Sponsored By</h2>

        <div className="row">
          <div className="sponsor-feature">
            <img
              alt=""
              src={img1}
              style={{ width: "200px" }}
            />
          </div>

          <div className="sponsor-feature">
            <img
              alt=""
              src={img2}
              style={{ width: "155px" }}
            />
          </div>

          <div className="sponsor-feature">
            <img
              alt=""
              src={img3}
              style={{ width: "155px" }}
            />
          </div>

          <div className="sponsor-feature">
            <img
              alt=""
              src={img4}
              style={{ width: "155px" }}
            />
          </div>
        </div>
      </div>
  )
}

export default Sponsors