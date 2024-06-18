// AdminBoard.js

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
import TextField from '@mui/material/TextField';
import { Grid, TableHead, Select, MenuItem } from '@mui/material';
import "../Css/Reservation.css";
import "../Css/Table.css";
import { Link } from "react-router-dom";

function AdminBoard() {
  const [admins, setAdmins] = useState([]); 
  const [adminNo, setAdminNo] = useState('');
  const [password, setPassword] = useState('');
  const [adminName, setAdminName] = useState('');
  const [roleType, setRoleType] = useState('');

  const fetchAdmins = () => {
    axios.get("http://localhost:8080/api/v1/hotelmanagment/getAll")
      .then(response => {
          const fetchedAdmins = response.data.data;
          console.log("Fetched admins:", fetchedAdmins);
          setAdmins(fetchedAdmins);
      })
      .catch(error => {
          console.error("Error fetching admins:", error);
      });
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  const handleUpdateAvailability = (adminNo) => {
    const selectedAdmin= admins.find(admin=>admin.adminNo===adminNo);
    setAdminNo(selectedAdmin.adminNo);
    setAdminName(selectedAdmin.adminName);
    setPassword(selectedAdmin.password);
    setRoleType(selectedAdmin.roleType);
  };

  const updateAdmin= () => {
    if (adminNo&&adminName&&password&&roleType) {
        axios.put("http://localhost:8080/api/v1/hotelmanagment/update", {
            adminNo:adminNo,
            adminName:adminName,
            password:password,
            roleType:roleType  
        })
        .then(response => {
            console.log('Guest updated successfully', response.data);
            fetchAdmins()
            clearFields();
        })
        .catch(error => {
            console.log('Error occurred', error);
        });
    }
  };

  const clearFields = () => {
    setAdminNo('');
    setAdminName('');
    setPassword('');
    setRoleType('');
  };

  return (
    <div style={{
        backgroundImage: "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)",
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
                <TextField label="Admin No" fullWidth value={adminNo} onChange={(e) => setAdminNo(e.target.value)} variant="standard" />
            </Grid>
            <Grid item xs={2}>
                <TextField label="Admin Name" fullWidth value={adminName} onChange={(e) => setAdminName(e.target.value)} variant="standard" />
            </Grid>
            <Grid item xs={2}>
                <TextField label="Password" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} variant="standard" />
            </Grid>
            <Grid item xs={2}>
                <Select
                    label="Type"
                    fullWidth
                    value={roleType}
                    onChange={(e) => setRoleType(e.target.value)}
                    variant="standard"
                >
                    <MenuItem value="select">select..</MenuItem>
                    <MenuItem value="ADMIN">ADMIN</MenuItem>
                    <MenuItem value="STAFF">STAFF</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12} >
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={updateAdmin}

                >
                    Update
                </Button>

                <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={clearFields}
                    sx={{ mr: 1 }} 
                >
                    Clear
                </Button>
                <Link to={"/DashBoard"}>
          <Button >
            DashBoard
          </Button>
        </Link>
            </Grid> 

            <Grid item xs={12}>
                <Typography variant="h6" gutterBottom component="div" color={"Black"}>
                    All Admins Data
                </Typography>
                <Table className="table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Admin Name</TableCell>
                            <TableCell>Password</TableCell>
                            <TableCell>Role Type</TableCell>
                            <TableCell>Actions</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {admins.map((admin,index) => (
                            <TableRow key={index+1}>
                                <TableCell>{admin.adminNo}</TableCell>
                                <TableCell>{admin.adminName}</TableCell>
                                <TableCell>{admin.password}</TableCell>
                                <TableCell>{admin.roleType}</TableCell>

                                <TableCell>
                                     <Button 
                                        variant="contained" 
                                        color="primary" 
                                        className="button"
                                        onClick={() => handleUpdateAvailability(admin.adminNo)}
                                     >
                                         Edit
                                    </Button>       
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

export default AdminBoard;
