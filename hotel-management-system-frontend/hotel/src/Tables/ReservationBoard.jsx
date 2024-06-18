import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "../Css/Reservation.css";
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import { Box } from "@mui/material";
import TableRow from '@mui/material/TableRow';
import { Link } from "react-router-dom";
import { Grid, TableHead} from '@mui/material';
import "../Css/Table.css";

function ReservationBoard() {
  const [reservations, setReservations] = useState([]);
  const [searchId, setSearchId] = useState('');
  const [disabledButtons, setDisabledButtons] = useState([]);

  const fetchReservations = () => {
    axios.get("http://localhost:8080/api/v1/hotelmanagment/getallreservations")
      .then(response => {
        const fetchedReservations = response.data.data;
        setReservations(fetchedReservations); 
        // Initialize disabledButtons state with an array of false values
        setDisabledButtons(Array(fetchedReservations.length).fill(false));
      })
      .catch(error => {
        console.error("Error fetching guests:", error);
      });
  };

  useEffect(() => {
    fetchReservations();
  }, []); 

  const searchReservation = () => {
    axios.get(`http://localhost:8080/api/v1/hotelmanagment/getreservation?reservationId=${searchId}`)
      .then(response => {
        const reservationData = response.data.data;
        setReservations(reservationData ? [reservationData] : []);
        setDisabledButtons([false]); // Reset disabledButtons state when new search is performed
      })
      .catch(error => {
        alert("Reservation Id is not found!")
        console.error("Error fetching reservation:", error);
      });
  };

  const handleCancelUpdate = (reservationId, index) => {
    console.log("Cancel button clicked for index:", index);
    axios.put(`http://localhost:8080/api/v1/hotelmanagment/cancelReservation`, {
      reservationId,
    })
    .then(response => {
      console.log("Reservation cancel successfully:", response.data);
      fetchReservations();
      // Update disabledButtons state to disable the button for the corresponding reservation
      setDisabledButtons(prevState => {
        const newDisabledButtons = [...prevState];
        newDisabledButtons[index] = true;
        return newDisabledButtons;
      });
    })
    .catch(error => {
      console.error("Error cancel reservations:", error);
    });
  };
  

  const handleClosedUpdate = async (reservationId, index) => {
    try {
      const response = await axios.put(
        "http://localhost:8080/api/v1/hotelmanagment/closeReservation",
        { reservationId }
      );
      console.log("Reservation closed successfully:", response.data);
      fetchReservations(); 
      setDisabledButtons(prevState => {
        const newDisabledButtons = [...prevState];
        newDisabledButtons[index] = true;
        return newDisabledButtons;
      });
    } catch (error) {
      console.error("Error closed reservation:", error);
    }
  };

  return (
    <div style={{
      backgroundImage: "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)",
      backgroundSize: 'cover',
      width: '100vw',  
      height: '100vh',
      overflow: 'auto', 
    }}>
      <div className="container">
        <div>
          <Typography variant="h6" gutterBottom component="div">
            Search Reservation by ID
          </Typography>
          <div>
            <input 
              type="text" 
              value={searchId} 
              onChange={(e) => setSearchId(e.target.value)} 
              placeholder="Enter Reservation ID"
            />
            <button onClick={searchReservation}>Search</button>
            <Link to={"/DashBoard"}>
              <Button color="inherit" sx={{ justifyContent: "right" }} style={{ marginLeft: "10px"}}>
                DashBoard
              </Button>
            </Link>
          </div>
        </div>
        <Grid item xs={12}>
          <Typography variant="h6"  gutterBottom component="div">
            All Reservations Data
          </Typography>
          <Table className="table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>guest mailId</TableCell>
                <TableCell>Total Amount</TableCell>
                <TableCell>check In date</TableCell>
                <TableCell>check out date</TableCell>
                <TableCell>cancel</TableCell>
                <TableCell>closed</TableCell>
                <TableCell>update</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reservations.map((res, index) => {
                console.log("Reservation:", res);
                return (
                  <TableRow key={index}>
                    <TableCell>{res.reservationId}</TableCell>
                    <TableCell>{res.email}</TableCell>
                    <TableCell>{res.totalAmount}</TableCell>
                    <TableCell>{res.checkInDate}</TableCell>
                    <TableCell>{res.checkOutDate}</TableCell>
                    <TableCell>{res.cancelled?.toString()}</TableCell>
                    <TableCell>{res.closed.toString()}</TableCell>
                    {/* <TableCell>
                    <Button variant="contained" style={{backgroundColor: "green"}} onClick={() => handleCancelUpdate(res.reservationId, index)} disabled={res.cancelled || disabledButtons[index]}>Cancel</Button>

                    
                      <Button variant="contained" style={{backgroundColor: "red"}} onClick={() => handleClosedUpdate(res.reservationId, index)} disabled={res.closed || disabledButtons[index]}>Close</Button>
                    </TableCell> */}
                    <TableCell>
  <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
    <Button
      variant="contained"
      style={{ backgroundColor: "green" }}
      onClick={() => handleCancelUpdate(res.reservationId, index)}
      disabled={res.cancelled || disabledButtons[index]}
    >
      Cancel
    </Button>
    <Button
      variant="contained"
      style={{ backgroundColor: "red"}}
      onClick={() => handleClosedUpdate(res.reservationId, index)}
      disabled={res.closed || disabledButtons[index]}
    >
      Close
    </Button>
  </Box>
</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Grid>
      </div>
    </div>
  );
}

export default ReservationBoard;
