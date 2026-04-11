import React from 'react'
import './App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import CodeIcon from '@mui/icons-material/Code';
import { motion } from 'framer-motion';

export default function WhatIOffer(props) {
    return (
        <Box id='Services' sx={{ backgroundColor: '#0e1123', padding: '5% 0px' }}>
            <div className="" style={{ textAlign: 'center' }}>
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
                    What I Offer

                </Typography>

                <Typography
                    variant="h2"
                    sx={{
                        fontSize: '150%',
                        width: '90%',
                        margin: 'auto'
                    }}

                    className='cookie-regular CustomColor1'
                >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel nostrum reprehenderit mollitia quibusdam, adipisci quisquam!
                </Typography>
            </div>

            <br></br>

            <Grid container style={{ width: '95%', margin: 'auto' }}>


                {
                    props.content.map((item) => {
                        return <Grid size={{ xs: 12, lg: 4 }} sx={{ padding: '1%', margin: '1% 0px' }}>
                            <Grid container>
                                <Grid size={3} sx={{
                                    // border: '1px solid red',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center' // Corrected spelling and placement
                                }}>
                                    <Box
                                        sx={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            // Bahar ka border aur padding
                                            border: '2px solid #1976d2',
                                            padding: { xs: '5px', md: '10px' },
                                            borderRadius: '50%', // Circle banane ke liye
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                // Andar ka background aur padding
                                                backgroundColor: '#1976d2',
                                                padding: { xs: '10px', md: '20px' },
                                                borderRadius: '50%',
                                                color: '#fff', // Icon ka color white
                                            }}
                                        >
                                            {
                                                item.id === "one" && <PersonalVideoIcon />
                                            }


                                            {
                                                item.id === "two" && <MenuBookIcon />
                                            }


                                            {
                                                item.id === "three" && <MedicalServicesIcon />
                                            }


                                            {
                                                item.id === "four" && <AcUnitIcon />
                                            }


                                            {
                                                item.id === "five" && <MovieFilterIcon />
                                            }

                                            {
                                                item.id === "six" && <CodeIcon />
                                            }


                                        </Box>
                                    </Box>
                                </Grid>

                                <Grid size={9}>
                                    <Typography
                                        variant="h2"
                                        sx={{
                                            fontSize: { xs: '100%', lg: '150%' },
                                            color: 'white'
                                        }}

                                        className='tilt-prism'
                                    >
                                        {item.varient}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontSize: { md: '120%', lg: '150%' },
                                            padding: { xs: '0px 0px 0px 15px' }
                                        }}

                                        className='cookie-regular CustomColor1'
                                    >
                                        {item.text}
                                    </Typography>
                                </Grid>

                            </Grid>
                        </Grid>

                    })

                }



            </Grid>
        </Box >
    )
}
