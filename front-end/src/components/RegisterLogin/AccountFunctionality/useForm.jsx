import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useForm = (validateForm) => {
  const navigate = useNavigate();
  //fields in sign up form
  //values set to empty
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    country: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //this is used to check errors for the sign up form
  const [errors, setErrors] = useState({});

  //take user to login after registration
  const goToLogin = () => {
    navigate("/confirmAccount");
  };

  const handleChange = (e) => {
    //get the value from user input
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //check the values in the signup form
    const errors = validateForm(values);
    if (Object.keys(errors).length === 0) {
      const { firstName, lastName, dob, country, phone, email, password } =
        values;
      const user = {
        firstName,
        lastName,
        dob,
        country,
        phone,
        email,
        password,
      };
      try {
        const res = await axios.post("http://localhost:8080/user", user);
        if (res.status === 201) {
          console.log(user);
          setValues({
            firstName: "",
            lastName: "",
            dob: "",
            country: "",
            phone: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
          setErrors({});
          goToLogin();
        }
      } catch (error) {
        console.log(user);
        console.log(error);
      }
    } else {
      setErrors(errors);
    }
  };

  return {
    handleChange,
    values,
    handleSubmit,
    errors,
    showErrors: Object.keys(errors).length > 0,
  };
};

export default useForm;
