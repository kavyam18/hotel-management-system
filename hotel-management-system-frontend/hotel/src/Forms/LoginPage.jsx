import React, { useState } from "react";
import "../Css/Login.css";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Login = () => {
  const [adminName, setAdminName] = useState("");
  const [password, setPassWord] = useState("");
  const [adminNameError, setAdminNameError] = useState("");
  const [passwordError, setPassWordError] = useState("");
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();



  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
  
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true); 
    } else {
      try {
        await fetchData(adminName, password);
      } catch (error) {
        console.error("Error during form submission:", error);
        alert("Login Failed");
      }
    }
  };

  const fetchData = async (adminName, password) => {
    try {

       if(!adminName||!password){
         alert("Enter the valid AdminName and Password");
        
       }

      const response = await axios.post("http://localhost:8080/api/v1/hotelmanagment/login", {
        adminName: adminName,
        password: password,
      });

      
      if(response.data.message){
        alert("Login Successful");
        window.sessionStorage.setItem("name",response.data.data.adminName)
        setError("");
      navigate("/Dashboard")
      
    }else{
        alert("Login not valid");
        setError(response.data.error);
    }
  
    } catch (error) {
      console.error("Login unsuccessful:", error);
      setError("Invalid email or password. Please try again.");
    }
  };

  const handleAdminChange = (e) => {
    const inputAdminName = e.target.value;
    setAdminName(inputAdminName);

    if (/^[a-zA-Z0-9]+$/.test(inputAdminName)) {
      setAdminNameError("");
    } else {
      setAdminNameError("Please enter a valid AdminName");
    }
  };

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassWord(inputPassword);

  const passwordPattern = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[@#$%^&+=!]).{8,16}$/;

    if (passwordPattern.test(inputPassword)) {
      setPassWordError("");
    } else {
      setPassWordError("Password must be 8 to 16 characters with at least one digit, one letter, and one special character");
    }
  };

  return (
    <div className="login-container">
      {/* <img src={Home1} alt="Background" className="login-image" /> */}
      <form className="login-form" noValidate validated={validated} onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter username"
            value={adminName}
            onChange={handleAdminChange}
            required
          />
          <Form.Control.Feedback type="invalid">{adminNameError}</Form.Control.Feedback>
        </div>
        <br />
        <div>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <Form.Control.Feedback type="invalid">{passwordError}</Form.Control.Feedback>
        </div>
        <br />
        <div className="register">
          Click <Link to="/register">here</Link> to Register
        </div>
        <div>
          <button type="submit" className="login-button">
            Login
          </button> 
        </div>
        <Link to="/">
          <Button color="inherit" sx={{ justifyContent: "right" }}>
           HomePage
          </Button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
