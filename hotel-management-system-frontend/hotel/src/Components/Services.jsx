import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Food1 from './Assests/images/Food1.jpg';
import Food2 from './Assests/images/Food2.jpg';
import Food3 from './Assests/images/Food3.jpg';
import spa1 from './Assests/images/spa1.jpg';
import spa2 from './Assests/images/spa2.jpg';
import spa3 from './Assests/images/spa3.jpg';
import Event1 from './Assests/images/Event1.jpg';
import Event2 from './Assests/images/Event2.jpg';
import Event3 from './Assests/images/Event3.jpg';
import Sports1 from './Assests/images/Sports1.jpg';
import Sports2 from './Assests/images/Sports2.jpg';
import yoga1 from './Assests/images/yoga1.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import '../Css/Service.css';

const Services = () => {
  return (
    <>
     <div className="services-heading">
        <h2>OUR SERVICES</h2>
      </div>
      <Container>
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img src={Food1} alt="First slide" className="carousel-image1" />
                <Carousel.Caption>
                  <h3>Food & Restaurant</h3>
                  <p>HOSPITALITY IS SIMPLY AN OPPORTUNITY TO SHOW LOVE AND CARE.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={Food2} alt="Second slide" className="carousel-image1" />
                <Carousel.Caption>
                  <h3>Food & Restaurant</h3>
                  <p>THE GREAT ADVANTAGE OF A HOTEL IS THAT IT IS A REFUGE FROM A HOME LIFE.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={Food3} alt="Third slide" className="carousel-image1" />
                <Carousel.Caption>
                  <h3>Food & Restaurant</h3>
                  <p>THE GREAT ADVANTAGE OF A HOTEL IS THAT IT IS A REFUGE FROM A HOME LIFE.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img src={spa1} alt="Fourth slide" className="carousel-image1" />
                <Carousel.Caption>
                  <h3>Spa & Fitness</h3>
                  <p>"One cannot think well, love well, sleep well, if one has not dined well."</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={spa2} alt="Fifth slide" className="carousel-image1" />
                <Carousel.Caption>
                  <h3>Spa & Fitness</h3>
                  <p>WAKE ME UP WHEN HOTELS START OFFERING LATE CHECK OUT...</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={spa3} alt="Sixth slide" className="carousel-image1" />
                <Carousel.Caption>
                  <h3>Spa & Fitness</h3>
                  <p>WAKE ME UP WHEN HOTELS START OFFERING LATE CHECK OUT...</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row>
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img src={Event1} alt="First slide" className="carousel-image1" />
                <Carousel.Caption>
                  <h3>Event & Party</h3>
                  <p>HOSPITALITY IS SIMPLY AN OPPORTUNITY TO SHOW LOVE AND CARE.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={Event2} alt="Second slide" className="carousel-image1" />
                <Carousel.Caption>
                  <h3>Event & Party</h3>
                  <p>THE GREAT ADVANTAGE OF A HOTEL IS THAT IT IS A REFUGE FROM A HOME LIFE.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={Event3} alt="Third slide" className="carousel-image1" />
                <Carousel.Caption>
                  <h3>Event & Party</h3>
                  <p>THE GREAT ADVANTAGE OF A HOTEL IS THAT IT IS A REFUGE FROM A HOME LIFE.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img src={Sports1} alt="Fourth slide" className="carousel-image1" />
                <Carousel.Caption>
                  <h3>Sports & Gaming</h3>
                  <p>"One cannot think well, love well, sleep well, if one has not dined well."</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={Sports2} alt="Fifth slide" className="carousel-image1" />
                <Carousel.Caption>
                  <h3>Sports & Gaming</h3>
                  <p>WAKE ME UP WHEN HOTELS START OFFERING LATE CHECK OUT...</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={yoga1} alt="Sixth slide" className="carousel-image1" />
                <Carousel.Caption>
                  <h3>GYM & Yoga</h3>
                  <p>WAKE ME UP WHEN HOTELS START OFFERING LATE CHECK OUT...</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        </Row>
      </Container>
    </>
  );
}

export default Services;
