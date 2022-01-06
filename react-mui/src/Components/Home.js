import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Particles from "react-tsparticles";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    particlesCanvas: {
        position: 'absolute',
        opacity: '0.3'
    }
})

function Home() {
    const classes = useStyles()

    return (
        <>
            <Navbar />
            <Header />
            <Particles
                canvasClassName={classes.particlesCanvas}
                options={{
                    fpsLimit: 60,
                    interactivity: {
                      events: {
                        onClick: {
                          enable: true,
                          mode: "push",
                        },
                        onHover: {
                          enable: true,
                          mode: "repulse",
                        },
                        resize: true,
                      },
                      modes: {
                        bubble: {
                          distance: 400,
                          duration: 2,
                          opacity: 0.8,
                          size: 40,
                        },
                        push: {
                          quantity: 4,
                        },
                        repulse: {
                          distance: 200,
                          duration: 0.4,
                        },
                      },
                    },
                    particles: {
                      color: {
                        value: "#ff0000",
                      },
                      links: {
                        color: "#ff0000",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                      },
                      collisions: {
                        enable: true,
                      },
                      move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: false,
                        speed: 4,
                        straight: false,
                      },
                      number: {
                        density: {
                          enable: true,
                          area: 800,
                        },
                        value: 80,
                      },
                      opacity: {
                        value: 0.5,
                      },
                      shape: {
                        type: "circle",
                      },
                      size: {
                        random: true,
                        value: 5,
                      },
                    },
                    detectRetina: true,
                  }}
            />
        </>
    )
}

export default Home;