import React, { useState } from "react";
import "../../Styles/DonationsStyles/DonationsBilling.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DonationsBilling() {
  const [dAmount, setdAmount] = useState("");
  const [billingFirstName, setBillingFirstName] = useState("");
  const [billingLastName, setBillingLastName] = useState("");
  const [cardNo, setCardNo] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardType, setCardType] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [postCode, setPostCode] = useState("");
  const [errors, setErrors] = useState({
    dAmount: "",
    billingFirstName: "",
    billingLastName: "",
    cardNo: "",
    cvv: "",
    cardType: "",
    expiryDate: "",
    country: "",
    city: "",
    address: "",
    address2: "",
    postCode: "",
  });

  const showForm = () => {
    var form = document.querySelector(".billing-form");
    console.log(form);
    form.style.display = "block";
  };
  const navigate = useNavigate();
  const Submit = () => {
    navigate("/confirmDonation");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};

    const validateForm = () => {
      if (!dAmount) {
        newErrors.dAmount = "Donation Amount is required";
      } else if (!/^\d+$/.test(dAmount)) {
        newErrors.dAmount = "Donation Amount should only contain numbers";
      }
      if (!billingFirstName) {
        newErrors.billingFirstName = "First name is required";
      }
      if (!billingLastName) {
        newErrors.billingLastName = "Last name is required";
      }
      if (!cardNo) {
        newErrors.cardNo = "Card number is required";
      } else if (!/^\d{16}$/.test(cardNo)) {
        newErrors.cardNo = "Invalid card number";
      }
      if (!cvv) {
        newErrors.cvv = "CVV is required";
      } else if (!/^\d{3}$/.test(cvv)) {
        newErrors.cvv = "Invalid CVV";
      }
      if (!expiryDate) {
        newErrors.expiryDate = "Expiry date is required";
      }
      if (!cardType) {
        newErrors.cardType = "Card type is required";
      }
      if (!country) {
        newErrors.country = "Country is required";
      }
      if (!city) {
        newErrors.city = "City is required";
      }
      if (!address) {
        newErrors.address = "Address is required";
      } else if (!/^[a-zA-Z0-9\s,'-]+$/.test(address)) {
        newErrors.address = "Invalid address";
      }
      if (!address2) {
        newErrors.address2 = "Address 2 is required";
      } else if (!/^[a-zA-Z0-9\s,'-]+$/.test(address2)) {
        newErrors.address2 = "Invalid address";
      }
      if (!postCode) {
        newErrors.postCode = "Postal code is required";
      } else if (!/^[a-zA-Z0-9]+$/.test(postCode)) {
        newErrors.postCode = "Invalid postal code";
      }
      setErrors(newErrors);
      return newErrors;
    };

    const errors = validateForm();
    if (Object.keys(errors).length !== 0) {
      setErrors(errors);
      return;
    }

    const payments = {
      dAmount,
      billingFirstName,
      billingLastName,
      cardNo,
      cvv,
      cardType,
      expiryDate,
      country,
      city,
      address,
      address2,
      postCode,
    };

    await axios
      .post("http://localhost:8080/payments", payments)

      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          console.log(response);
          setdAmount("");
          setBillingFirstName("");
          setBillingLastName("");
          setCardNo("");
          setCvv("");
          setCardType("");
          setExpiryDate("");
          setCountry("");
          setCity("");
          setAddress("");
          setAddress2("");
          setPostCode("");
        }
        Submit();
      })
      .catch(async (error) => {
        console.log(error);
        alert("Error submitting billings form");
      });
  };
  return (
    <div className="billingcontainer">
      <h1 className="billingtitle">Billing Information</h1>

      <div className="buttons">
        <button onClick={showForm}>Card</button>
        <button>
          {" "}
          <a
            href="https://www.paypal.com/uk/signin"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white", textDecoration: "none" }}
          >
            Paypal
          </a>
        </button>
      </div>

      <form className="billing-form" noValidate onSubmit={handleSubmit}>
        <label htmlFor="Donation-Amount">
          Donation Amount (£):{" "}
          <input
            type="text"
            name="DAmount"
            value={dAmount}
            onChange={(e) => setdAmount(e.target.value)}
          />
          {errors.dAmount && <p>{errors.dAmount}</p>}
        </label>

        <label htmlFor="billing-fname">
          First Name:{" "}
          <input
            type="text"
            name="billingFirstName"
            value={billingFirstName}
            onChange={(e) => setBillingFirstName(e.target.value)}
          />
          {errors.billingFirstName && <p>{errors.billingFirstName}</p>}
        </label>

        <label htmlFor="billing-lname">
          Last Name:{" "}
          <input
            type="text"
            name="billingLastName"
            value={billingLastName}
            onChange={(e) => setBillingLastName(e.target.value)}
          />
          {errors.billingLastName && <p>{errors.billingLastName}</p>}
        </label>

        <label htmlFor="card-number">
          Card number:
          <input
            type="text"
            id="cardNo"
            name="cardNo"
            maxLength="16"
            value={cardNo}
            onChange={(e) => setCardNo(e.target.value)}
          />
          {errors.cardNo && <p>{errors.cardNo}</p>}
        </label>

        <label htmlFor="CVV">
          CVV:
          <input
            type="text"
            id="CVV"
            name="CVV"
            maxLength="3"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
          {errors.cvv && <p>{errors.cvv}</p>}
        </label>

        <label htmlFor="card-type">
          Card type:
          <input
            type="text"
            id="cardType"
            name="cardType"
            maxLength="16"
            value={cardType}
            onChange={(e) => setCardType(e.target.value)}
          />
          {errors.cardType && <p>{errors.cardType}</p>}
        </label>

        <label htmlFor="expiry-date">
          Expiry date:
          <input
            type="month"
            id="expiryDate"
            name="expiryDate"
            maxLength="16"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
          {errors.expiryDate && <p>{errors.expiryDate}</p>}
        </label>

        <label htmlFor="country">
          Country:{" "}
          <input
            type="text"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          {errors.country && <p>{errors.country}</p>}
        </label>

        <label htmlFor="billing-address">
          Address:{" "}
          <input
            type="text"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {errors.address && <p>{errors.address}</p>}
        </label>

        <label htmlFor="billing-address2">
          Address2:{" "}
          <input
            type="text"
            name="address2"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
          />
          {errors.address2 && <p>{errors.address2}</p>}
        </label>

        <label htmlFor="city">
          City:{" "}
          <input
            type="text"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          {errors.city && <p>{errors.city}</p>}
        </label>

        <label htmlFor="postal-code">
          Postal Code:{" "}
          <input
            type="text"
            name="postCode"
            value={postCode}
            onChange={(e) => setPostCode(e.target.value)}
          />
          {errors.postCode && <p>{errors.postCode}</p>}
        </label>

        {/* <Link to ="/confirmDonation"> */}
        <input className="btn-submit" type="submit" value="Submit" />
        {/* </Link>  */}
      </form>
    </div>
  );
}
export default DonationsBilling;
