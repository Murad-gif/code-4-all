import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import DonationsBilling from "./components/Donations/DonationsBilling";
import DonationsConfirmation from "./components/Donations/DonationsConfirmation";
import DonationsPage from "./components/Donations/DonationsPage";
import LandingPage from "./components/LandingPage";
import Account from "./components/RegisterLogin/Account";
import ConfirmAccount from "./components/RegisterLogin/ConfirmAccount";
import NewPassword from "./components/RegisterLogin/NewPassword";
import ResetPassword from "./components/RegisterLogin/ResetPassword";
import Courses from "./components/CcoursesPage/Courses";
import ForumLanding from "./components/Forum/ForumLanding";
import SearchThread from "./components/Forum/SearchThread";
import ForumPage from "./components/Forum/ForumPage";
import CreateForum from "./components/Forum/CreateForum";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/FAQ/Contact";
import UPM from "./components/UPM/UPM";
import CoursesVideos from "./components/CcoursesPage/CoursesVideos";
import Avatar from "./components/Section Avatar/Avatar";
import Home from "./components/Quizzes/Home/Home";
import UpdatePassword from "./components/RegisterLogin/UpdatePassword";
import JavaScriptVideos from "./components/CcoursesPage/AllVideoPages/JavaScriptVideos";
import TestQuiz from "./components/Quizzes/TestQuiz";
import PythonVideos from "./components/CcoursesPage/AllVideoPages/PythonVideos";
function AppRoute() {

  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<LandingPage />} />
            {/* route for account */}
            <Route path="/account" element={<Account />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
            {/* <Route
              path="/resetPassword/:id/:token"
              element={<ResetPassword />}
            /> */}
            <Route path="/newPassword/:resetToken" element={<NewPassword />} />
            <Route path="/updatePassword" element={<UpdatePassword />} />
            <Route path="/confirmAccount" element={<ConfirmAccount />} />
            {/* route for donations */}
            <Route path="/donations" element={<DonationsPage />} />
            <Route path="/donationsBilling" element={<DonationsBilling />} />
            <Route
              path="/confirmDonation"
              element={<DonationsConfirmation />}
            />
            {/* route for courses */}
            <Route path="/courses" element={<Courses />} />
            <Route path="/coursesvideos" element={<CoursesVideos />} />
            <Route path="/javaScriptVideos" element={<JavaScriptVideos />} />
            <Route path="/pythonVideos" element={<PythonVideos />} />


            {/* route for student forum */}
            <Route path="/Forum_landing" element={<ForumLanding />} />
            <Route path="/Search_thread" element={<SearchThread />} />
            <Route path="/Forum_page" element={<ForumPage />} />
          
            <Route path="/Create_forum" element={<CreateForum />} />

            {/* ======route for quizzes====== */}
            <Route path="/testQuiz" element={<TestQuiz />} />

            <Route
              path="/Quizzes"
              element={
                <Home
                />
              }
            />
            {/* route for FAQ */}
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/Contact" element={<Contact />} />
            {/*Route fpr UPM*/}
            <Route path="/Ranking" element={<Avatar />} />
            {/*Route fpr UPM*/}
            <Route path="/UPM" element={<UPM />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoute;