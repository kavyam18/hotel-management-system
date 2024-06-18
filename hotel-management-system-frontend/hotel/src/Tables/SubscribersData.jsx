
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import axios from "axios";
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Grid, TableHead } from '@mui/material';
import "../Css/Reservation.css";
import "../Css/Table.css";
import { Link } from "react-router-dom";

function SubscribersData() {
    const [data, setData] = useState([]);


    const fetchData = () => {
       
        axios.get("http://localhost:8080/api/v1/hotelmanagment/getAllSubscribe")
            .then(response => {
                const fetchedData = response.data.data;
                setData(fetchedData); 
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []); 


  return (
    <div style={{
        backgroundImage:" linear-gradient(to top, #d299c2 0%, #fef9d7 100%)",
        backgroundSize: 'cover',
        width: '100vw',  
        height: '100vh',
        overflow: 'auto', 
      }}>
    <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Box component="main" sx={{ flexGrow: 1, p: 1, marginTop: 1 }}>

        <Grid container spacing={2}>
                <Link to={"/DashBoard"}>
          <Button color="inherit" sx={{ justifyContent: "right" }}>
            DashBoard
          </Button>
        </Link>
            </Grid> 

            <Grid item xs={12}>
                <Typography variant="h6" gutterBottom component="div" color={"Black"}>
                    All Subscribers Data
                </Typography>
                <Table className="table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>EmailId</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((subscribes,index) => (
                            <TableRow key={index+1}>
                                <TableCell>{subscribes.subscribeId}</TableCell>
                                <TableCell>{subscribes.emailId}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Grid>
        </Box>
    </Box>
    </div>
  );
}

export default SubscribersData;
