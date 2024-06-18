import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AccountCircle, Phone } from '@mui/icons-material';
import '../Css/Navbar.css'; // Import custom CSS for Navbar styling

function Navbar1() {
  const handleReservationHelpLineClick = () => {
    alert("Reservation Help Line:\nEmail: chandan@hotelier.com\nPhone: +9787457889");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" className="custom-navbar">
        <Container>
          <Navbar.Brand href="#home" className="brand-text">Hotelier</Navbar.Brand>
          <Nav className="ms-auto">
          <Link to='About'>
              <Nav.Link href="#about">
               About
              </Nav.Link>
              </Link>
            <Link to='Login'>
              <Nav.Link href="#home">
                <AccountCircle /> Login 
              </Nav.Link>
            </Link>
            <Nav.Link href="#reservation" onClick={handleReservationHelpLineClick}>
              <Phone /> ReservationHelpLine 
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Navbar1;
