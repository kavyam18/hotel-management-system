import React, { useState } from "react";
import { contactItem } from "../Components/Data";
import { Email } from "@mui/icons-material";
import axios from "axios";

export default function Feedback() {
const[name, setName] = useState("");
const[email, setEmail] = useState("");
const[subject, setSubject] = useState("");
const[message, setMessage] = useState("");
const[errorMessage, setErrorMessage] = useState("");

const contactUser = async () => {

  try{
    const response = await axios.post('http://localhost:8080/api/v1/hotelmanagment/message',{
      name: name,
      email:email,
      subject:subject,
      message:message
    });
    if (response.status ) {
      alert("Message Send Successfully");
      console.log("Message Send Successfully");
    } else {
      alert("Message Send unsuccessful");
      window.location.reload();//refresh the the form
    }
  }catch(error){
    console.error("Error:", error);
  }
};

const handleSubmit = () => {
  if(!name||!email||!subject||!message){
    setErrorMessage("All Feilds are Requied");
  }else{
    setErrorMessage("");
    contactUser();
  }

}

  return (
    <>
      <div class="contact ">
        <div>
            <h2>----Contact----</h2>
        </div>
        <div class="row g-4">
          <div class="col-7">
            <div class="row gy-4">
              {contactItem.map((item, index) => (
                <div class="col-md-4" key={index}>
                  <h6 class="section-title text-start text-primary text-uppercase">
                    {item.title}
                  </h6>
                  <p>
                    <Email className="text-primary me-2" />
                    {item.email}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div class="col-md-6 wow fadeIn" data-wow-delay="0.1s">
            <iframe
              class="position-relative rounded w-100 h-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.0633611125404!2d76.64153337565811!3d12.311519979005032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf70779a743b07%3A0x9d3fb27b2e359839!2sRoyal%20Orchid%20Metropole!5e0!3m2!1sen!2sin!4v1717401922759!5m2!1sen!2sin" 
              frameborder="0"
              style={{ minHeight: "350px", border: "0" }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
          <div class="col-md-6">
          <h1 className="text-black text-uppercase mb-3">FeedBack</h1>
            <div class="wow fadeInUp" data-wow-delay="0.2s">
              <form>
                <div class="row g-3">
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Your Name"
                        onChange={(e) => setName(e.target.value)}
                      />
                      <label for="name">Your Name</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Your Email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label for="email">Your Email</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="subject"
                        placeholder="Subject"
                        onChange={(e) => setSubject(e.target.value)}
                      />
                      <label for="subject">Subject</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating">
                      <textarea
                        class="form-control"
                        placeholder="Leave a message here"
                        onChange={(e) => setMessage(e.target.value)}
                        id="message"
                        style={{ height: "150px" }}
                      ></textarea>
                      <label for="message">Message</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <button class="btn btn-primary w-100 py-3" type="submit" onClick={handleSubmit}>
                      Send Message
                    </button>
                  </div>
                  {errorMessage && <p className="error-message">{errorMessage}</p>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
