import React from "react";
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import '../Css/Home.css';
import Rooms from "./Rooms";
import Teams from './Teams';
import Footer from "./Footer";
import Services from "../Components/Services";

export default function About() {
  return (
    <>
      <div id="about" className="about-section">
        <Container fluid className="py-5">
          <Container>
            <Row className="g-5 align-items-center">
              <Col lg={6}>
                <h6 className="section-title text-start text-primary text-uppercase" >
                  About Hotelier
                </h6>
                <h1 className="mb-4" style={{color:"black"}}>
                  HOME AWAY FROM{" "}
                  <span className="text-primary text-uppercase" >Hotelier</span>
                </h1>
                <p className="mb-4"style={{color:"black"}}>
                  A hotel or a guest-house is a large building with many rooms, where people can sleep when they are not at home. A motel is a hotel especially for motorists - people who drive cars - where the room door usually opens into the parking lot rather than to an interior corridor. Inn is sometimes used to mean a smaller hotel. Guest house can also mean an accessory dwelling unit. An extended stay hotel is one where suites are rented by the week.
                  These places will rent a room for any number of days. They offer rooms to sleep as their business. There are also hotels where conferences are held.
                </p>
                <Button className="btn-primary py-3 px-5 mt-2" href="">
                  Explore More
                </Button>
              </Col>
              <Col lg={6}>
                <Row className="g-3">
                  <Col lg={6} className="text-end square-image">
                    <Image
                      src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww"
                      fluid
                    />
                  </Col>
                  <Col lg={6} className="text-start square-image">
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ZcU4-aM0YV1B_ZAFp9dPuidTxJFe-eSx8Q&s"
                      fluid
                    />
                  </Col>
                  <Col lg={6} className="text-end square-image">
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwVJ3sABIYaRKpkQO_lOYQSC_Ht40pFHQ89g&s"
                      fluid
                    />
                  </Col>
                  
                  <Col lg={6} className="text-start square-image">
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiAiPweFDLS2b2fupZqbj50R1aCLumDR52Xw&s"
                      fluid
                    />
                  </Col>
              
                </Row>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
      <div>
        <Rooms/>
        <Teams/>
        <Services/>
        <Footer/>
      </div>
    </>
  );
}
