import React, { useState } from 'react' // 1. Hook add kiya
import './App.css';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { Box, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import confetti from 'canvas-confetti'; // 2. Library import ki

export default function GetInTouch(props) {
    // 3. State management (sirf data store karne ke liye)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleWhatsAppSend = () => {
        // Celebration trigger (Website par dikhega redirect se pehle)
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });

        const myNumber = "916355540109"; // <-- Apna WhatsApp number yahan likho

        // Message with Emojis (taaki WhatsApp screen par celebration feel aaye)
        const text = `*New Portfolio Message* 🥳%0A%0A` +
            `*Name:* ${formData.name}%0A` +
            `*Email:* ${formData.email}%0A` +
            `*Subject:* ${formData.subject}%0A` +
            `*Message:* ${formData.message}%0A%0A` +
            `🎉✨🎊`;

        const url = `https://wa.me/${myNumber}?text=${text}`;

        // 1 second ka gap taaki user animation dekh sake
        setTimeout(() => {
            window.open(url, '_blank');
        }, 1000);
    };

    const DarkTextField = styled(TextField)({
        '& .MuiOutlinedInput-root': {
            backgroundColor: '#1e2130',
            color: '#a0a0a0',
            borderRadius: '0px',
            '& fieldset': { border: 'none' },
            '&:hover fieldset': { border: 'none' },
            '&.Mui-focused fieldset': { border: '1px solid #ffdb70' },
        },
        '& .MuiInputBase-input::placeholder': {
            color: '#808080',
            opacity: 1,
            fontFamily: 'serif',
        },
    });

    return (
        <div id='Contact' style={{ backgroundColor: '#0e1123' }} >
            <br /><br /><br /><br />
            <div className="" style={{ textAlign: 'center' }}>
                <Typography
                    variant="h2"
                    component={motion.h2}
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
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
                    Get In Touch
                </Typography>

                <Typography
                    variant="h2"
                    sx={{ fontSize: '150%', mb: 3 }}
                    className='cookie-regular CustomColor1'
                >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio.
                </Typography>
            </div>

            <Grid container sx={{ width: '90%', margin: 'auto' }}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <img src={require('./imgs/contact.png')} style={{ height: '100%', width: '100%' }} alt="" />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ backgroundColor: '#131521', padding: '40px', maxWidth: '800px' }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <DarkTextField
                                    fullWidth placeholder="Name" variant="outlined"
                                    name="name" onChange={handleChange} // Added
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <DarkTextField
                                    fullWidth placeholder="Email" variant="outlined"
                                    name="email" onChange={handleChange} // Added
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <DarkTextField
                                    fullWidth placeholder="Subject" variant="outlined"
                                    name="subject" onChange={handleChange} // Added
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <DarkTextField
                                    fullWidth placeholder="Your Message" variant="outlined"
                                    multiline rows={6}
                                    name="message" onChange={handleChange} // Added
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    onClick={handleWhatsAppSend} // Logic Trigger
                                    sx={{
                                        backgroundColor: '#ffdb70',
                                        color: '#131521',
                                        padding: '15px',
                                        fontWeight: 'bold',
                                        textTransform: 'none',
                                        borderRadius: '0px',
                                        fontFamily: 'serif',
                                        fontSize: '16px',
                                        '&:hover': { backgroundColor: '#e6c565' },
                                    }}
                                >
                                    Click here to send
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
            <br /><br />
        </div >
    )
}