import React, { useState, useEffect } from "react";
import "../Styles/Whylearn.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Whylearn() {
  const [loggedInUser, setLoggedinUser] = useState("");
  const Navigate = useNavigate();

  const fireAlert = (message, icon) => {
    Swal.fire({
      container: "swal2-container",
      title: message,
      icon: icon,
    }).then((result) => {
      //
    });
  };

  useEffect(() => {
    const saveLoggedinUser = localStorage.getItem("loggedInUser");
    if (saveLoggedinUser) {
      setLoggedinUser(saveLoggedinUser);
    }
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (!loggedInUser) {
      Navigate("/account");
    } else {
      fireAlert("you are already logged in!!!", "warning", "true");
    }
  };

  const handleScrollToStop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="whylearn">
      <div>
        <h2 className="why-title">Why Learn With Us?</h2>
      </div>
      {/* Card number one */}
      <div className="box">
        <div className="card">
          <svg
            xmlns="https://media2.giphy.com/media/RbDKaczqWovIugyJmW/giphy.gif?cid=ecf05e470rbsi337vv94s2pqydjn7dzqudotfrfnzbcsedf0&rid=giphy.gif&ct=g"
            width="50"
            height="50"
            fill="white"
            className="bi bi-laptop"
            viewBox="0 0 16 16"
          >
            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
          </svg>
          <h2>Wide range of coding languages</h2>
          <div className="pra">
            <p>At Coding4all, we provide courses for all coding languages.</p>
          </div>
        </div>
        {/* Card number two */}
        <div className="card">
          <svg
            xmlns="https://media2.giphy.com/media/RbDKaczqWovIugyJmW/giphy.gif?cid=ecf05e470rbsi337vv94s2pqydjn7dzqudotfrfnzbcsedf0&rid=giphy.gif&ct=g"
            width="50"
            height="50"
            fill="white"
            className="bi bi-coin"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
          </svg>

          <h2>It's FREE</h2>
          <div className="pra">
            <p>
              All content on Coding4all is free and available for all registered
              users.
            </p>
          </div>
        </div>
        {/* Card number three */}
        <div className="card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="White"
            className="bi bi-box2-heart"
            viewBox="0 0 16 16"
          >
            <path d="M8 7.982C9.664 6.309 13.825 9.236 8 13 2.175 9.236 6.336 6.31 8 7.982Z" />
            <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4h-8.5Zm0 1H7.5v3h-6l2.25-3ZM8.5 4V1h3.75l2.25 3h-6ZM15 5v10H1V5h14Z" />
          </svg>
          <h2>A good cause</h2>
          <div className="pra">
            <p>
              We aim to give learning oportunities for people in need across the
              world.
            </p>
          </div>
        </div>
      </div>
      <div className="button-container">
        {/* Link to login/signup page */}
        {/* <Link to="/account"> */}
        {/* <a href="/"> */}
        <button className="btn-1" onClick={handleClick}>
          Get started
        </button>
        {/* </a> */}
        {/* </Link> */}
      </div>
    </div>
  );
}
