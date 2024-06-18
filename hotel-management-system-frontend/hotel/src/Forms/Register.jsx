import React, { useState } from "react";
import "../Css/Register.css";
import { Link } from "react-router-dom";
import axios from 'axios';

const Register = () => {
  const [adminName, setAdminName] = useState("");
  const [roleType, setRoleType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const registerUser = async () => {

   

    try {
      const res = await axios.post('http://localhost:8080/api/v1/hotelmanagment/register', {
        adminName: adminName,
        roleType: roleType,
        password: password
      });
      if (res.data.error) {
        setErrorMessage(res.data.message);
        setSuccessMessage("");
      } else {
        
        setAdminName("");
        setRoleType("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setSuccessMessage("User registered successfully!");
        setErrorMessage("");
      }
    } catch (error) {
      console.error("Error registering user:", error);
      setErrorMessage("Failed to register. Please try again later.");
      setSuccessMessage("");
    }
  };

  const handleRegister = () => {
    if (!adminName || !roleType || !email || !password || !confirmPassword) {
      setErrorMessage("All fields are required");
    } else if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
    } else if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long");
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,12}/.test(password)) {
      setErrorMessage("Password must contain at least one uppercase letter, one lowercase letter, and one number");
    } else {
      // Reset error message
      setErrorMessage("");
      // Call registerUser function to submit the form
      registerUser();
    }
  }; 


  return (
    <div className="register-container">
      <form className="register-form">
        <div>
          <input
            type="text"
            placeholder="Username"
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
            className="register-input"
          />
        </div>
        <div>
          <input
            type="RoleType"
            placeholder="RoleType"
            value={roleType}
            onChange={(e) => setRoleType(e.target.value)}
            className="register-input"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="register-input"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="register-input"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="register-input"
          />
        </div>
        <div className="register">
          Have an account? Click <Link to="/login">here</Link> to Login
        </div>
        <div>
          <button type="button" onClick={handleRegister} className="register-button">
            Register
          </button>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
    </div>
  );
};

export default Register;
