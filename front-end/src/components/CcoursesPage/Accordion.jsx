import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useOutletContext } from "react-router-dom";

import ReactPlayer from "react-player";




const Accordion = ({ loggedInUser, CurrentCourseID,fireAlert }) => {

 










  const jwt = sessionStorage.getItem("jwt");

  const [videoUrl, setVideoUrl] = useState("");

  const [category, setCategory] = useState([]);

  const course = 1;

  useEffect(() => {
    axios
      .get(`http://localhost:8080/categories/${CurrentCourseID}`, {})
      .then((resp) => {
        // console.log(resp.data);

        setCategory(resp.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(category);
  //console.log("cat" + JSON.stringify(category));

  const retrieveUrl = (videoName, courseID) => {
    const i = category.find(
      (video) =>
        video.videoName === videoName && video.course.courseID === courseID
    );
    const url = i.url;
  };

  const [showPlayer, setShowPlayer] = useState(false);

  function playVideo(url) {
    setVideoUrl(url);
    setShowPlayer(true);
  }
  const [disableBtn, setDisableBtn] = useState(false);

  const [activeIndex, setActiveIndex] = useState(null);
  const [rotate, setRotate] = useState(null);

  const colors = ["#a0acea", "#fe9687", "#ffe587","#009B77","#7FCDCD","#C3447A","#A0DAA9","#E8A798"];

  const handleDropdown = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const checkIfloggedIn = (url) => {
    if (loggedInUser) {
      playVideo(url);
    } else {
      const message = "Please log in to Watch", icon='error',nevigate="true"
      fireAlert(message,icon,nevigate);
    }
  };

  console.log(videoUrl);

  return (
    <div>
      {showPlayer && (
        <div className="video-player-popup">
          <button className="closeIcon" onClick={() => setShowPlayer(false)}>
            <i class="fa-sharp fa-solid fa-xmark fa-2x" size={"10px"}></i>
          </button>
          <ReactPlayer
            className="videoPlayer"
            url={videoUrl}
            controls={true}
            width="100%"
            height="100%"
          />
        </div>
      )}

      <div className="Accordion" style={{ position: "relative", zIndex: 2 }}>
        {category.map((item, index) => (
          <>
            <div
              className="dropdown-btn"
              key={index}
              style={{ backgroundColor: colors[index]}}
              onClick={() => {
                handleDropdown(index);
              }}
            >
              <span className="line-2"></span>
              <span className="line-1">{item.categoryName}</span>
              <i
                className="fa fa-angle-right"
                style={{
                  transform: `rotate(${activeIndex === index ? 90 : 0}deg)`,
                  transition: "all 0.25s",
                }}
              ></i>
            </div>
            <div>
              {activeIndex === index && (
                <div className="dropdown-container">
                  {item.videos.map((link, i) => (
                    <button
                      className="videoLinks"
                      href="#!"
                      key={i}
                      id="check"
                      onClick={() => {
                        checkIfloggedIn(link.url);
                      }}
                    >
                      {link.videoName}
                      <i className="fa-regular fa-circle-play"></i>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
export default Accordion;
