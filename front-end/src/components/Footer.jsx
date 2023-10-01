import React from "react";
import logo from "../images/navIcons/Code4ALL Logo.png";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import "../Styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const handleScrollToStop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer">
      {/* Section 1 - Footer About */}
      <div className="footer-container-left">
        <Link to="/">
          <img src={logo} alt="logo" style={{ width: 140 }} />
        </Link>
        <h3 className="footer-about-us">About Us</h3>
        <p className="about-par">
          Coding4All was developed by a team of young developers, at Brunel
          Univeristy, with the sole purpose to change the lives of other
          students.
        </p>
      </div>
      {/* Section 2 - Footer Contact */}
      <ul className="footer-container-right">
        <li>
          <h3 className="footer-title">Contact Us</h3>
          <ul className="footer-box contact">
            <li>
              <a className="link" href="mailto:Code4All@hotmail.com">
                Code4All@hotmail.com
              </a>
            </li>
            <li>
              <p className="link">Phone: +44 123-456-7890</p>
            </li>
          </ul>
        </li>
        {/* Section 3 - Footer Links */}
        <li className="features">
          <h3 className="footer-title">Links</h3>
          <ul className="footer-box link h-box">
            <li>
              <Link
                to="donations"
                className="link"
                onClick={handleScrollToStop}
              >
                Donate
              </Link>
            </li>
            <li>
              <Link to="FAQ" className="link" onClick={handleScrollToStop}>
                FAQ
              </Link>
            </li>
            <li>
              <Link to="courses" className="link" onClick={handleScrollToStop}>
                Courses
              </Link>
            </li>
            <li>
              <Link to="quizzes" className="link" onClick={handleScrollToStop}>
                Quizzes
              </Link>
            </li>
            <li>
              <Link to="Ranking" className="link" onClick={handleScrollToStop}>
                Rankings
              </Link>
            </li>
          </ul>
        </li>
        {/* Section 3 - Footer Social Media */}
        <li>
          <h3 className="footer-title">Social Media</h3>
          <ul className="footer-box social">
            <li>
              <a
                href="http://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillFacebook />
              </a>
            </li>
            <li>
              <a
                href="http://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li>
              <a href="http://www.twitter.com" target="_blank" rel="noreferrer">
                <AiFillTwitterCircle />
              </a>
            </li>
          </ul>
        </li>
      </ul>

      <div className="animations">
        <div className="animation" id="animation1"></div>
        <div className="animation" id="animation2"></div>
        <div className="animation" id="animation3"></div>
        <div className="animation4" id="animation4"></div>
      </div>

      <div className="footer-container-bottom">
        <p>All Rights Reserved by &copy;Code4All 2022</p>
      </div>
    </div>
  );
}

export default Footer;
