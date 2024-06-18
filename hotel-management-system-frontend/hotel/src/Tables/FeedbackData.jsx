import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Grid, TableHead,} from '@mui/material';

import axios from 'axios';
import "../Css/Table.css";



export default function FeedbackData() {
    const [data, setData] = useState([]);


    const fetchData = () => {
       
        axios.get("http://localhost:8080/api/v1/hotelmanagment/getAllData")
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
            backgroundImage: "linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)",
            backgroundSize: 'cover',
            width: '100vw',  
            height: '100vh',
            overflow: 'auto', 
          }}>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom component="div">
                            All Feedback Message Data
                        </Typography>
                        <Table className="table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>No</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Subject</TableCell>
                                    <TableCell>Message</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{item.feedbackId}</TableCell>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>{item.email}</TableCell>
                                        <TableCell>{item.subject}</TableCell>
                                        <TableCell>{item.message}</TableCell>
                                        <TableCell>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                      </Grid>
               
       
        </div>
    );
}
