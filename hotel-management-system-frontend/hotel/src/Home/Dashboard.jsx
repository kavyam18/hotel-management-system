import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemIcon from '@mui/material/ListItemIcon';
import Button from 'react-bootstrap/esm/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ListItem, ListItemText } from '@mui/material';

import { Link, useNavigate } from 'react-router-dom';


import ReservationIcon from '@mui/icons-material/EventNote';
import AdminBoardIcon from '@mui/icons-material/SupervisorAccount';
import GuestRegisterIcon from '@mui/icons-material/PersonAdd';
import RoomBoardIcon from '@mui/icons-material/Hotel';
import GuestBoardIcon from '@mui/icons-material/Group';
import ReservationBoardIcon from '@mui/icons-material/Assignment';
import MessageIcon from '@mui/icons-material/Message';
import SubscribersIcon from '@mui/icons-material/SupervisedUserCircleOutlined'; 


function DashBoard() {
  const drawerWidth = 165; 
  const name = window.sessionStorage.getItem("name");

  const navigate = useNavigate();

  const handleClick = () =>{
    window.sessionStorage.clear();
    navigate('/');
  }
  
  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }));

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      backgroundColor: theme.palette.primary.light,
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div style={{
      backgroundImage: `url('https://images.pexels.com/photos/2017802/pexels-photo-2017802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      backgroundSize: 'cover',
      width: '100vw',  
      height: '100vh',
      overflow: 'auto', 
    }}>
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{ backgroundColor: "grey" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
          <div style={{ flexGrow: 1 }} /> 
          <AccountCircleIcon sx={{ mr: 1 }} />
      <Typography variant="h6" textAlign="center" noWrap>
        Welcome {name}
      </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <ListItemIcon sx={{ color: theme.palette.text.primary }}>
            <AccountCircleIcon />
          </ListItemIcon>
          <Typography
            variant="subtitle1"
            sx={{ color: theme.palette.text.primary }}
          >
            Welcome admin
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Link to='/ReservationForm'>
          <ListItem button>
            <ListItemIcon><ReservationIcon /></ListItemIcon>
            <ListItemText primary="ReservationForm" />
          </ListItem>
        </Link>
        <Link to='/AdminBoard'>
          <ListItem button>
            <ListItemIcon><AdminBoardIcon /></ListItemIcon>
            <ListItemText primary="Adminboard" />
          </ListItem>
        </Link>
        <Link to='/GuestRegister'>
          <ListItem button>
            <ListItemIcon><GuestRegisterIcon /></ListItemIcon>
            <ListItemText primary="GuestRegister" />
          </ListItem>
        </Link>
        <Link to='/RoomBoard'>
          <ListItem button>
            <ListItemIcon><RoomBoardIcon /></ListItemIcon>
            <ListItemText primary="Roomboard" />
          </ListItem>
        </Link>
        <Link to='/GuestBoard'>
          <ListItem button>
            <ListItemIcon><GuestBoardIcon /></ListItemIcon>
            <ListItemText primary="GuestBoard" />
          </ListItem>
        </Link>
        <Link to='/ReservationBoard'>
          <ListItem button>
            <ListItemIcon><ReservationBoardIcon /></ListItemIcon>
            <ListItemText primary="ReservationBoard" />
          </ListItem>
        </Link>
        <Link to='/FeedbackData'>
          <ListItem button>
            <ListItemIcon><MessageIcon /></ListItemIcon>
            <ListItemText primary="FeedbackData" />
          </ListItem>
        </Link>
        <Link to='/SubscribersData'>
          <ListItem button>
            <ListItemIcon> <SubscribersIcon /></ListItemIcon>
            <ListItemText primary="SubscribersData" />
          </ListItem>
        </Link>
        <Divider />
        <Box sx={{ flexGrow: 1 }} />
        <Link to={'/Login'}>
          <Button color="inherit" sx={{ justifyContent: "center" }} onClick={handleClick}>
            Logout
          </Button>
        </Link>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
     
    </Box>
    </div>
  );
}
export default DashBoard;