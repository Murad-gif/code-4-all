import React from "react";
import { useState, useEffect } from "react";
import "../../Styles/Quizzes/testQuiz.css";
import axios from "axios";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";

function TestQuiz() {
  const [questionss, setQuestionss] = useState([]);
  const [studentId, setStudentId] = useState(null);
  const reDirect = useNavigate();
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    const categoryIN = localStorage.getItem("category");
    const dificultyIN = localStorage.getItem("difficulty");

    axios
      .get(`http://localhost:8080/difficulty/${dificultyIN}/${categoryIN}`, {
        headers: { Authorization: `Bearer ${jwt}` },
      })
      .then((response) => {
        setQuestionss(response.data);
      })
      .catch((error) => {
        console.error(error);
        alert("cant get quiz");
      });
  }, [jwt]);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    const Api = "http://localhost:8080/user/findByEmail";
    const params = { email: loggedInUser };
  
    if (loggedInUser) {
      axios
        .get(Api, { headers: { Authorization: `Bearer ${jwt}` }, params })
        .then((response) => {
          setStudentId(parseInt(response.data.studentId, 10)); // Convert the studentId to an integer
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [jwt]);
  

  const saveScore = () => {
    const percentageScore = (score / questionss.length) * 100;
  
    const resultData = {
      studentId: studentId, // Replace userId with studentId
      score: percentageScore, // Save the score as a percentage
      totalQuestions: questionss.length,
    };
  
    console.log('Result data:', resultData); // Log the result data to check the format
  
    const config = { headers: { Authorization: `Bearer ${jwt}` } }; // Add the config object for authentication
  
    axios
      .post("http://localhost:8080/api/results", resultData, config)
      .then((response) => {
        console.log(response);
        fireAlert(score, questionss.length);
      })
      .catch((error) => {
        console.error("Unable to save the score:", error);
      });
  };
  
  
  

  const handleQuizCompletion = () => {
    fireAlert(score, questionss.length).then((passed) => {
      saveScore(studentId, score); // Move this outside of the if statement
      reDirect("/Quizzes");
    });
  };
  
  
  const fireAlert = (score, questionss) => {
    return new Promise((resolve) => {
      const passed = (score / questionss) * 100 > 50;
      const resultText = passed ? "you passed" : "you failed";
      const resultIcon = passed ? "success" : "error";
  
      Swal.fire({
        container: "swal2-container",
        title: " you scored " + score + " out of " + questionss,
        allowOutsideClick: false,
        icon: resultIcon,
      }).then(() => {
        resolve(passed);
      });
    });
  };
  

  console.log(questionss);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questionss.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quizTesdwdwt">
      <div className="quizContainer">
        {showScore ? (
          <div className="score-section">
            {handleQuizCompletion()}
      </div>
    ) : (
      <div className="question-section">
        <div className="question-count">
          <span>Question {currentQuestion + 1}</span>/{questionss.length}
        </div>

        {questionss
          .slice(currentQuestion, currentQuestion + 1)
          .map((question, index) => (
            <>
              <div className="question-text">{question.questionText}</div>
              <div className="answer-section">
              {question.answer.map((answerOption, index) => (
  <button
    key={index} // Add this line
    className="answerButtons"
    onClick={() =>
      handleAnswerOptionClick(answerOption.correct)
    }
  >
    {answerOption.answerText}
  </button>
))}

              </div>
            </>
          ))}
      </div>
    )}
  </div>
</div>
);
}

export default TestQuiz;
