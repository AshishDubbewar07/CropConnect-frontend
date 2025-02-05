import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{
      backgroundColor: '#4baf47',
      width: '100%',
      
      bottom: 0,
      color: '#fff',
      padding: '20px 0',
      textAlign: 'center',
      marginTop: 'auto'
    }}>
      <Typography variant="body1">
        &copy; {new Date().getFullYear()} Crop Connect. All rights reserved.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '10px' }}>
        <Link href="https://github.com" target="_blank" color="inherit">
          <GitHub />
        </Link>
        <Link href="https://linkedin.com" target="_blank" color="inherit">
          <LinkedIn />
        </Link>
        <Link href="https://twitter.com" target="_blank" color="inherit">
          <Twitter />
        </Link>
      </Box>
      <Typography variant="body2" sx={{ marginTop: '10px' }}>
        <Link href="/privacy-policy" color="inherit">Privacy Policy</Link> | 
        <Link href="/terms-of-service" color="inherit"> Terms of Service</Link>
      </Typography>
    </Box>
  );
};

export default Footer;