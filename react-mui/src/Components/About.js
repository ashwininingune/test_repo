import React from 'react';
import Navbar from './Navbar';

//ui components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';

//icons
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

//css style
import { makeStyles, styled} from '@material-ui/core/styles';

//images
import HtmlCss from '../images/html-css.png';
import JavaScript from '../images/javascript.png';
import MySql from '../images/mysql.png';
import Angular from '../images/angular.png';
import Qt from '../images/qt.png';
import NodeJs from '../images/nodejs.jpeg';


interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


const useStyles = makeStyles({
    mainContainer: {
        background: "#233",
        height: '100%'
    },
    cardContainer: {
        maxWidth: '350px',
        margin: '3rem',
        margin: '5rem auto'
    },
    cardImg: {
        height: '25%',
        width: '40%',
        background: 'transparent'
    }
});

function About() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <>
            <Navbar />
            <Box component="div" className={classes.mainContainer}>
                <Grid container justify="center">
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia className={classes.cardImg} component="img" alt='angular' image={Angular}/>
                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='div'>
                                        Angular
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions disableSpacing>
                                <IconButton color="primary"><ShareIcon /></IconButton>
                                <IconButton color="primary"><ThumbUpAltIcon /></IconButton>
                                <ExpandMore color="primary" expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <Typography variant='body2' color='text.primary' component='p' style={{margin: '1rem 1rem'}}>
                                    Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. 
                                    Angular is a complete rewrite from the same team that built AngularJS.
                                </Typography>
                                <Typography variant='body2' color='text.primary' component='p' style={{margin: '1rem 1rem'}}>
                                    Angular is used as the frontend of the MEAN stack, consisting of MongoDB database, Express.js web application server framework, Angular itself (or AngularJS), and Node.js server runtime environment.
                                </Typography>
                            </Collapse>    
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia className={classes.cardImg} component="img" alt='qt' image={Qt}/>
                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='div'>
                                        Qt
                                    </Typography>
                                </CardContent>   
                            </CardActionArea>
                            <CardActions>
                                <IconButton color="primary"><ShareIcon /></IconButton>
                                <IconButton color="primary"><ThumbUpAltIcon /></IconButton>
                                <ExpandMore color="primary" expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <Typography variant='body2' color='text.primary' component='p' style={{margin: '1rem 1rem'}}>
                                    Qt is a widget toolkit for creating graphical user interfaces as well as cross-platform applications that run on various software and hardware platforms such as Linux, Windows, macOS, Android or embedded systems with little or no change in the underlying codebase while still being a native application with native capabilities and speed.
                                </Typography>
                                <Typography variant='body2' color='text.primary' component='p' style={{margin: '1rem 1rem'}}>
                                    Qt is currently being developed by The Qt Company, a publicly listed company, and the Qt Project under open-source governance, involving individual developers and organizations working to advance Qt. Qt is available under both commercial licenses and open-source GPL 2.0, GPL 3.0, and LGPL 3.0 licenses.
                                </Typography>
                            </Collapse> 
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia className={classes.cardImg} component="img" alt='html-css' image={HtmlCss}/>
                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='div'>
                                        HTML-CSS
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <IconButton color="primary"><ShareIcon /></IconButton>
                                <IconButton color="primary"><ThumbUpAltIcon /></IconButton>
                                <ExpandMore color="primary" expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions> 
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <Typography variant='body2' color='text.primary' component='p' style={{margin: '1rem 1rem'}}>
                                HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and last major HTML version that is a World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard. It is maintained by the Web Hypertext Application Technology Working Group (WHATWG), a consortium of the major browser vendors (Apple, Google, Mozilla, and Microsoft).
                                </Typography>
                                <Typography variant='body2' color='text.primary' component='p' style={{margin: '1rem 1rem'}}>
                                CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts. This separation can improve content accessibility; provide more flexibility and control in the specification of presentation characteristics; enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, which reduces complexity and repetition in the structural content; and enable the .css file to be cached to improve the page load speed between the pages that share the file and its formatting.
                                </Typography>
                            </Collapse>    
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia className={classes.cardImg} component="img" alt='nodejs' image={NodeJs}/>
                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='div'>
                                        Node Js
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <IconButton color="primary"><ShareIcon /></IconButton>
                                <IconButton color="primary"><ThumbUpAltIcon /></IconButton>
                                <ExpandMore color="primary" expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <Typography variant='body2' color='text.primary' component='p' style={{margin: '1rem 1rem'}}>
                                Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.
                                </Typography>
                                <Typography variant='body2' color='text.primary' component='p' style={{margin: '1rem 1rem'}}>
                                Node.js represents a "JavaScript everywhere" paradigm, unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.
                                </Typography>
                            </Collapse>     
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia className={classes.cardImg} component="img" alt='javascript' image={JavaScript}/>
                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='div'>
                                        JavaScript
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <IconButton color="primary"><ShareIcon /></IconButton>
                                <IconButton color="primary"><ThumbUpAltIcon /></IconButton>
                                <ExpandMore color="primary" expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <Typography variant='body2' color='text.primary' component='p' style={{margin: '1rem 1rem'}}>
                                JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries.
                                </Typography>
                                <Typography variant='body2' color='text.primary' component='p' style={{margin: '1rem 1rem'}}>
                                JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).
                                </Typography>
                            </Collapse>    
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia className={classes.cardImg} component="img" alt='mysql' image={MySql}/>
                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='div'>
                                        MySql
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <IconButton color="primary"><ShareIcon /></IconButton>
                                <IconButton color="primary"><ThumbUpAltIcon /></IconButton>
                                <ExpandMore color="primary" expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <Typography variant='body2' color='text.primary' component='p' style={{margin: '1rem 1rem'}}>
                                MySQL is an open-source relational database management system (RDBMS). A relational database organizes data into one or more data tables in which data types may be related to each other; these relations help structure the data. SQL is a language programmers use to create, modify and extract data from the relational database, as well as control user access to the database.
                                </Typography>
                                <Typography variant='body2' color='text.primary' component='p' style={{margin: '1rem 1rem'}}>
                                MySQL is free and open-source software under the terms of the GNU General Public License, and is also available under a variety of proprietary licenses. MySQL was owned and sponsored by the Swedish company MySQL AB, which was bought by Sun Microsystems (now Oracle Corporation). In 2010, when Oracle acquired Sun, Widenius forked the open-source MySQL project to create MariaDB.
                                </Typography>
                            </Collapse>    
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default About;