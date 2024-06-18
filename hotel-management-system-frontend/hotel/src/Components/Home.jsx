import '../Css/Carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Hotel8 from './Assests/images/Hotel8.jpg';
import Hotel7 from './Assests/images/Hotel7.jpg';
import Hotel9 from './Assests/images/Hotel9.jpg';
import Hotel10 from './Assests/images/Hotel10.jpg';

import Navbar1 from '../Home/Navbar';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Home/Footer';
import Newsletter from '../Home/Newsletter';
import Feedback from '../Home/Feedback';



const HomePage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    <Navbar1/>
  <div>
    <Container>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img src={Hotel7} alt="First slide" className="carousel-image" />
        <Carousel.Caption>
          <h3>WELCOME TO HOTEILER</h3>
          <p>HOSPITALITY IS SIMPLY AN OPPORTUNITY TO SHOW LOVE AND CARE.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Hotel8} alt="First slide" className="carousel-image" />
        <Carousel.Caption>
          <h3>A WARM WELCOME AWAITS YOU HERE!</h3>
          <p>THE GREAT ADVANTAGE OF A HOTEL IS THAT IT IS A REFUGE FROM A HOME LIFE.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Hotel9} alt="First slide" className="carousel-image" />
        <Carousel.Caption>
          <h3>STAY AND ENJOY YOUR DAY WITH FOOD</h3>
          <p>
          "One cannot think well, love well, sleep well, if one has not dined well." 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Hotel10} alt="First slide" className="carousel-image" />
        <Carousel.Caption>
          <h3>ENJOY YOUR STAY</h3>
          <p>
           WAKE ME UP WHEN HOTELS START OFFERING LATE CHECK OUT...
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
    </div>
  
    <Newsletter/>
      <Feedback />
   
      <Footer/>
    </>
  );
}

export default HomePage;
