import React from 'react'
import './App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import CheckIcon from '@mui/icons-material/Check';

export default function MySkills(props) {
    return (
        <div id='Skills' style={{ backgroundColor: '#0e1123' }}>
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
                    My Skills

                </Typography>


                <Typography
                    variant="h2"
                    sx={{
                        fontSize: '150%',
                        mb: 3
                    }}

                    className='cookie-regular CustomColor1'
                >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio.

                </Typography>
            </div>


            <Grid container sx={{ width: '90%', margin: 'auto' }}>

                <Grid size={{ xs: 12, md: 6 }}>
                    <img src={require('./imgs/skills.png')} style={{ height: '100%', width: '100%' }} alt="" />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <Grid container spacing={4} sx={{padding:'0px 15px'}}>

                        {
                            props.content.map((item) => {
                                return <Grid size={{ xs: 12, md: 6 }}>
                                    <Box
                                        sx={{
                                            backgroundColor: '#1a1d2b', // Dark background color
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '20px',
                                            position: 'relative',
                                            borderRadius: '4px',
                                        }}
                                    >
                                        {/* Yellow Icon Box */}
                                        <Box
                                            sx={{
                                                backgroundColor: '#ffdb70',
                                                width: { xs: '20px', md: '40px' },
                                                height: { xs: '20px', md: '40px' },
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius: '8px',
                                                marginRight: '20px',
                                            }}
                                        >
                                            <CheckIcon sx={{ color: '#1a1d2b', fontSize: '20px' }} />
                                        </Box>

                                        {/* Title Text */}
                                        <Typography
                                            sx={{
                                                color: 'white',
                                                fontSize: { xs: '80%', md: '120%' }
                                            }}

                                            className='tilt-prism'
                                        >
                                            {item.item}
                                        </Typography>
                                    </Box>
                                </Grid>
                            })
                        }


                    </Grid>
                </Grid>
            </Grid>
                        <br /><br />
        </div >
    )
}
