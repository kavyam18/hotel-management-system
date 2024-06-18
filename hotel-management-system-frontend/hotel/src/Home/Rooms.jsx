

import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { roomItems } from "../Components/Data";
import '../Css/Home.css';

export default function Rooms() {
  return (
    <div>
      <Container fluid className="py-5">
        <Row className="justify-content-center mb-5">
          <Col xs="auto">
            <h2>Our Room Types</h2>
          </Col>
        </Row>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {roomItems.map((item) => (
            <Col key={item.id}>
              <div className="room-item shadow rounded overflow-hidden">
                <div className="position-relative">
                  <Image src={item.image} alt={item.name} fluid />
                  <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                    {item.price}
                  </small>
                </div>
                <div className="p-4 mt-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">{item.name}</h5>
                    <div>{item.star}</div>
                  </div>
                  <div className="d-flex mb-3">
                    {item.facilities.map((facilityItem, index) => (
                      <small key={index} className="border-end me-3 pe-3">
                        {facilityItem.icon}
                        {facilityItem.quantity} {facilityItem.facility}
                      </small>
                    ))}
                  </div>
                  <p className="text-body mb-3">{item.description}</p>
                  <div className="d-flex justify-content-between">
                    <Button variant="primary" className="rounded py-2 px-4">
                      {item.yellowbtn}
                    </Button>
                    <Button variant="dark" className="rounded py-2 px-4">
                      {item.darkbtn}
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
