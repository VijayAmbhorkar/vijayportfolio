import React, { useEffect, useState, useRef } from 'react';
import { Box, Grid, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { motion, useInView } from 'framer-motion';

const StatItem = ({ targetNumber, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(targetNumber);
      if (start === end || isNaN(end)) {
        setCount(end);
        return;
      }
      // Counting speed
      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(timer);
      }, 2000 / end);

      return () => clearInterval(timer);
    }
  }, [isInView, targetNumber]);

  return (
    <Box ref={ref} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <Box
        component={motion.div}
        animate={{
          borderColor: ["#4facfe", "#00f2fe", "#a855f7", "#ec4899", "#4facfe"],
        }}
        // ULTRA FAST: 0.8 seconds duration
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        sx={{
          width: 140,
          height: 140,
          borderRadius: '50%',
          border: '2px solid',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          backgroundColor: 'rgba(10, 25, 41, 0.7)',
          boxShadow: '0 0 15px rgba(79, 172, 254, 0.3)',
        }}
      >
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
        <Typography variant="h3" sx={{ fontWeight: 800, color: '#fff', zIndex: 1, fontFamily: 'monospace' }}>
          {count}{suffix}
        </Typography>
      </Box>
      <Typography variant="button" sx={{ color: '#94a3b8', letterSpacing: 1.5, fontWeight: 700 }}>
        {label}
      </Typography>
    </Box>
  );
};

const PortfolioStats = () => {
  const stats = [
    { number: 50, label: "HAPPY CLIENTS" },
    { number: 120, label: "PROJECTS DONE" },
    { number: 15, label: "AWARDS WON" },
    { number: 0, label: "YEARS EXP." },
  ];

  return (
    <Box sx={{ py: 12, backgroundColor: '#0e1123', color: '#fff' }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography
            variant="h3"
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
            }}

            className='tangerine-bold'
          >
            Milestones & Achievements
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: '150%',
            }}

            className='cookie-regular CustomColor1'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus?
          </Typography>
        </Box>

        <Grid container spacing={5} sx={{ display: 'flex', justifyContent: 'space-around' }}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <StatItem targetNumber={stat.number} />
              <Typography
                className='tilt-prism' style={{textAlign:'center'}}>
                {stat.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PortfolioStats;