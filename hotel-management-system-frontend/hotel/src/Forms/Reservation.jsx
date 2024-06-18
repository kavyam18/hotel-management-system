import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "../Css/Reservation.css";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';

function ReservationForm() {
  const [selectedRoom, setSelectedRoom] = useState("Choose...");
  const [email, setEmail] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [numberOfRooms, setNumberOfRooms] = useState(1);
  const [rooms, setRooms] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const today = new Date().toISOString().split('T')[0];

  const getRooms = () => {
    const res = rooms.split(',').map(Number);
    console.log(res);
    return res;
  }

  useEffect(() => {
    calculateTotalAmount(selectedRoom, numberOfRooms);
  }, [selectedRoom, checkInDate, checkOutDate, numberOfRooms]);

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
  };

//   const handleNumberOfRoomsChange = (e) => {
//     const value = parseInt(e.target.value);
//     setNumberOfRooms(value);
//   };

  const calculateTotalAmount = (room, numberOfRooms) => {
    let pricePerNight = 0;
    switch (room) {
      case "Single Room":
        pricePerNight = 80;
        break;
      case "Double Room":
        pricePerNight = 120;
        break;
      case "Suite":
        pricePerNight = 200;
        break;
      default:
        pricePerNight = 0;
    }

    const duration = Math.ceil(
      (new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24)
    );
    const total = pricePerNight * duration * numberOfRooms;
    setTotalAmount(total);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

     // Parse numberOfRooms as an integer
  const roomsCount = parseInt(numberOfRooms);
    

    

    if (!checkInDate) {
      errors.checkInDate = 'Check-In date is required';
    } else if (checkInDate < today) {
      errors.checkInDate = 'Check-In date cannot be in the past';
    }
    
    // if (new Date(checkInDate) >= new Date(checkOutDate)) {
    //   alert("Check-in date must be before check-out date!");
    //   return;
    // }

    if(!checkOutDate){
      errors.checkOutDate = 'check-out date is required';
    }else if(checkOutDate <= checkInDate){
      errors.checkOutDate = 'check-out date must be greater then checkin date'
    }

    if (getRooms().length !== roomsCount) {
      alert("Please reserve the correct number of rooms!");
      return;
    }

    


    const reservationData = {
      roomType: selectedRoom,
      email: email,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      totalAmount: totalAmount,
      rooms: getRooms(),
    };
    try {

      
      const response = await axios.post(
        "http://localhost:8080/api/v1/hotelmanagment/reservation",
        reservationData
      );

     

      if (response.status === 201) {
        alert('Reservation created successfully')
        // window.location.reload();//refresh the the form
        console.log("Reservation created successfully");
        navigate("/Dashboard")
        // Optionally, you can redirect the user or show a success message
      }else if(!selectedRoom||!email||!checkInDate||!checkOutDate||!totalAmount||!numberOfRooms||!rooms){
        alert("Please enter all the required field!")
      }
      else{
        alert('guest email is not found, Please Regiester!')
        navigate("/GuestRegister")
      }
    } catch (error) {
        
      console.error("Error:", error);
     
      // Handle error, show error message to the user, etc.
    }
  };

  return (
    <div style={{
      backgroundImage: `url('https://images.pexels.com/photos/277572/pexels-photo-277572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      backgroundSize: 'cover',
      width: '100vw',  
      height: '100vh',
      overflow: 'auto', 
    }}>
    <Container>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <Form onSubmit={handleSubmit}>
            <h1 className="text-center mb-4">ROOM RESERVATION</h1>

            <Form.Group className="mb-3">
              <Form.Label>RoomType</Form.Label>
              <Form.Select
                value={selectedRoom}
                onChange={(e) => handleRoomSelect(e.target.value)}
              >
                <option>Choose...</option>
                <option>Single Room</option>
                <option>Double Room</option>
                <option>Suite</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Number of Rooms</Form.Label>
              <Form.Control
                type="number"
                min="1"
                max="5"
                value={numberOfRooms}
                onChange={(e) => setNumberOfRooms(e.target.value)}
               required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Rooms</Form.Label>
              <Form.Control
                type="text"
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
               required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Check-in Date</Form.Label>
              <Form.Control
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                min={today}
                required
              />
               {errors.checkInDate && <p style={{ color: 'red' }}>{errors.checkInDate}</p>}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Check-out Date</Form.Label>
              <Form.Control
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                min={checkInDate || today}
                required
              />
              {errors.checkOutDate && <p style={{ color: 'red' }}>{errors.checkOutDate}</p>}
            </Form.Group>

            <div className="mb-3 text-center">
              <p>Total Amount: {totalAmount} $</p>
            </div>

            <div className="d-grid gap-2">
              <Button variant="primary" size="lg" type="submit">
                Reserved
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
    {/* <Link to={"/DashBoard"}>
          <Button color="inherit" sx={{ justifyContent: "right" }}>
            DashBoard
          </Button>
        </Link> */}
    </Container>
    </div>
  );
}

export default ReservationForm;
