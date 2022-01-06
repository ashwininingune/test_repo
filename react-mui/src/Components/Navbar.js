import React, {useState} from "react";
import { Link } from 'react-router-dom';

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import ContactMailIcon from '@mui/icons-material/ContactMail';

import avatar from "../images/avatar.png";
import Footer from "./Footer";

import MobilRightMenuSlider from '@mui/material/Drawer'; 

const menuSliderContainer = {width: '250px', background: '#511', height: '100%'}
const avatarImg = {display: 'block', margin: '10px auto', width: '90px', height: '90px'}

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })

    const toggleSlider = ((slider, open) => () => {
        setState({...state, [slider]: open});
    });

    const slideList = slider => (
        <Box style={menuSliderContainer} component="div" onClick={toggleSlider("right", false)}>
            <Avatar style={avatarImg} src={avatar} alt="girl_avatar"/>
            <Divider />
            <List>
                <ListItem button component={Link} to="/">
                    <ListItemIcon style={{color: 'tan'}}><HomeIcon /></ListItemIcon>
                    <ListItemText style={{color: 'tan'}}>Home</ListItemText>
                </ListItem>
                <ListItem button component={Link} to="/resume"> 
                    <ListItemIcon style={{color: 'tan'}}><AssignmentIndIcon /></ListItemIcon>
                    <ListItemText style={{color: 'tan'}}>Resume</ListItemText>
                </ListItem>
                <ListItem button component={Link} to="/about">
                    <ListItemIcon style={{color: 'tan'}}><AppsIcon /></ListItemIcon>
                    <ListItemText style={{color: 'tan'}}>About</ListItemText>
                </ListItem>
                <ListItem button component={Link} to="/contact">
                    <ListItemIcon style={{color: 'tan'}}><ContactMailIcon /></ListItemIcon>
                    <ListItemText style={{color: 'tan'}}>Contact</ListItemText>
                </ListItem>
            </List>
        </Box>
    )
    return (
        <>
            <Box component="nav">
                <AppBar position="static" style={{background: "#222"}}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)}>
                            <ArrowBackIcon style={{color: "tomato"}} />
                        </IconButton>
                        <Typography variant="h5" style={{color: 'tan'}}>ReactJs</Typography>
                        <MobilRightMenuSlider anchor="right" open={state.right} onClose={toggleSlider("right", false)}>
                            {slideList("right")}
                            <Footer />
                        </MobilRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar;