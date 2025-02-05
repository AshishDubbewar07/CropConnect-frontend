
import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';
import counterbg from '../assets/images/counter-bg.jpg';

const steps = [
  {
    number: 1,
    title: 'Farmer Registration & Listing',
    description: 'Farmers sign up and list available crops with price, location, and quantity.',
    icon: '🧑‍🌾',
  },
  {
    number: 2,
    title: 'Buyer Browsing & Filtering',
    description: 'Buyers search for crops based on state, district, market, and crop type.',
    icon: '🔍',
  },
  {
    number: 3,
    title: 'Chat & Negotiation',
    description: 'Buyers and farmers discuss pricing, quality, and delivery before confirming orders.',
    icon: '💬',
  },
  {
    number: 4,
    title: 'Order Confirmation & Transaction',
    description: 'Buyers place an order, and the deal is finalized.',
    icon: '✅',
  },
];

const MotionCard = styled(motion(Card))(({ theme }) => ({
 margin: theme.spacing(2),
  padding: theme.spacing(2),
  backgroundColor: 'black',
  color: 'white',
  border: '5px solid var(--border-color)', // Add a border
  borderRadius: '50%', // Make the card round
  boxShadow: '0 4px 8px var(--shadow-color)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '300px', // Set a fixed height for the card
  width: '300px', // Set a fixed width for the card
}));

const HowItWorks = () => {
  return (
    <Box sx={{ backgroundImage: `url(${counterbg})` }}>
  
    <Typography sx={{margin:"2rem",padding:"2rem"}} variant="h4" component="h2" align="center" gutterBottom>
        How It Works
    </Typography>
    <Box
      sx={{
        display: 'grid',
      
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 4,
        padding: 4,
      }}
    >
      {steps.map((step, index) => (
        <Box color="white"
        sx={ {"data-aos":"fade-right"} }
         key={step.number}

          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.5 }} >
        <MotionCard   >
          <CardContent >
            <Typography variant="h3" sx={{textAlign:"center"}} component="div">
              {step.icon} 
            </Typography>
            
            <Typography variant="h5"  sx={{textAlign:"center"}}  color='var(--primary-color)' component="div" gutterBottom>
              {step.title}
            </Typography>
            <Typography variant="body2" sx={{textAlign:"center"}}  >
              {step.description}
            </Typography>
          </CardContent>
         
        </MotionCard>
        <Typography variant="h4" component="div" sx={{textAlign:'center'}}>
            STEP  {step.number} 
            </Typography>
         </Box>
      ))}
    </Box>
    </Box>
  );
};

export default HowItWorks;