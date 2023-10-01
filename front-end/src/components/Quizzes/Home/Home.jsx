import { Button, MenuItem, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Categories from "../Data/Categories";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Swal from "sweetalert2";
import axios from "axios";
import "./Home.css";
const Home = () => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);
  const [loggedInUser, setLoggedinUser] = useState("");
  const [studentId, setStudentId] = useState(null);
  const [scores, setScores] = useState([]);
  const Navigate = useNavigate();
  const [scoreButtonClicked, setScoreButtonClicked] = useState(false);

  const jwt = localStorage.getItem("jwt");

  const fetchStudentId = async (email) => {
    const Api = "http://localhost:8080/user/findByEmail";
    const params = { email: email };

    try {
      const response = await axios.get(Api, {
        headers: { Authorization: `Bearer ${jwt}` },
        params,
      });
      setStudentId(parseInt(response.data.studentId, 10));
    } catch (error) {
      console.error("Error fetching student ID:", error);
    }
  };

  useEffect(() => {
    if (loggedInUser) {
      fetchStudentId(loggedInUser);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedInUser, jwt]);
  

  const fetchScores = async (studentId) => {
    if (!studentId) {
      console.error("Student ID is not available.");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:8080/api/results/student/${studentId}`,
        { headers: { Authorization: `Bearer ${jwt}` } }
      );
      setScores(response.data);
    } catch (error) {
      console.error("Error fetching scores:", error);
    }
  };

  useEffect(() => {
    const saveLoggedinUser = localStorage.getItem("loggedInUser");
    if (saveLoggedinUser) {
      setLoggedinUser(saveLoggedinUser);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("category", category);
    localStorage.setItem("difficulty", difficulty);
  });

  const handleSubmit = () => {
    if (!loggedInUser) {
      fireAlert("Make sure you log in to start the Quiz!", "error", "true");
    } else {
      if (!category || !difficulty) {
        setError(true);
        return;
      } else {
        setError(false);
        Navigate("/testQuiz");
      }
    }
  };

  const fireAlert = (message, icon, navigate) => {
    Swal.fire({
      title: message,
      icon: icon,
    }).then((result) => {
      if (navigate) {
        if (result.isConfirmed) {
          Navigate("/account");
        }
      }
    });
  };

  return (
    <>
      <Header />
      <div className="content">
        <div className="settings">
          <span className="QuizSetting">Quiz Settings</span>
          <div className="settings__select">
            {error && <ErrorMessage>Please Fill all the fields</ErrorMessage>}

            <TextField
              select
              label="Select Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              variant="outlined"
              style={{ marginBottom: 30 }}
            >
              {Categories.map((cat) => (
            <MenuItem key={cat.category} value={cat.value}>
            {cat.category}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Select Difficulty"
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        variant="outlined"
        style={{ marginBottom: 30 }}
      >
        <MenuItem key="Easy" value="easy">
          Easy
        </MenuItem>
        <MenuItem key="Medium" value="medium">
          Medium
        </MenuItem>
        <MenuItem key="Hard" value="hard">
          Hard
        </MenuItem>
      </TextField>
      <Button
  variant="contained"
  color="secondary"
  size="large"
  onClick={() => {
    if (studentId) {
      fetchScores(studentId);
      setScoreButtonClicked(true); 
    } else {
      console.error("Student ID is not available.");
    }
  }}
  style={{ 
  marginRight: 15, 
  position: 'absolute', top: '260px',
  right: '15px', textTransform: 'none',
  backgroundColor: '#1976d2',  
  }}
  className="score-history-button"
  
>
View Your Score History
</Button>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleSubmit}
      >
        Start Quiz
      </Button>
    </div>
  </div>
  <div className="score-history">
  {scoreButtonClicked && <p>Your Scores: Newest to Oldest (out of 100)
</p>}
  {scores
    .slice()
    .reverse()
    .map((score, index) => (
      <p key={index}>
        {score.studentId}: {score.score}
      </p>
    ))}
</div>


  <img src="/quiz.png" className="banner" alt="quiz app" />
</div>
<Footer />
</>
);
};

export default Home;