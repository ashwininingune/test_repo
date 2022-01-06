import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import avatar from "../images/avatar.png";

import Typed from 'react-typed';

const avatarImg = {margin: '1px auto', width: '90px', height: '90px'}
const typedContainer = {position: 'absolute', top: '50%', left: '50%', transform: "translate(-50%, -50%)", width: "100vw", textAlign: 'center', zIndex: '1'}

function Header() {
    return (
        <Box style={typedContainer}>
            <Grid container justify="center">
                <Avatar style={avatarImg} src={avatar} alt="girl_avatar"/>
            </Grid>
            <Typography variant='h4' style={{color: 'tomato'}}>
                <Typed strings={["Ashwini Mhatre"]} typeSpeed={40} />
            </Typography>
            <Typography variant='h5' style={{color: 'tan', marginBottom: '3rem'}}>
            <Typed
                strings={[
                    'Web Design',
                    'Web Development',
                    'Software Testing']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop />
            </Typography>
        </Box>
    )
}

export default Header;