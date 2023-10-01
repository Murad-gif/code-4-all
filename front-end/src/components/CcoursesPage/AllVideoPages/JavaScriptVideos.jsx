import axios from "axios";
import React, { useEffect, useRef, useState, useCallback } from "react";
import ReactPlayer from "react-player";
import "../../../Styles/CoursesStyles/CoursesVideos.css";
import { useOutletContext, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getReviews } from "../APIs/RetrieveReviews";
import Background from "../background/Background";
import Accordion from "../Accordion";
import SortIcon from "../../../images/forum/sort.png";
import Swal from "sweetalert2";

function JavaScriptVideos() {
    const reDirect = useNavigate();
    const CurrentCourseID = "2";
 //getting logged in user from loaclStorage
 const [loggedInUser, setLoggedinUser] = useState("");

 useEffect(() => {
   const saveLoggedinUser = localStorage.getItem("loggedInUser");
   if (saveLoggedinUser) {
     setLoggedinUser(saveLoggedinUser);
   }
 }, []);
 console.log(loggedInUser);
 const curUser = localStorage.getItem("loggedInUser");

 //getting the current date using this function
 const current = new Date();
 const getCurrentDate = `${current.getDate()}/${
   current.getMonth() + 1
 }/${current.getFullYear()}`;

 //review body for the post mapping
 //const [rating, setRating] = useState(0);
 const [hover, setHover] = useState(0);
 const [review, setReview] = useState({
   courseID: "2",
   // studentId:"1",// current user is got from the backend
   ratingStars: "",
   reviewDesc: "",
   createdAt: getCurrentDate,
   email:curUser
 });

 // used to get the current user

 //console.log("ff"+currentUser.email)
 console.log("this");
 const [userdata, setUserdata] = useState("");

 const [currentStudentID, setCurrentStudentID] = useState("");

 const [checkrating, setCheckRating] = useState("");
 const [checkReview, setCheckReview] = useState("");

 // getting the review text and store in the review object of posting purposes

 const { courseID, ratingStars, reviewDesc, createdAt,email } = review;
 const onInputChange = (e) => {
   setReview({ ...review, [e.target.name]: e.target.value });
   setCheckReview(e.target.value);
 };

 // getting the selected star and store in the review object of posting purposes
 const onStarsClick = (rating) => {
   setReview({ ...review, ratingStars: rating, courseID: courseID });
   setCheckRating(rating);
 };

 useEffect(() => {
    axios
      .get(`http://localhost:8080/categories/${CurrentCourseID}`, {})
      .then((resp) => {
        // console.log(resp.data);

      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

 //function used to deal with the edited review copy
 function handleEdit(ratingID) {
   const i = reviews.findIndex((review) => review.ratingID === ratingID);
   setReview(reviews[i]);

   const reviewCopy = {
     ratingID: reviews[i].ratingID,
     courseID: "2",
     // studentId:"1",
     ratingStars: reviews[i].ratingStars,
     reviewDesc: reviews[i].reviewDesc,
     createdAt: getCurrentDate,
     email:curUser

   };
   setReview(reviewCopy);
 }



 const sortByDescendingReviews = (event) => {
    
  setReviews([...reviews.sort(
    (a, b) =>
      new Date(...b.createdAt.split("/").reverse()) -
      new Date(...a.createdAt.split("/").reverse())
      
  )
])
};
const sortByAscendingReviews = (event) => {
  setReviews([...reviews.sort(
    (a, b) =>
      new Date(...a.createdAt.split("/").reverse()) -
      new Date(...b.createdAt.split("/").reverse())
      
  )
])
};

const sortBYRatingAsc = (event) => {

  setReviews([...reviews.sort((a, b) => {
    return a.ratingStars - b.ratingStars;
})])

  

};
const sortBYRatingDsc = (event) => {
  setReviews([...reviews.sort((a, b) => {
    return b.ratingStars - a.ratingStars;
})])
};



 // method used to post and edit review--
 // if statement checks if review has an id to call the edit mapping else if null calls the post mapping
 const onSubmit = async (e) => {
   e.preventDefault();

   const jwt = localStorage.getItem("jwt");

   if (review.ratingID) {
     await axios
       .put(`http://localhost:8080/update/${review.ratingID}`, review, {
         headers: { Authorization: `Bearer ${jwt}` },
       })
       .then((d) => {
         const reviewsCopy = [...reviews];
         const i = reviewsCopy.findIndex((review) => review.ratingID === d.id);
         reviewsCopy[i] = d;
         setReviews(reviewsCopy);

         setReview({
           courseID: "2",
           ratingStars: "",
           reviewDesc: "",
           createdAt: getCurrentDate,
           email:curUser

         });
         //alert("review edited");
       }) //;
       .catch(async (error) => {
         console.log(error);
       });
   } else {
     await axios
       .post("http://localhost:8080/review", review, {
         headers: { Authorization: `Bearer ${jwt}` },
       })
       .then((response) => {
         console.log("status" + response);
         if (response.status === 201) {
          // alert("Registered Successfully!!!");
           setReview({
             courseID: "2",
             ratingStars: "",
             reviewDesc: "",
             createdAt: getCurrentDate,
             email:curUser

           });
         } else {
         ///  alert("you already have a review");
         }
       })

       .catch(async (error) => {
         console.log(review);
         console.log(error);
      //   alert("you already have a review");
       });

     // setForm(false);
     // onStarsClick(0);
     //setHover(0);
   }

   setReview({
     courseID: "2",
     ratingStars: "",
     reviewDesc: "",
     createdAt: getCurrentDate,
     email:curUser

   });
   setForm(false);

   retrieveReviews();
   setCheckReview("");
   setCheckRating("");
   setHover(0);
 };

 const [reviews, setReviews] = useState([]); // retrieved reveiws is stored in this array
 const [average, setAverage] = useState(0);
 const [totalReviews, setTotalReviews] = useState(null);

 const jwt = localStorage.getItem("jwt");
 console.log(jwt);
 const retrieveReviews = () =>
   getReviews({ setTotalReviews, average, setReviews, jwt,CurrentCourseID });

 useEffect(() => {
   // getReviews();
   retrieveReviews();
 }, []);

 const [visible, setVisible] = useState(10);

 const showMoreReviews = () => {
   setVisible((prevValue) => prevValue + 10);
 };
 const showLessReviews = () => {
   setVisible((prevValue) => prevValue - 5);
 };

 console.log(reviews);

 const getAverage = (reviews) => {
   if (reviews.length == null) {
     return;
   }
   const sum = 0;
   for (let i = 0; i < reviews.length; i++) {
     sum += parseInt(reviews[i].ratingStars);
   }
   const averagee = sum / reviews.length;
   return averagee;
 };

 const deleteReview = (ratingID) => {
   axios
     .delete(`http://localhost:8080/delete/${ratingID}`, {
       headers: { Authorization: `Bearer ${jwt}` },
     })
     .then((response) => {
       if (response.data != null) {
       //  alert("deleted successfully ");
       }
       retrieveReviews();
     })
     .catch((error) => {
       console.error(error);
     });
   retrieveReviews();
 };

 const [totalSum, setTotalSum] = useState(0);

 useEffect(() => {
   const total = reviews.reduce(
     (acc, row) => acc + parseFloat(row.ratingStars),
     0
   );

   setTotalSum((total / totalReviews).toFixed(1));
 }, [reviews]);

 const params = {
   email: loggedInUser,
 };

 const [quiz, setQuiz] = useState([]);
 const [quizLength, setQuizLength] = useState(0);

 useEffect(() => {
   axios
     .get("http://localhost:8080/quiz/murad8@gmail.com", {
       headers: { Authorization: `Bearer ${jwt}` },
     })
     .then((response) => {
       setQuiz(response.data);
       setQuizLength(response.data.length);
     })
     .catch((error) => {
       console.error(error);
      // alert("cant get quiz");
     });
 }, []);
 console.log("quiz", quiz);

 const [widthValue, setWidthValue] = useState(0);

 useEffect(() => {
   const passedQuiz = quiz.filter((item) => item.result === "pass");
   const numberOfActiveItems = passedQuiz.length;

   const progressBarWidth =
     quizLength > 1 ? ((numberOfActiveItems - 1) / (quizLength - 1)) * 100 : 0;
   setWidthValue(progressBarWidth);
 }, [quiz]);

 const [showPlayer, setShowPlayer] = useState(false);

 function handleClick(url) {
   setVideoUrl(url);
   setShowPlayer(true);
 }

 const [showForm, setForm] = useState(false);
 function handleForm() {
   setForm(true);
 }
 function closeForm() {
   setReview({
     courseID: "2",
     ratingStars: "",
     reviewDesc: "",
     createdAt: getCurrentDate,
     email:curUser

   });
   setCheckReview("");
   setCheckRating("");
   setForm(false);
 }

 /*function dropdown() {
   const dropdown = document.getElementsByClassName("dropdown-btn");
   var i;

   for (i = 0; i < dropdown.length; i++) {
     dropdown[i].addEventListener("click", function () {
       this.classList.toggle("active");
     });
   }
 }*/

 const [videoUrl, setVideoUrl] = useState("");

 const [videos, setVideos] = useState([]);

 useEffect(() => {
   axios
     .get(`http://localhost:8080/videos`, {
       headers: { Authorization: `Bearer ${jwt}` },
     })
     .then((response) => {
       console.log(response.data);

       setVideos(response.data);
     })
     .catch((error) => {
       console.error(error);
     });
 }, []);

 console.log(videos);

 const retrieveUrl = (videoName, courseID) => {
   const i = videos.find(
     (video) =>
       video.videoName === videoName && video.course.courseID === courseID
   );
   const url = i.url;

   setVideoUrl(url);
 };

 const [hasReview, setHasReview] = useState(false);

 useEffect(() => {
   const hasReview = reviews.filter(
     (item) => item.students.email === loggedInUser
   );
   if (hasReview.length > 0) {
     console.log("rfrs true");
     setHasReview(true);
   } else {
     setHasReview(false);
   }
 }, [reviews, loggedInUser]);
 console.log(hasReview);

 const deleteAlert = (x) => {
  Swal.fire({
    title: "Do you want to delete this Review?",

    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "Cancel",
    confirmButtonColor: "#ff0055",
    cancelButtonColor: "#999999",
    icon: "warning",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */

    if (result.isConfirmed) {
      deleteReview(x);
      Swal.fire("Review Deleted Successfully", "", "success");
    } else Swal.fire(" Cancelled", "", "error");
  });
};

const fireAlert = (message, icon, nevigate) => {
  Swal.fire({
    container: "swal2-container",

    title: message,

    icon: icon,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (nevigate)
      if (result.isConfirmed) {
        reDirect("/Account");
      }
  });
};

const checkIfFilled = (e) => {
  if (!loggedInUser) {
    const message = "Please log in to Review",
      icon = "error",
      nevigate = "true";
    fireAlert(message, icon, nevigate);
  } else if (!review.ratingID) {
    if (hasReview) {
      const message = "you already have a review",
        icon = "warning";
      fireAlert(message, icon);
    } else {
      if (checkReview && checkrating) {
        //alert("check");
        onSubmit(e);
        const message = "Review added successfully",
          icon = "success";
        fireAlert(message, icon);
      } else {
        const message = "Please Fill ALl the Fields",
        icon = "error";
      fireAlert(message, icon);      }
    }
  } else {
    if (review.ratingID) {
      if (!checkReview && !checkrating) {
        const message = "please change Rating or Review",
        icon = "error";
      fireAlert(message, icon);
          } else {
        onSubmit(e);

        const message = "Review Edited successfully",
          icon = "success";
        fireAlert(message, icon);
      }
    }
  }
};















  return (
   



    <div className="couresesVideos">
    <Background />

    <div className="discription">
      <h1 className="header">Learn JavaScript Programming (In Ten Easy Steps) </h1>
      <h2 className="sub-header">
        The simplest way to learn JavaScript programming.
      </h2>
    </div>
    <div className="objectVideos">
      <div className="wyl">What you will learn </div>
      <div className="wyl-list">
        <li>Use the source code examples to learn step-by-step </li>
      </div>
      <div className="b">
        <li>Master JavaScript programming concepts from the ground up</li>
        <div className="c">
          <li>
            {" "}
            Use the source code examples to learn step-by-step Understand the
            special features of JavaScript: object orientation, the .NET framework,
            error-handling, serialization
          </li>
        </div>
      </div>
    </div>
    <div className="Space"> </div>

    <Accordion CurrentCourseID={2} loggedInUser={loggedInUser}  />

    <div className="trackerContainer">
      Quiz Progress For this Course
      <div className="tracker">
        <div
          className="tracker-progress"
          style={{ width: `${widthValue}%` }}
        ></div>
        <div className="tracker-items">
          {quiz.map((quizzes, i) => (
            <div
              key={i}
              className={
                "tracker-item" + (quizzes.result === "pass" ? " active" : "")
              }
            >
              <div className="tracker-name">{quizzes.quizType} Quiz</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="Coursediscription">
      <h1 className="DescriptionHeader">Discription </h1>
      <div className="DescriptionText">
        Learn JavaScript Programming (in ten easy steps) [Version 2] is suitable for
        beginner programmers or anyone with experience in another programming
        language who needs to learn JavaScript from the ground up. Step-by-step it
        explains how to write JavaScript code to develop Windows applications using
        either the free Visual Studio Community Edition or a commercial
        edition of Microsoft Visual Studio (it even explains how to write JavaScript
        programs using free tools for OS X). This is the completely revised
        and updated second version of this course. JavaScript is one of the most
        widely used an important of all modern programming languages. If you
        need to learn JavaScript quickly and painlessly, this is the perfect course.
        You will begin by learning the core features of programming variables,
        constants, functions and data types. You will move on rapidly to learn
        about Object Orientation and the more advanced features of JavaScript and the
        .NET framework such as file-handling, data-streaming, dealing with
        exceptions (errors) and overriding methods. Even if you start out as a
        complete beginner, by the end of this course you will have built a
        really solid foundation of programming knowledge and skills.
      </div>
    </div>

    <div className="reviewsContainer">
      <div className="averageRating">
        {totalSum}
        <div className="reviewFilterOptions">
            <a href="#!" className="reviewsSort">
              <label for="reviewsortbtn">
                <img src={SortIcon} alt="" />
              </label>
              <input type="checkbox" id="reviewsortbtn" />

              <ul className="reviewsSort-optn">
                <li>
                  <a href="#!"onClick={sortByDescendingReviews}>
                    Sort By Date Asc
                  </a>
                </li>
                <li>
                  <a href="#!"  onClick={sortByAscendingReviews}>
                    Sort By Date Desc
                  </a>
                </li>
                <li>
                  <a href="#!" onClick={sortBYRatingAsc}>
                    Sort By Rating Asc
                  </a>
                </li>
                <li>
                  <a href="#!" onClick={sortBYRatingDsc}>
                    Sort By Rating Desc
                  </a>
                </li>
              </ul>
            </a>
          </div>
        <i className="star fa fa-star">
          Course Rating | {totalReviews} ratings
        </i>
      </div>
      <button className="submitButton" onClick={() => handleForm()}>
        Review
      </button>

      {showForm && (
        <div className="ratingContainer">
          <button
            className="ratingcloseIcon"
            onClick={() => {
              closeForm();
              setHover(0);
            }}
          >
            <i class="fa-sharp fa-solid fa-xmark fa-1x" size={"1px"}></i>
          </button>
          <h1> How was the Course?</h1>
          <div className="star-rating">
            {[...Array(5)].map((star, index) => {
              index += 1;
              return (
                <button
                  type="button"
                  key={index}
                  className={index <= (hover || ratingStars) ? "on" : "off"}
                  onClick={() => onStarsClick(index)}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(ratingStars)}
                  name="ratingStars"
                  value={review.ratingStars}
                  // onChange={(e) =>  onInputChange(e.target.value)}
                >
                  <span className="fa fa-star"></span>
                </button>
              );
            })}
          </div>
          <textarea
            Classname="textReview"
            type="review"
            name="reviewDesc"
            onChange={(e) => onInputChange(e)}
            value={review.reviewDesc}
            placeholder="Reivew Here..."
          ></textarea>

          <button
            className="submitButton"
            type="button"
            onClick={checkIfFilled}
          >
            Submit
          </button>
        </div>
      )}

      <div className="reviews">
        {reviews.slice(0, visible).map((reviewd) => (
                 

          <div className="eachReview">
                   <div className="reviewSorter">
          {reviewd.students.avatar?  <img  className="reviewphoto" src={"data:image/png;base64," + reviewd.students.avatar } height="90" width="90" alt="" /> : <img  className="reviewphoto" src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} height="90" width="90" alt="" /> }
   
          <div className="reviewBox">

            <div className="top-review">
              <h4 className="reviewerName">

                {reviewd.students.firstName}
                <span></span> {reviewd.students.lastName}
              </h4>
              {new Array(reviewd.ratingStars).fill().map(() => (
                <i className="fas fa-star icon-c" />
              ))}
            </div>
            <div className="reviewDiscription">

              <p>{reviewd.reviewDesc}</p>
              <p2>{reviewd.createdAt}</p2>
            </div>
            </div>
            </div>

            <div className="editanddeleteButton">

            {loggedInUser === reviewd.students.email && (
              <button
                className="editReview"
                onClick={() => {
                  handleEdit(reviewd.ratingID);
                  handleForm();
                }}
              >
                Edit
              </button>
            )}

            {loggedInUser === reviewd.students.email && (
              <button
                className="deleteReview"
                onClick={() => deleteAlert(reviewd.ratingID)}
                >
                Delete
              </button>
            )}
          </div>
          </div>

        ))}
      </div>
      <button className="viewMore" onClick={showMoreReviews}>
        View More
      </button>
      <button className="viewLess" onClick={showLessReviews}>
        View Less
      </button>
    </div>

    <div className="sponsor-header">
      <h2>Sponsored By</h2>

      <div className="row">
        <div className="sponsor-feature">
          <img
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Logo_of_the_United_Nations.svg/1200px-Logo_of_the_United_Nations.svg.png"
            style={{ width: "200px" }}
          />
        </div>

        <div className="sponsor-feature">
          <img
            alt=""
            src="https://www.dcs.bbk.ac.uk/site/assets/files/4102/ioc_logo_onwhite_aw.258x0-is-hidpi.png"
            style={{ width: "155px" }}
          />
        </div>

        <div className="sponsor-feature">
          <img
            alt=""
            src="https://cdn.freebiesupply.com/logos/large/2x/codecademy-logo-svg-vector.svg"
            style={{ width: "155px" }}
          />
        </div>

        <div className="sponsor-feature">
          <img
            alt=""
            src="https://cdn.freebiesupply.com/logos/large/2x/codecademy-logo-svg-vector.svg"
            style={{ width: "155px" }}
          />
        </div>
      </div>
    </div>
  </div>











  )
}

export default JavaScriptVideos