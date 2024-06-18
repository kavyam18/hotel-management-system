import * as React from 'react';
import  { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Grid, TableHead } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import axios from 'axios';
import "../Css/Table.css";
import { Link } from "react-router-dom";

export default function GuestBoard(){
  const [guests, setGuests] = useState([]);
  const [firstName, setFirstName] = useState();
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const[address,setAddress]=useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

    const fetchGuests = () => {
      axios.get("http://localhost:8080/api/v1/hotelmanagment/getAllGuests")
        .then(response => {
            const fetchedGuests = response.data.data;
            setGuests(fetchedGuests); 
        })
        .catch(error => {
            console.error("Error fetching guests:", error);
        });
   };

    useEffect(() => {
    fetchGuests();
   }, []); 

  // const AddGuest= (firstName,lastName,email,phoneNumber,address,city,state,zipCode) =>{
  //   axios.post("http://localhost:8080/api/v1/hotelmanagment/guest",
  //   {firstName:firstName,
  //     lastName:lastName,
  //     email:email,
  //     phoneNumber:phoneNumber,
  //     address:address,
  //     city:city,
  //     state:state,
  //     zipCode:zipCode
  //   })
  //   .then(response => {
  //     console.log("Guest added successfully:", response.data);
  //     fetchGuests();
  //     clearFields();
  //   })
  //   .catch(error => {
  //     console.error("Error adding guest:", error);
  //   });
  // }
  
  const handleUpdateAvailability = (email) => {
    const selectedGuest = guests.find(guest =>guest.email===email);
    setFirstName(selectedGuest.firstName);
    setlastName(selectedGuest.lastName);
    setEmail(selectedGuest.email);
    setPhoneNumber(selectedGuest.phoneNumber)
    setAddress(selectedGuest.address)
    setCity(selectedGuest.city);
    setState(selectedGuest.state);
    setZipCode(selectedGuest.zipCode);
};

const updateGuest = () => {
  if (firstName&&lastName&&email&&phoneNumber&&address&&city&&state&&zipCode) {
      axios.put("http://localhost:8080/api/v1/hotelmanagment/updateguest", {
          firstName:firstName,
          lastName:lastName,
          email:email,
          phoneNumber:phoneNumber,
          address:address,
          city:city,
          state:state,
          zipCode:zipCode
      })
      .then(response => {
          console.log('Guest updated successfully', response.data);
          fetchGuests();
          clearFields();
      })
      .catch(error => {
          console.log('Error occurred', error);
      });
  }
};

const handleDeleteAvailability = (email) => {
  alert(email);
    axios.delete(`http://localhost:8080/api/v1/hotelmanagment/deleteguest`,{data:{email}})
      .then(response => {
        console.log("Guest deleted successfully:", response.data);
        fetchGuests(); 
      })
      .catch(error => {
        console.error("Error deleting guest:", error);
      });
  };
  

  const clearFields = () => {
    setFirstName('');
    setlastName('');
    setEmail('');
    setPhoneNumber('');
    setAddress('');
    setCity('');
    setState('');
    setZipCode('');
};

  return (
    <div style={{
      backgroundImage: "linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)",
         backgroundSize: 'cover',
         width: '100vw',  
         height: '100vh',
         overflow: 'auto', 
       }}>
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <Box component="main" sx={{ flexGrow: 1, p: 1, marginTop: 1 }}>
      <Grid item xs={12} md={8} >
    
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <TextField label="FirstName" fullWidth value={firstName} onChange={(e) => setFirstName(e.target.value)} variant="standard" />
        </Grid>
        <Grid item xs={2}>
          <TextField label="LastName"  fullWidth value={lastName} onChange={(e) => setlastName(e.target.value)} variant="standard" />
        </Grid>
        <Grid item xs={2}>
          <TextField label="Email" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} variant="standard" />
        </Grid>
        <Grid item xs={2}>
          <TextField label="Phone Number" fullWidth value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} variant="standard" />
        </Grid>
        <Grid item xs={2}>
          <TextField label="Address" fullWidth value={address} onChange={(e) => setAddress(e.target.value)} variant="standard" />
        </Grid>
        <Grid item xs={2}>
          <TextField label="City" fullWidth value={city} onChange={(e) => setCity(e.target.value)} variant="standard" />
        </Grid>
        <Grid item xs={2}>
          <TextField label="State" fullWidth value={state} onChange={(e) => setState(e.target.value)} variant="standard" />
        </Grid>
        <Grid item xs={2}>
          <TextField label="Zip code" fullWidth value={zipCode} onChange={(e) => setZipCode(e.target.value)} variant="standard" />
        </Grid>
        <Grid item xs={12}>
        {/* <Button 
       variant="contained" 
       sx={{ mr: 1 }} 
          onClick={() => AddGuest(firstName, lastName, email, phoneNumber, address, city, state, zipCode)}
          >
          Add
        </Button> */}

  
        <Button 
          variant="contained" 
          sx={{ mr: 1 }} 
           onClick={updateGuest}
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
                        <Button   variant="contained">
                         DashBoard
                        </Button>
                        </Link>
        </Grid>
      
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom component="div">
            All Guest Data
          </Typography>
          <Table className="table">
            <TableHead>
              <TableRow>
               <TableCell>sl no</TableCell>
                <TableCell>FirstName</TableCell>
                <TableCell>LastName</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>PhoneNumber</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>City</TableCell>
                <TableCell>State</TableCell>
                <TableCell>Zip code</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            
            <TableBody>
              {guests?.map((guest, index) => (
                <TableRow key={index}>
                  <TableCell>{index+1}</TableCell>
                  <TableCell>{guest.firstName}</TableCell>
                  <TableCell>{guest.lastName}</TableCell>
                  <TableCell>{guest.email}</TableCell>
                  <TableCell>{guest.phoneNumber}</TableCell>
                  <TableCell>{guest.address}</TableCell>
                  <TableCell>{guest.city}</TableCell>
                  <TableCell>{guest.state}</TableCell>
                  <TableCell>{guest.zipCode}</TableCell>
                  <TableCell>
                  <Button 
                   variant="contained" 
                    sx={{ mr: 1 }} 
                  onClick={() => handleUpdateAvailability(guest.email)}
                       >
                          Edit
                      </Button>
                     <Button variant="contained" 
                     color="error"
                     onClick={() => handleDeleteAvailability(guest.email)}
                     >Delete</Button>
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

