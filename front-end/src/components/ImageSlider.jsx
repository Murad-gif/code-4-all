import React, { useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "../Styles/ImageSlider.css";
import Gif from "../images/elearning.gif";
import Gif2 from "../images/online-learning.gif";
import Gif3 from "../images/donate-gif.gif";
import Gif4 from "../images/forum.gif";
import Gif5 from "../images/leaderboard.gif";

const delay = 4500;

const SliderData = [
  {
    image:
      "https://cdn.discordapp.com/attachments/1048691975437684746/1048980068854141039/1.png",
    text: "learn programming easily from anywhere and improve your knowledge",
  },
  {
    image:
      "https://miro.medium.com/v2/format:jpg/resize:fill:80:56/0*7Q3yvSIv_t0ioJ-Z.gif",
    text: "Watch programming videos from a range of Courses",
  },

  {
    image:
      "https://cdn.images.express.co.uk/img/dynamic/130/590x/Easy-quiz-questions-1282929.jpg?r=1621866486163",
    text: "Do Quizzes on courses you feel confident about",
  },

  {
    image:
      "https://cdn.imweb.me/upload/S202108243f92708905182/614781d074140.jpg",
    text: "Join Us to meet UN's Quality Education Goal",
  },
  {
    image:
      "https://img.freepik.com/free-vector/people-carrying-donation-charity-related-icons_53876-43091.jpg",
    text: "Help us, so that we can help those who are in need of education",
  },
];
const ImageSlider = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === SliderData.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="imgSlider">
      <div
        className="imgshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {SliderData.map((item, index) => (
          <div className="slide" key={index}>
            {" "}
            <img src={item.image} alt="slider" />
            <p className="sliderText">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="slideButtons">
        {SliderData.map((_, idx) => (
          <div
            key={idx}
            className={`sileShowButton${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
