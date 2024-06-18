import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import '../Css/Newsletter.css';
import axios from "axios";

export default function Newsletter() {
  const [emailId,setEmailId] = useState("");
  const[error, setError] = useState("");

  const subscribe = async () => {
  try{
    const res = await axios.post('http://localhost:8080/api/v1/hotelmanagment/subscribe',{
      emailId
     
    });
  if (res.data.message) {
    setError(res.data.message);
    alert(res.data.message)
    window.location.reload(); // Refresh the page
  } else {
    setError('');
      setError('already subscribed. Please choose another.');
      alert('already subscribed')
  }
} catch (error) {
  console.error("Error to subscribe:", error);
  setError('Please try again later.');
}
};
  
const handleSubmit = () => {
  if(!emailId){
    setError("All Feilds are Requied");
  }else{
    setError("");
    subscribe();
  }

}



  return (
    <div>
    <Container className="newsletter mt-5 wow fadeIn" data-wow-delay="0.1s">
      <Row className="justify-content-center">
        <Col lg={10} className="border rounded p-1">
          <div className="border rounded text-center p-1">
            <div className="bg-white rounded text-center p-5">
              <h4 className="mb-4" style={{color:"black"}}>
                Subscribe Our{" "}
                <span className="text-primary text-uppercase">Newsletter</span>
              </h4>
              <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      onChange={(e) => setEmailId(e.target.value)}
                      className="form-control py-3 ps-4 pe-5"
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" onClick={handleSubmit}
                   className="py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    {error && <p className="error-message">{error}</p>}
    </div>
  );
}
