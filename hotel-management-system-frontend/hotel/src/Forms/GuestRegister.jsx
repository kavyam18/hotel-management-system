import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "../Css/GuestRegister.css";
import { Link, useNavigate } from "react-router-dom";

function GuestRegister() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [cityError, setCityError] = useState("");
  const [stateError, setStateError] = useState("");
  const [zipCodeError, setZipCodeError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    let isValid = true;
    if (!firstName) {
      setFirstNameError("First name is required");
      isValid = false;
    } else {
      setFirstNameError("");
    }
    if (!lastName) {
      setLastNameError("Last name is required");
      isValid = false;
    } else {
      setLastNameError("");
    }
    if (!email) {
      setEmailError("Enter a valid Email");
      isValid = false;
    } else {
      setEmailError("");
    }
    if (!phoneNumber) {
      setPhoneNumberError("Enter 10 digit phone number");
    } else if (phoneNumber !== 10) {
      setPhoneNumberError("Enter 10 digit phone number");
    }
    if (!address) {
      setAddressError("Adrress field is required");
      isValid = false;
    } else {
      setAddressError("");
    }
    if (!city) {
      setCityError("City field is required");
      isValid = false;
    } else {
      setCityError("");
    }
    if (!state) {
      setStateError("State field is required");
      isValid = false;
    } else {
      setStateError("");
    }
    if (!zipCode) {
      setZipCodeError("Enter the 6 digit valid zipCode");
    } else {
      setZipCodeError("");
    }

    if (isValid) {
      const guestData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        address: address,
        city: city,
        state: state,
        zipCode: zipCode,
      };

      try {
        // if(!firstName||lastName||!email||!phoneNumber||!address||!city||!state||!zipCode){
        // //  alert("Please Enter all the fields with valid data in the form ");
        // }
        const response = await axios.post(
          "http://localhost:8080/api/v1/hotelmanagment/guest",
          guestData
        );
        if (response.status === 201) {
          alert("Registered successfully");

          navigate("/ReservationForm");
          console.log("Registered successfully");
        } else {
          alert("Registered unsuccessful");
          window.location.reload(); //refresh the the form
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://media.istockphoto.com/id/1403277131/photo/business-people-checking-in-at-hotel-reception-desk.jpg?s=1024x1024&w=is&k=20&c=ly4r2-FyzGnsLR1IHokr9A5X60FkZysuMWtyXw9sFBA=')`,
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <div className="row justify-content-center">
        <div className="col-md-6">
          <Form onSubmit={handleSubmit}>
            <h1 className="text-center mb-4" style={{ color: "white" }}>
              Guest Register
            </h1>

            <Form.Group className="mb-3">
              <Form.Label style={{ color: "white" }}>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Form.Text className="text-danger">{firstNameError}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ color: "white" }}>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <Form.Text className="text-danger">{lastNameError}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ color: "white" }}>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-danger">{emailError}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ color: "white" }}>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <Form.Text className="text-danger">{phoneNumberError}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ color: "white" }}>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <Form.Text className="text-danger">{addressError}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ color: "white" }}>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <Form.Text className="text-danger">{cityError}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ color: "white" }}>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              <Form.Text className="text-danger">{stateError}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ color: "white" }}>ZIP Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter ZIP code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
              <Form.Text className="text-danger">{zipCodeError}</Form.Text>
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" size="lg" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
      {/* <Link to={"/DashBoard"}>
        <Button color="inherit" sx={{ justifyContent: "right" }}>
          DashBoard
        </Button>
      </Link> */}
    </div>
  );
}

export default GuestRegister;
