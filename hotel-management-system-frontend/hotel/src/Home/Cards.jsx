import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card as MaterialCard } from '@material-ui/core';
import { Room, Person, Assignment, Event } from '@material-ui/icons';

function Cards() {
  return (
    <Container className="d-flex justify-content-center card-container">
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <MaterialCard.Title>
                <Person /> AdminBoard
              </MaterialCard.Title>
              <Card.Subtitle className="mb-2 text-muted">Admin Information</Card.Subtitle>
              <Card.Text>
                Add and update Staff Information 
              </Card.Text>
              <Card.Link href="#">AdminBoard</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <MaterialCard.Title>
                <Assignment /> GuestBoard
              </MaterialCard.Title>
              <Card.Subtitle className="mb-2 text-muted">Guest Information</Card.Subtitle>
              <Card.Text>
                Update the Guest Information
              </Card.Text>
              <Card.Link href="#">GuestBoard</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <MaterialCard.Title>
                <Room /> RoomsBoard
              </MaterialCard.Title>
              <Card.Subtitle className="mb-2 text-muted">Room Information</Card.Subtitle>
              <Card.Text>
                Types of rooms
              </Card.Text>
              <Card.Link href="#">AdminBoard 3</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <MaterialCard.Title>
                <Event /> ReservationBoard
              </MaterialCard.Title>
              <Card.Subtitle className="mb-2 text-muted">Reservation Information</Card.Subtitle>
              <Card.Text>
               Close and Cancel the Reservations
              </Card.Text>
              <Card.Link href="#">ReservationBoard</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cards;
