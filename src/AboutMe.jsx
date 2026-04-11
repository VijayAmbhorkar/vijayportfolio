import React from 'react'
import './App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';


export default function AboutMe() {
    return (
        <Box id="AboutMe" sx={{ backgroundColor: '#0e1123', padding: '5% 0px' }}>
            <Grid container style={{ width: '95%', margin: 'auto' }}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <img src={require('./imgs/img1.jpeg')} style={{ height: '90%', width: '80%' }} alt="" />
                </Grid>


                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography
                        variant="h2"

                        component={motion.h2}
                        animate={{
                            // Rapid gradient movement
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        // FAST: 2 seconds for text color flow
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        sx={{
                            fontWeight: 900,
                            mb: 3,
                            letterSpacing: 4,
                            display: 'inline-block',
                            backgroundImage: 'linear-gradient(90deg, #4facfe, #a855f7, #ec4899, #4facfe)',
                            backgroundSize: '200% auto',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontSize: { xs: '2rem', md: '3rem' },
                        }}

                        className='tangerine-bold'
                    >
                        About Me

                    </Typography>


                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '2rem', md: '3rem' },
                            color: 'white'
                        }}

                        className='cookie-regular'
                    >
                        Frontend Specialist | BCA Student & Learner.
                    </Typography>

                    <br /><br />
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: '150%',
                        }}

                        className='cookie-regular CustomColor1'
                    >
                        An enthusiastic Full-Stack Web Development trainee and BCA student with a strong foundation in frontend technologies. I specialize in building responsive, modern web interfaces using HTML5, CSS3, JavaScript (ES6), and Tailwind CSS. Currently, I am deep-diving into React.js and backend technologies to build scalable web applications. I love turning complex problems into simple, beautiful, and intuitive designs.

                    </Typography>
                    <br></br>
                    <br></br>
                    <Grid container>
                        <Grid size={{ xs: 6, lg: 4 }} style={{ color: 'white' }}>

                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: '150%',
                                    color: 'white',
                                    textAlign: 'center'
                                }}

                                className='tilt-prism'
                            >
                                EMAIL :
                            </Typography>
                            <p className='cookie-regular' style={{ fontSize: '120%', textAlign: 'center' }}>vijayambhorkar@gmail.com</p>

                        </Grid>

                        <Grid size={{ xs: 6, lg: 4 }} style={{ color: 'white' }}>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: '150%',
                                    color: 'white',
                                    // border: '1px solid red',
                                    textAlign: 'center'

                                }}

                                className='tilt-prism'
                            >
                                PHONE :
                            </Typography>
                            <p className='cookie-regular' style={{ fontSize: '120%', textAlign: 'center' }}>+91 6355540109</p>

                        </Grid>

                        <Grid size={{ xs: 6, lg: 4 }} style={{ color: 'white' }}>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: '150%',
                                    color: 'white',
                                    textAlign: 'center'
                                }}

                                className='tilt-prism'
                            >
                                NATIONALITY :
                            </Typography>
                            <p className='cookie-regular' style={{ fontSize: '120%', textAlign: 'center' }}>GUJARAT, INDIA</p>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Box>
    )
}
