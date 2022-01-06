import React from 'react';
import Navbar from './Navbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: '#233'
    },
    timeLine: {
        position: 'relative',
        padding: '1rem',
        margin: '0 auto',
        '&:before': {
            content: "''",
            position: 'absolute',
            height: '100%',
            border: '1px solid tan',
            right: '40px',
            top: '0',
        },
        '&:after': {
            content: "''",
            display: 'table',
            clear: 'both'
        },
        [theme.breakpoints.up('md')] : {
            padding: '2rem',
            '&:before': {
                left: "calc(50% - 1px)",
                right: 'auto'
            }
        }
    },
    timeLineYear:{
        textAlign: "center",
        maxWidth: '7rem',
        maxHeight: '3rem',
        margin: '0 1rem 0 auto',
        fontSize: '1.8rem',
        fontWeight: 'bold',
        background: 'tomato',
        color: 'white',
        lineHeight: '1',
        padding: '0.2rem 0 0.2rem 0',
        '&:before': {
            display: 'none'
        },
        [theme.breakpoints.up('md')]: {
            textAlign: 'center',
            margin: '0 auto',
            '&:nth-of-type(2n)':{
                float: 'none',
                margin: '0 auto'
            },
            '&:nth-of-type(2n):before': {
                display: 'none'
            }
        }

    },
    timeLineItem: {
        padding: '1rem',
        borderBottom: '2px solid tan',
        position: 'relative',
        margin: '1rem 3rem 1rem 1rem',
        clear: 'both',
        '&:after': {
            content: "''",
            position: 'absolute'
        },
        '&:before': {
            content: "''",
            position: 'absolute',
            right: '-0.625rem',
            top: 'calc(50% - 5px)',
            borderStyle: 'solid',
            borderColor: 'tomato tomato transparent transparent',
            borderWidth: '0.625rem',
            transform: 'rotate(45deg)'
        },
        [theme.breakpoints.up('md')]: {
            width: '44%',
            margin: '1rem',
            '&:nth-of-type(2n)': {
                float: 'right',
                margin: '1rem',
                borderColor: 'tan'
            },
            '&:nth-of-type(2n):before': {
                right: 'auto',
                left:'-0.0625rem',
                borderColor: 'transparent transparent tomato tomato'
            }
        }
    },
    heading: {
        color: 'tomato',
        padding: '3rem 0',
        textTransform: 'uppercase'
    },
    subHeading: {
        color: 'white',
        padding: '0',
        textTransform: 'uppercase'
    }
}));

function Resume() {
    const classes = useStyles()

    return (
        <>
            <Navbar />
            <Box component="header" className={classes.mainContainer}>
                <Typography variant='h4' align='center' className={classes.heading}>
                    working experience
                </Typography>
                <Box component="div" className={classes.timeLine}>
                    <Typography  className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2019
                    </Typography>
                    <Box component='div' className={classes.timeLineItem}>
                        <Typography variant='h5' className={classes.subHeading}>
                            html / css / bootstrap / ros
                        </Typography>
                        <Typography variant='body1'  style={{color: 'tomato'}}>
                            company name where worked
                        </Typography>
                        <Typography variant='subtitle1' style={{color: 'tan'}}>
                            I worked as a Triner for first 6 months.
                        </Typography>
                    </Box>

                    <Typography className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2020
                    </Typography>
                    <Box component='div' className={classes.timeLineItem}>
                        <Typography variant='h5' className={classes.subHeading}>
                            angular 7 / qt-qml / nodejs
                        </Typography>
                        <Typography variant='body1'  style={{color: 'tomato'}}>
                            company name where worked
                        </Typography>
                        <Typography variant='subtitle1' style={{color: 'tan'}}>
                            I worked as a Software Engineer for 1.5 year.
                        </Typography>
                    </Box>

                    <Typography className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2021
                    </Typography>
                    <Box component='div' className={classes.timeLineItem}>
                        <Typography variant='h5' className={classes.subHeading}>
                            angular 12 / docker / mysql 
                        </Typography>
                        <Typography variant='body1'  style={{color: 'tomato'}}>
                            company name where worked
                        </Typography>
                        <Typography variant='subtitle1' style={{color: 'tan'}}>
                            I am working as a Senior Software Engineer.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Resume;