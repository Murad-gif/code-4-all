import React from "react";
import "../Styles/WhoAreWe.css";
import Picture1 from "../images/WhoAreWe-icons/Picture1.png";

export default function WhoAreWe() {
  return (
    <div>
      <div>
        <h2 className="who-title">Who Are We?</h2>
      </div>
      <div className="center">
        <div className="box1">
          <img src={Picture1} height="250px" width="400px" alt="picture1" />
        </div>
        <div className="box2">
          <p>
            Coding4All was developed by a team of young developers, at Brunel
            Univeristy, with the sole purpose to change the lives of other
            students.
          </p>
        </div>
        <div className="box3">
          <p>
            Our team have a strong passion for coding and learning. They wish to
            provide useful resources so that other people may be able to nuture
            the same passion as they have.{" "}
          </p>
        </div>
        <div className="box4">
          <img src={Picture1} height="250px" width="400px" alt="picture2" />
        </div>
      </div>
    </div>
  );
}
