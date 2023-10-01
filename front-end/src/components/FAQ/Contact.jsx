import React, { useState } from "react";
import "../../Styles/FAQStyles/Contact.css"
import tick_img from "../../images/login-register-icons/404-tick.png"
import axios from "axios";
import {useOutletContext } from "react-router-dom";
import { useEffect } from "react";
//import Swal from 'sweetalert2;'


function Contact() {

  const [loggedInUser, setLoggedinUser] = useOutletContext();
  const params = {
    email: loggedInUser,
  };

  const jwt = localStorage.getItem("jwt");
  const token = jwt;
  const headers = {
  Authorization: `Bearer ${token}`,
 };

  const [Contact, setContact] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [briefMessage, setBriefMessage] = useState("");
  const [errors, setErrors] = useState({
  firstName:"",
  lastName:"",
  email:"",
  phone:"",
  breifMessage:"",
  });

  useEffect(() => {
    axios
   .get("http://localhost:8080/user/findByEmail", {params, headers})
   .then((response) => {
      setContact(response.data);
      setFirstName(response.data.firstName);
      setLastName(response.data.lastName);
      setEmail(response.data.email);
      setPhone(response.data.phone);
      setBriefMessage(response.data.briefMessage);
   })
    .catch((error) => {
    console.log(error);
    });
    }, [loggedInUser]);
    
  
  const onSubmit =async (event) => {
    event.preventDefault();

    const newErrors = {};

    const validateForm = () => {
      if (!firstName) {
        newErrors.firstName = "First name is required";
      }
      if (!lastName) {
        newErrors.lastName = "Last name is required";
      }
      if (!email) {
        newErrors.email = "Email is required";
      } 
      if (!phone) {
        newErrors.phone = "Phone number is required";
      } else if (phone.length < 10) {
        newErrors.phone = "Phone number is invalid";
      }
      setErrors(newErrors);
      return newErrors;
    };

    const errors = validateForm();
    if (Object.keys(errors).length !== 0) {
      setErrors(errors);
      return;
    }


  const Contact = {
      firstName,
      lastName,
      email,
      phone,
      briefMessage
   }

    await axios
   .post("http://localhost:8080/contact_info", Contact)
   .then((response) => {
    console.log(response);
    if (response.status === 201){
      console.log(response);
      setContact("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setBriefMessage("");
      }alert("Successfully Submitted Contact Form")
    })
    .catch(async (error) => {
      console.log(error);
      alert("Error Submitting Contact Form");
    });

  }

  
  return (
    <div className="body">
         <div className="contact-container">
        <div className="form-wrapper">
            <div className="form-header">
            <h1> Contact Form </h1>
            </div>
                  <form className="contact-form" onSubmit={onSubmit}>
                  <input 
                  type="text" 
                  name="FirstName"
                  placeholder="Please Enter Your First Name:"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required/>
                  
                    <input 
                    type="text" 
                    id="LastName" 
                   placeholder="Please Enter Your Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                     required/>
                    <input 
                    type="email" 
                    id="Email" 
                   placeholder="Please Enter Your Email:"
                    value={email}
                  onChange={(e) => setEmail(e.target.value)}
                    required/>
                    <input 
                    type="phone" 
                    id="Phone" 
                    placeholder="Please enter your Phone Number:"
                    value={phone}
                  onChange={(e) => setPhone(e.target.value)} 
                    required/>
        
                    <textarea id="briefMessage"
                     rows="6" 
                    placeholder="Please Enter A Short Description Of The Problem:"
                     value={Contact.briefMessage}
                  onChange={(e) => setBriefMessage(e.target.value)} 
                     ></textarea>
                    <button type="submit" onClick="openPopup()">Submit</button>
                    <div className="pop-up" id="popup">
                        <img src={tick_img}/>
                        <h2>Thank You!</h2>
                        <p>Your details have been successfully submitted. A moderator will respond soon.</p>
                        <button type="button" id="popup" onClick="closePopup()">OK</button>
                    </div>
                </form>
                </div>
        </div>   
    </div>
  );
}

export default Contact