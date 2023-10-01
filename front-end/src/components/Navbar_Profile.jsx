import React, { useState } from "react";
import Logo from "../images/navIcons/logo.png";
import donate from "../images/navIcons/donate.png";
import courseslogo from "../images/navIcons/courses.png";
import quizzeslogo from "../images/navIcons/quizzes.png";
import forumlogo from "../images/navIcons/forum.png";
import rankinglogo from "../images/navIcons/ranking.png";
import Loginlogo from "../images/navIcons/login.png";
import Profilelogo from "../images/navIcons/profile.jpeg";
import "../Styles/NavBar_Profile.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useRef } from "react";
function Navbar_Profile() {
  const handleScrollToStop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  //used for setting the state of the navbar menu in mobile version
  const [clicked, setClicked] = useState(false);
  const [logged, setLogged] = useState("");
  const [jwt, setJwt] = useState("");
  const [user, setUser] = useState([]);
  useEffect(() => {
    const valueFromLocalStorage = localStorage.getItem("loggedInUser");
    const valueFromLocalStorage2 = localStorage.getItem("jwt");
    if (valueFromLocalStorage) {
      setLogged(valueFromLocalStorage);
      setJwt(valueFromLocalStorage2);
    }
  }, []);

  const token = jwt;
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const Api = "http://localhost:8080/user/findByEmail";
  const params = {
    email: logged,
  };

  useEffect(() => {
    axios
      .get(Api, { headers, params })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [logged]);

  const userId = user && user.studentId;

  const defaultAvatarUrl = Profilelogo;
  const [image, setImage] = useState(defaultAvatarUrl);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/${userId}/image`, {
        responseType: "arraybuffer",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const blob = new Blob([response.data], { type: "image/jpeg" });
        const url = URL.createObjectURL(blob);
        setImage(url);
      })
      .catch((error) => console.log(error));
  }, [userId, token]);
  return (
    <>
      {/* Logo for website */}
      <div className="nav" id="nav">
        <div id="code4ALLlogo">
          <Link to="/">
            <img src={Logo} alt="" style={{ width: 140 }} />
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
            {/* Link for rankings page */}
            <Link to="Ranking" className="navLink" onClick={handleScrollToStop}>
              <img img src={rankinglogo} alt="rankings icon" />
              Rankings
            </Link>
          </li>

          <li>
            {/* Link for profile page */}
            <Link to="UPM" className="navLink" onClick={handleScrollToStop}>
              <img
                className="nav-img-profile"
                id="nav-img1"
                src={image}
                alt="profile icon"
              />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar_Profile;
