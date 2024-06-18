import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { Grid, TableHead, Select, MenuItem } from '@mui/material';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import "../Css/Table.css";
import { Link } from 'react-router-dom';


export default function RoomBoard() {
    const [rooms, setRooms] = useState([]); 
    const [roomNumber, setRoomNumber] = useState('');
    const [type, setType] = useState('');
    const [rate, setRate] = useState('');
    const [description, setDescription] = useState('');
    const [available, setAvailable] = useState('');

    const fetchRooms = () => {
       
        axios.get("http://localhost:8080/api/v1/hotelmanagment/getAllrooms")
            .then(response => {
                const fetchedRooms = response.data.data;
                setRooms(fetchedRooms); 
            })
            .catch(error => {
                console.error("Error fetching rooms:", error);
            });
    };

    useEffect(() => {
        fetchRooms();
    }, []); 

    const addRoom = () => {
        axios.post("http://localhost:8080/api/v1/hotelmanagment/rooms", {
            roomNumber,
            type,
            rate,
            description,
            isAvailable: available
        })
        .then(response => {
            console.log("Room added successfully:", response.data);
            fetchRooms(); 
            clearFields();
        })
        .catch(error => {
            console.error("Error adding room:", error);
        });
    };

    const handleUpdateAvailability = (roomNumber) => {
        const selectedRoom = rooms.find(room => room.roomNumber === roomNumber);
        setRoomNumber(selectedRoom.roomNumber);
        setType(selectedRoom.type);
        setRate(selectedRoom.rate);
        setDescription(selectedRoom.description);
        setAvailable(selectedRoom.available);
    };

    const updateRoom = () => {
        if (roomNumber && type && rate && description && available) {
            axios.put("http://localhost:8080/api/v1/hotelmanagment/updateroom", {
                roomNumber,
                type,
                rate,
                description,
                available
            })
            .then(response => {
                console.log('Room updated successfully', response.data);
                fetchRooms();
                clearFields();
            })
            .catch(error => {
                console.log('Error occurred', error);
            });
        }
    };

    const searchRoom = () => {
        axios.get(`http://localhost:8080/api/v1/hotelmanagment/getroom?roomNumber=${roomNumber}`)
            .then(response => {
                const roomData = response.data.data;
                if (roomData) {
                    setRooms([roomData]);
                } else {
                    setRooms([]);
                    alert("Room Numer is not found!")
                    console.log('Room not found');
                }
            })
            .catch(error => {
                console.error("Error fetching room:", error);
            });
    };
    const clearFields = () => {
        setRoomNumber('');
        setType('');
        setRate('');
        setDescription('');
        setAvailable('');
    };

    return (
        <div style={{
            backgroundImage: "linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%)",
            backgroundSize: 'cover',
            width: '100vw',  
            height: '100vh',
            overflow: 'auto', 
          }}>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Box component="main" sx={{ flexGrow: 1, p: 1, marginTop: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <TextField label="Room Number" fullWidth value={roomNumber} onChange={(e) => setRoomNumber(e.target.value)} variant="standard" />
                    </Grid>
                    <Grid item xs={2}>
                        <Select
                            label="Type"
                            fullWidth
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            variant="standard"
                        >
                            <MenuItem value="deluxe">Deluxe</MenuItem>
                            <MenuItem value="suite">Suite</MenuItem>
                            <MenuItem value="single">Single</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={2}>
                        <TextField label="Rate" fullWidth value={rate} onChange={(e) => setRate(e.target.value)}  variant="standard"/>
                    </Grid>
                    <Grid item xs={2}>
                        <TextField label="Description" fullWidth value={description} onChange={(e) => setDescription(e.target.value)} variant="standard" />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField label="Available" fullWidth value={available} onChange={(e) => setAvailable(e.target.value)} variant="standard"/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button 
                        variant="contained"
                        sx={{ mr: 1 }} 
                         onClick={searchRoom}>
                            Search
                        </Button>
          
                        <Button 
                            variant="contained" 
                            sx={{ mr: 1 }} 
                            onClick={addRoom}
                        >
                            Add
                        </Button>
                        <Button 
                            variant="contained" 
                            sx={{ mr: 1 }} 
                            onClick={updateRoom}
                        >
                            Update
                        </Button>
                        <Button 
                            variant="contained" 
                            sx={{ mr: 1 }}
                            onClick={clearFields}
                        >
                            Clear
                        </Button>
                        <Link to={"/DashBoard"}>
                        <Button  variant="contained">
                         DashBoard
                        </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom component="div">
                            All Rooms Data
                        </Typography>
                        <Table className='table'>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Room Number</TableCell>
                                    <TableCell>Type</TableCell>
                                    <TableCell>Rate</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell>Is Available</TableCell>
                                    <TableCell>Edit</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rooms.map((room, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{room.roomNumber}</TableCell>
                                        <TableCell>{room.type}</TableCell>
                                        <TableCell>{room.rate}</TableCell>
                                        <TableCell>{room.description}</TableCell>
                                        <TableCell>{room.available.toString()}</TableCell>
                                        <TableCell>
                                            <Button 
                                                variant="contained" 
                                                sx={{ mr: 1 }} 
                                                onClick={() => handleUpdateAvailability(room.roomNumber)}
                                            >
                                                Edit
                                            </Button> 
                                            {/* <Button variant="contained" color="error">Delete</Button>  */}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Grid>
                </Grid>
            </Box>
        </Box>
        </div>
    );
}
