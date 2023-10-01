import React, { useState } from "react";
import donationsPicture from "../../images/donations image 3.jpeg";
import "../../Styles/DonationsStyles/DonationsPage.css";
import axios from "axios";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useEffect } from "react";

function DonationsPage() {
  const [loggedInUser, setLoggedinUser] = useOutletContext();
  const params = {
    email: loggedInUser,
  };

  const jwt = localStorage.getItem("jwt");
  const token = jwt;
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const [donator, setDonator] = useState({});
  const [donatorTitle, setDonatorTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [howHear, setHowHear] = useState("");
  const [motivate, setMotivate] = useState("");
  const [errors, setErrors] = useState({
    donatorTitle: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    howHear: "",
    motivate: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/user/findByEmail", { headers, params })
      .then((response) => {
        setDonator(response.data);
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setPhone(response.data.phone);
        setEmail(response.data.email);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [loggedInUser]);

  const navigate = useNavigate();
  const Next = () => {
    navigate("/donationsBilling");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};

    const validateForm = () => {
      if (!donatorTitle) {
        newErrors.donatorTitle = "Title is required";
      }
      if (!firstName) {
        newErrors.firstName = "First name is required";
      }
      if (!lastName) {
        newErrors.lastName = "Last name is required";
      }
      if (!email) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = "Email is invalid";
      }
      if (!phone) {
        newErrors.phone = "Phone number is required";
      } else if (phone.replace(/[ ()+-]/g, "").length < 10) {
        newErrors.phone = "Phone number is invalid";
      }
      if (!howHear) {
        newErrors.howHear = "This field is required";
      }
      if (!motivate) {
        newErrors.motivate = "This field is required";
      }
      setErrors(newErrors);
      return newErrors;
    };

    const errors = validateForm();
    if (Object.keys(errors).length !== 0) {
      setErrors(errors);
      return;
    }

    const donator = {
      donatorTitle,
      firstName,
      lastName,
      phone,
      email,
      howHear,
      motivate,
    };

    await axios
      .post("http://localhost:8080/donators", donator)

      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          console.log(response);
          setDonatorTitle("");
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setHowHear("");
          setMotivate("");
        }
        Next();
      })
      .catch(async (error) => {
        console.log(error);
        alert("Error submitting donation form");
      });
  };

  return (
    <div className="donations-container">
      <h1 className="donationstitle">Donations</h1>

      <h2 className="p">
        Every child should have the opportunity to study computer science.
      </h2>
      <img className="img" src={donationsPicture} alt="Trulli" />
      <h3 className="par">Why Donate?</h3>
      <div className="section">
        <p>
          Children accross the world are suffering from a lack of quality
          education.
          <br /> By donating to Coding4all you are contributing to the goal of
          solving
          <br />
          this issue and providing children with the opportunity to learn about
          computer science!
          <br />
        </p>
      </div>

      <div className="formcontainer">
        <form className="donationsform" noValidate onSubmit={handleSubmit}>
          <h2 className="formtitle">Your Information</h2>

          <label htmlFor="title">
            Title:
            <input
              type="text"
              id="title"
              name="title"
              value={donatorTitle}
              onChange={(e) => setDonatorTitle(e.target.value)}
            />
            {errors.donatorTitle && <p>{errors.donatorTitle}</p>}
          </label>

          <label htmlFor="fname">
            First name:
            <input
              type="text"
              id="fname"
              name="fname"
              // value={firstName}
              defaultValue={donator && donator.firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && <p>{errors.firstName}</p>}
          </label>

          <label htmlFor="lname">
            Last name:
            <input
              type="text"
              id="lname"
              name="lname"
              // value={lastName}
              defaultValue={donator && donator.lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {errors.lastName && <p>{errors.lastName}</p>}
          </label>

          <label htmlFor="Pnumber">
            Phone number:
            <input
              type="text"
              id="Pnumber"
              name="Pnumber"
              // value={phone}
              defaultValue={donator && donator.phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <p>{errors.phone}</p>}
          </label>

          <label htmlFor="Eaddress">
            Email Address:
            <input
              type="text"
              id="Eaddress"
              name="Eaddress"
              // value={email}
              defaultValue={donator && donator.email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p>{errors.email}</p>}
          </label>

          <label htmlFor="">
            How did you hear about us?
            <input
              type="text"
              id="HowHear"
              name="hear"
              value={howHear}
              onChange={(e) => setHowHear(e.target.value)}
            />
            {errors.howHear && <p>{errors.howHear}</p>}
          </label>

          <label htmlFor="">
            What motivated you to donate today?
            <input
              type="text"
              id="Motivate"
              name="Motivate"
              value={motivate}
              onChange={(e) => setMotivate(e.target.value)}
            />
            {errors.motivate && <p>{errors.motivate}</p>}
          </label>

          {/* <Link to ="/donationsBilling"> */}

          <input className="btn-next" type="submit" value="Next" />

          {/* </Link> */}
        </form>
      </div>
    </div>
  );
}

export default DonationsPage;
