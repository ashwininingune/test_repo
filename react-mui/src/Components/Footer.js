import React from 'react';
import { makeStyles} from '@material-ui/core/styles';

//ui components
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

//icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const useStyles = makeStyles({
    root: {
        '& .MuiBottomNavigationAction-root': {
            minWidth: '0',
            maxWidth: '250px',
        },
        '& .MuiSvgIcon-root': {
            fill: 'tan',
            '&:hover': {
                fill: 'tomato',
                fontSize: '2rem',
            }
        },
    },
});

function Footer() {
    const classes = useStyles();

    return (
        <BottomNavigation width='auto' style={{background: '#222'}}>
            <BottomNavigationAction className={classes.root} style={{padding: 0}} icon={<FacebookIcon />} />
            <BottomNavigationAction className={classes.root} style={{padding: 0}} icon={<TwitterIcon />} />
            <BottomNavigationAction className={classes.root} style={{padding: 0}} icon={<InstagramIcon />} />
        </BottomNavigation>
    )
}

export default Footer;