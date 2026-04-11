import React from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Typewriter from 'typewriter-effect';
import Navbar from './Navbar'
import { motion } from 'framer-motion';
import { keyframes } from '@mui/material';

function HeroSection() {

    // 1. Pehle animation define karte hain (Border ghumne ke liye)
    const rotateGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

    return (
        <section style={{ backgroundColor: '#0E1123', minHeight: '100vh' }}>
            <Navbar />
            <br /><br /><br /><br />
            <Box sx={{ display: { xs: 'none', lg: 'block' }, height: '8rem' }} />


            <Box sx={{ width: '90%', margin: 'auto' }}>
                <Grid container spacing={4} >

                    {/* Text Section */}
                    <Grid size={{ xs: 12, lg: 7 }}>
                        <Typography variant="h6" sx={{ color: '#aaa', mt: 2 }} style={{ fontSize: '200%' }} className='cookie-regular'>
                            I'm <span style={{ color: '#00D2ff' }} className='tangerine-bold'>Vijay Ambhorkar</span>
                        </Typography>
                        <br />



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
                                backgroundImage: 'linear-gradient(90deg, #4facfe, #a855f7, #ec4899, #4facfe)',
                                backgroundSize: '200% auto',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontSize: { xs: '2rem', md: '3rem' },
                                // Hollow Text Styling
                                color: 'white',
                                display: 'inline-block',
                            }}

                            className='tilt-prism'
                        ><Typewriter
                                options={{
                                    strings: ['Web Developer', 'Web Designer'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 30,       // Likhne ki speed (smooth)
                                    deleteSpeed: 10, // Erase karne ki speed
                                    pauseFor: 1500,  // Word likhne ke baad kitni der rukna hai
                                }}

                            />
                        </Typography>

                        <p style={{ fontSize: '150%' }} className='cookie-regular CustomColor1'>Dedicated BCA student and Full-Stack Web Development trainee with a solid foundation in HTML, CSS, and
                            JavaScript. Proficient in building responsive layouts using Tailwind CSS and Bootstrap. Currently expanding
                            technical expertise by learning React.js to build dynamic web applications. Committed to professional growth
                            and delivering clean, honest work.
                        </p>

                    </Grid>

                    <Grid size={{ xs: 12, lg: 4 }} sx={{ display: 'flex', justifyContent: { xs: 'center' }, alignItems: 'center' }}>
                        <Box
                            sx={{
                                position: 'relative',
                                width: { xs: '270px', md: '410px' }, // Container thoda bada kiya border adjust karne ke liye
                                height: { xs: '270px', md: '410px' },
                                display: 'flex',
                                justify: 'center',
                                alignItems: 'center',
                                overflow: 'hidden', // Jaruri hai takia animated background bahar na dikhe
                                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', // Wahi tedha-medha shape container pe bhi
                                transition: 'all 0.5s ease',
                                zIndex: 1,

                                // Hover karne par container ka shape bhi change hoga
                                '&:hover': {
                                    borderRadius: '50%',
                                },


                                // 2. Yeh hai Magic: Asli Colorful Border (Pseudo-element)
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    width: '150%', // Image se bada taki rotate ho sake
                                    height: '150%',
                                    // Mast Colorful Gradient Colors (Developer style)
                                    background: 'linear-gradient(90deg, #ff0057, #e64a19, #fcb045, #befb4c, #00e676, #40c4ff, #022cff, #ff0057)',
                                    backgroundSize: '200% 200%', // Animation smooth karne ke liye
                                    animation: `${rotateGradient} 4s linear infinite`, // 4 second mein ek round, continuously
                                    zIndex: -1, // Image ke peeche rahega
                                },// Chamak (Glow) effect ke liye ek aur layer
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    inset: '5px', // Border ki thickness (itni jagah chodkar blur karega)
                                    background: '#1a1a1a', // Apni website ka background color yaha dalein (taki beech ka hissa khali lage)
                                    borderRadius: 'inherit', // Parent jaisa shape
                                    zIndex: -1,
                                    // Soft Glow effect
                                    boxShadow: '0 0 20px 5px rgba(0, 230, 118, 0.3), 0 0 40px 10px rgba(64, 196, 255, 0.3)',
                                }
                            }}
                        >
                            {/* --- The Blob Image --- */}
                            <Avatar
                                src={require('./imgs/hero.jpeg')} // Aapka image path
                                alt="Developer Hero"
                                sx={{
                                    width: 'calc(100% - 10px)', // Border ke liye thodi jagah chhodi (2 * 5px edge)
                                    height: 'calc(100% - 10px)',
                                    borderRadius: 'inherit', // Parent (Box) ka tedha shape lega
                                    zIndex: 5,
                                    // Purana border hata diya, ab background se border ban raha hai
                                    border: 'none',
                                    objectFit: 'cover',
                                    transition: 'all 0.5s ease',
                                    '&:hover': {
                                        // Hover effect barkarar hai
                                        transform: 'scale(1.02)'
                                    }
                                }}
                            />
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </section>
    );
}

export default HeroSection;