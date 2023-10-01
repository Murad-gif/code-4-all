import React from "react";
import "../../Styles/CoursesStyles/Courses.css";
import clogo from "../../images/Courseimages/C++.jpg";
import javaimage from "../../images/Courseimages/JavaBackground.jpg";
import htmlimage from "../../images/Courseimages/html.jpg";
import js from "../../images/Courseimages/js.jpg";
import cssimage from "../../images/Courseimages/css.jpg";
import pythonimage from "../../images/Courseimages/python.jpg";
import reactimage from "../../images/Courseimages/react.jpg";
import mysqlimage from "../../images/Courseimages/mssql.webp";
import { Link } from "react-router-dom";
import Background2 from "./background/Background2";

function Courses() {
  const handleScrollToStop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="background">
      <div className="overflow-hidden">
        <div className="animated-border-box-glow"></div>
        <div className="animated-border-box"></div>
        <h5 className="header-drop-in" data-text="Coding4All">
          Coding4All
        </h5>

        <h4 className="drop-in-2">
          Computer Science Courses available for everyone free of cost. Learn
          programming and its concepts through topic based videos
        </h4>
      </div>
      <br></br>

      <div className="lightSpace"> </div>

      <div className="Courseswrapper">
        <div className="Coursescard">
          <img src={javaimage} alt="" />

          <div className="info">
            <h1 className="courseTitle">JAVA</h1>
            <Link to="/coursesvideos">
              <button onClick={handleScrollToStop}> Watch Videos</button>
            </Link>
          </div>
        </div>
        <div className="Coursescard">
          <img src={js} alt="" />
          <div className="info">
            <h1>Java Script</h1>

            <Link to="/javaScriptVideos">
              <button onClick={handleScrollToStop}> Watch Videos</button>
            </Link>
          </div>
        </div>

        <div className="Coursescard">
          <img src={clogo} alt="" />
          <div className="info">
            <h1>C++</h1>
            <button onClick={handleScrollToStop}>Watch Videos</button>
          </div>
        </div>
        <div className="Coursescard">
          <img src={mysqlimage} alt="" />
          <div className="info">
            <h1>My SQL</h1>

            <button onClick={handleScrollToStop}>Watch Videos</button>
          </div>
        </div>

        <div className="Coursescard">
          <img src={reactimage} alt="" />
          <div className="info">
            <h1>React</h1>
            <button onClick={handleScrollToStop}>Watch Videos</button>
          </div>
        </div>

        <div className="Coursescard">
          <img src={htmlimage} alt="" />
          <div className="info">
            <h1>HTML</h1>
            <button onClick={handleScrollToStop}>Watch Videos</button>
          </div>
        </div>
        <div className="Coursescard">
          <img src={cssimage} alt="" />
          <div className="info">
            <h1>CSS</h1>

            <button onClick={handleScrollToStop}>Watch Videos</button>
          </div>
        </div>

       
      </div>
    </div>
  );
}

export default Courses;
