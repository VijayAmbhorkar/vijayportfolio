import React from 'react'
import './App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

export default function Projects(props) {
    return (
        <div id='Projects' style={{ backgroundColor: '#0e1123' }}>
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
                    My Projects

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

            <section style={{ width: '90%', margin: 'auto' }}>
                <Grid container spacing={4}>
                    {
                        props.content.map((item) => {
                            return <Grid size={{ xs: 12, lg: 6 }} sx={{}}>
                                <div className="" style={{ backgroundColor: '#1C1F30', padding: '25px', borderRadius: '20px' }}>
                                    <Grid container>
                                        <Grid size={{ xs: 12, md: 6 }}>
                                            <img src={require(`${item.img}`)} style={{ height: '100%', width: '100%', borderRadius: '20px' }} alt="" />
                                        </Grid>



                                        <Grid size={{ xs: 12, md: 6 }}>
                                            <div className="" style={{ padding: '15px' }}>
                                                <Typography
                                                    sx={{
                                                        fontSize: '150%',
                                                        padding: '0px 0px 0px 25px',
                                                        textDecoration: 'underline'
                                                    }}

                                                    className='cookie-regular CustomColor1'
                                                >
                                                    {item.head}

                                                </Typography>


                                                {/* Pehle sirf text ke liye Typography use karein */}
                                                <Typography
                                                    sx={{
                                                        fontSize: '150%',
                                                        padding: '0px 0px 0px 25px',
                                                        color: 'white'
                                                    }}
                                                    className='tilt-prism'
                                                >
                                                    {item.text}
                                                </Typography>

                                                {/* Box ko Typography ke bahar rakhein */}
                                                <Box sx={{ margin: '50px 0px 0px 25px' }}>
                                                    <Box
                                                        component={motion.div}
                                                        animate={{
                                                            borderColor: ["#4facfe", "#00f2fe", "#a855f7", "#ec4899", "#4facfe"],
                                                        }}
                                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                                        sx={{
                                                            width: 50,
                                                            height: 50,
                                                            borderRadius: '50%',
                                                            border: '2px solid',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            position: 'relative',
                                                            backgroundColor: 'rgba(10, 25, 41, 0.7)',
                                                            boxShadow: '0 0 15px rgba(79, 172, 254, 0.3)',
                                                            overflow: 'hidden' // Button ka overlap rokne ke liye
                                                        }}
                                                    >
                                                        {/* Link ke liye anchor tag ka use karein jo button jaisa dikhe */}
                                                        <a
                                                            href={item.link} // Yahan apna URL dalein
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            style={{
                                                                textDecoration: 'none',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                width: '100%',
                                                                height: '100%',
                                                                borderRadius: '50%',
                                                                backgroundColor: 'transparent',
                                                                zIndex: 1, // Taki glow effect ke upar rahe
                                                                cursor: 'pointer',
                                                                border: 'none'
                                                            }}
                                                        >
                                                            <Typography sx={{ color: 'white', fontWeight: 'bold' }}>+</Typography>
                                                        </a>

                                                        {/* Aapka glow animation Box */}
                                                        <Box
                                                            component={motion.div}
                                                            animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.2, 1] }}
                                                            transition={{ duration: 5, repeat: Infinity }}
                                                            sx={{
                                                                position: 'absolute',
                                                                width: '100%',
                                                                height: '100%',
                                                                background: 'radial-gradient(circle, rgba(79,172,254,0.4) 0%, transparent 70%)',
                                                                zIndex: 0,
                                                            }}
                                                        />
                                                    </Box>
                                                </Box>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                        })
                    }



                </Grid>
            </section>



            {/* Hidden DIv */}



        </div>
    )
}
