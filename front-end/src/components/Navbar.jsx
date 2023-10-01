import React, { useState } from "react";
import Logo from "../images/navIcons/logo.png";
import donate from "../images/navIcons/donate.png";
import courseslogo from "../images/navIcons/courses.png";
import quizzeslogo from "../images/navIcons/quizzes.png";
import forumlogo from "../images/navIcons/forum.png";
import Loginlogo from "../images/navIcons/login.png";
import "../Styles/NavBar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const handleScrollToStop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  //used for setting the state of the navbar menu in mobile version
  const [clicked, setClicked] = useState(false);

  
  return (
    <>
      {/* Logo for website */}
      <div className="nav" id="nav">
        <div id="code4ALLlogo">
          <Link to="/">
            <img src={Logo} alt="Code4All logo" style={{ width: 140 }} />
          </Link>
        </div>
        {/* Menu for mobile version */}
        {/* When menu is open show cross otherwise show a hamburguer menu when closed */}
        <div className="menu-icon" onClick={() => setClicked(!clicked)}>
          {clicked ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </div>
        <ul
          id="list-switch"
          className={clicked ? "list-switch mobile" : "list-switch"}
          onClick={() => setClicked(false)}
        >
          <li>
            {/* Link for donations page */}
            <Link
              to="donations"
              className="navLink"
              onClick={handleScrollToStop}
            >
              <img src={donate} alt="donate icon" />
              Donate
            </Link>
          </li>
          <li>
            {/* Link for courses page */}
            <Link to="courses" className="navLink" onClick={handleScrollToStop}>
              <img src={courseslogo} alt="courses icon" />
              Courses
            </Link>
          </li>

          <li>
            {/* Link for quizzes page */}
            <Link to="Quizzes" className="navLink" onClick={handleScrollToStop}>
              <img src={quizzeslogo} alt="quizzes icon" />
              Quizzes
            </Link>
          </li>
          <li>
            {/* Link for forum page */}
            <Link
              to="Forum_landing"
              className="navLink"
              onClick={handleScrollToStop}
            >
              <img img src={forumlogo} alt="forum icon" />
              Forum
            </Link>
          </li>

          <li>
            {/* Link for login/signup page */}
            <Link to="account" className="navLink" onClick={handleScrollToStop}>
              <img className="" img src={Loginlogo} alt="login icon" />
              Login
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
