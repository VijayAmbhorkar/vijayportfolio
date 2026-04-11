import React from 'react';
import { Box, Grid, Typography, Container, Link, Stack } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube'; // Tumblr ki jagah YouTube ya koi bhi use kar sakte ho

const ContactSection = () => {
    return (
        <Box sx={{ bgcolor: '#0a0b1a', minHeight: '40vh', py: 8, color: 'white' }}>
            <Container maxWidth="lg">
                {/* Main Card Section */}
                <Box
                    sx={{
                        bgcolor: '#16182d',
                        borderRadius: '12px',
                        p: { xs: 4, md: 8 },
                        mb: 6
                    }}
                >
                    <Grid container spacing={4} sx={{ display: 'flex', justifyContent: { xs: 'start', md: 'space-around' } }}>
                        {/* Address */}
                        <Grid item xs={12} md={4} textAlign="center">
                            <LocationOnOutlinedIcon sx={{ fontSize: 40, mb: 2 }} />
                            <Typography variant="h5" className='tilt-prism' gutterBottom>
                                Address
                            </Typography>
                            <Typography variant="body1" sx={{ opacity: 0.8, fontSize: '120%' }} className='cookie-regular' >
                                3481 Melrose Place
                            </Typography>
                        </Grid>

                        {/* Phone */}
                        <Grid item xs={12} md={4} textAlign="center">
                            <PhoneAndroidOutlinedIcon sx={{ fontSize: 40, mb: 2 }} />
                            <Typography variant="h5" className='tilt-prism' gutterBottom>
                                Phone
                            </Typography>
                            <Typography variant="body1" sx={{ opacity: 0.8, fontSize: '120%' }} className='cookie-regular' >
                                +91 6355540109
                            </Typography>
                        </Grid>

                        {/* Email */}
                        <Grid item xs={12} md={4} textAlign="center">
                            <EmailOutlinedIcon sx={{ fontSize: 40, mb: 2 }} />
                            <Typography variant="h5" className='tilt-prism' gutterBottom>
                                Email
                            </Typography>
                            <Typography variant="body1" sx={{ opacity: 0.8, fontSize: '120%' }} className='cookie-regular' >
                                vijayambhorkar@gmail.com
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>

                {/* Social Media Icons Section */}
                <Stack
                    direction="row"
                    spacing={3}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignContent: 'center'
                    }}
                >
                    <Link href="#" color="inherit">
                        <FacebookIcon sx={{ fontSize: 28, '&:hover': { color: '#1877F2' } }} />
                    </Link>
                    <Link href="#" color="inherit">
                        <TwitterIcon sx={{ fontSize: 28, '&:hover': { color: '#1DA1F2' } }} />
                    </Link>
                    <Link href="#" color="inherit">
                        <InstagramIcon sx={{ fontSize: 28, '&:hover': { color: '#E4405F' } }} />
                    </Link>
                    <Link href="#" color="inherit">
                        <PinterestIcon sx={{ fontSize: 28, '&:hover': { color: '#BD081C' } }} />
                    </Link>
                    <Link href="#" color="inherit">
                        <YouTubeIcon sx={{ fontSize: 28, '&:hover': { color: '#FF0000' } }} />
                    </Link>
                </Stack>
            </Container>
        </Box>
    );
};

export default ContactSection;