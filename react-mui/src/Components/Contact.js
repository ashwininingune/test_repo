import React from 'react';
import Navbar from './Navbar';

//ui components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

//css style
import { makeStyles, withStyles} from '@material-ui/core/styles';

//icons
import SendIcon from '@mui/icons-material/Send';

const useStyles = makeStyles( theme => ({
    form: {
        top: '50%',
        left: '50%',
        transform: "translate(-50%, -50%)",
        position: 'absolute',
    },
    button :{
        marginTop: '1rem',
        color: 'tomato',
        borderColor: 'tomato',
        '&:hover':{
            borderColor:'tomato',
        },
    },
}));

const InputField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'tomato',
        },
        '& label': {
            color: 'tan',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'tan',
            },
            '&:hover fieldset': {
                borderColor: 'tan',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'tan',
            }
        }
    }
})(TextField);

function Contact() {
    const classes = useStyles();

    return (
        <>
            <Navbar />
            <Box component='div' style={{background: '#233', height: '100vh'}}>
                <Grid container justify="center">
                    <Box component='form' className={classes.form}>
                        <Typography variant='h5' style={{color: 'tomato', textAlign: 'center', textTransform: 'uppercase'}}>
                            Hire or Contact me...
                        </Typography>
                        <InputField variant='outlined' fullWidth inputProps={{ style : { color: 'white'}}} label="Name" margin='dense' size='medium'/>
                        <InputField variant='outlined' fullWidth inputProps={{ style : { color: 'white'}}} label="Email" margin='dense' size='medium'/>
                        <InputField variant='outlined' fullWidth inputProps={{ style : { color: 'white'}}} label="Company Name" margin='dense' size='medium'/>
                        <br />
                        <Button className={classes.button} variant='outlined' fullWidth endIcon={<SendIcon />}>Contact Me</Button>
                    </Box>
                </Grid>
            </Box>
        </>
    )
}

export default Contact;