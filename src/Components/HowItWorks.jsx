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

const MotionCard = styled(motion.create(Card))(({ theme }) => ({
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

// // FILE: src/components/DailyPriceModule.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Box, Button, CircularProgress, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper } from '@mui/material';

// const DailyPriceModule = () => {
//   const [states, setStates] = useState([]);
//   const [districts, setDistricts] = useState([]);
//   const [markets, setMarkets] = useState([]);
//   const [commodities, setCommodities] = useState(['Wheat', 'Rice', 'Corn']); // Example commodities
//   const [selectedState, setSelectedState] = useState('');
//   const [selectedDistrict, setSelectedDistrict] = useState('');
//   const [selectedMarket, setSelectedMarket] = useState('');
//   const [selectedCommodity, setSelectedCommodity] = useState('');
//   const [priceData, setPriceData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     // Fetch states
//     axios.get('/api/states')
//       .then(response => {
//         if (Array.isArray(response.data)) {
//           setStates(response.data);
//         } else {
//           setError('Failed to fetch states');
//         }
//       })
//       .catch(error => setError('Failed to fetch states'));
//   }, []);

//   useEffect(() => {
//     if (selectedState) {
//       // Fetch districts based on state
//       axios.get(`/api/districts/${selectedState}`)
//         .then(response => {
//           if (Array.isArray(response.data)) {
//             setDistricts(response.data);
//           } else {
//             setError('Failed to fetch districts');
//           }
//         })
//         .catch(error => setError('Failed to fetch districts'));
//     }
//   }, [selectedState]);

//   useEffect(() => {
//     if (selectedDistrict) {
//       // Fetch markets based on district
//       axios.get(`/api/markets/${selectedDistrict}`)
//         .then(response => {
//           if (Array.isArray(response.data)) {
//             setMarkets(response.data);
//           } else {
//             setError('Failed to fetch markets');
//           }
//         })
//         .catch(error => setError('Failed to fetch markets'));
//     }
//   }, [selectedDistrict]);

//   const handleGetPrice = () => {
//     setLoading(true);
//     setError('');
//     // Fetch price data
//     axios.get(`/api/prices?state=${selectedState}&district=${selectedDistrict}&market=${selectedMarket}&commodity=${selectedCommodity}`)
//       .then(response => {
//         if (Array.isArray(response.data)) {
//           setPriceData(response.data);
//         } else {
//           setError('Failed to fetch price data');
//         }
//         setLoading(false);
//       })
//       .catch(error => {
//         setError('Failed to fetch price data');
//         setLoading(false);
//       });
//   };

//   return (
//     <Box sx={{ padding: 4 }}>
//       <Typography variant="h4" gutterBottom>Daily Price Module</Typography>
//       <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
//         <Select
//           value={selectedState}
//           onChange={(e) => setSelectedState(e.target.value)}
//           displayEmpty
//           fullWidth
//         >
//           <MenuItem value="" disabled>Select State</MenuItem>
//           {states.map(state => (
//             <MenuItem key={state} value={state}>{state}</MenuItem>
//           ))}
//         </Select>
//         <Select
//           value={selectedDistrict}
//           onChange={(e) => setSelectedDistrict(e.target.value)}
//           displayEmpty
//           fullWidth
//           disabled={!selectedState}
//         >
//           <MenuItem value="" disabled>Select District</MenuItem>
//           {districts.map(district => (
//             <MenuItem key={district} value={district}>{district}</MenuItem>
//           ))}
//         </Select>
//         <Select
//           value={selectedMarket}
//           onChange={(e) => setSelectedMarket(e.target.value)}
//           displayEmpty
//           fullWidth
//           disabled={!selectedDistrict}
//         >
//           <MenuItem value="" disabled>Select Market</MenuItem>
//           {markets.map(market => (
//             <MenuItem key={market} value={market}>{market}</MenuItem>
//           ))}
//         </Select>
//         <Select
//           value={selectedCommodity}
//           onChange={(e) => setSelectedCommodity(e.target.value)}
//           displayEmpty
//           fullWidth
//           disabled={!selectedMarket}
//         >
//           <MenuItem value="" disabled>Select Commodity</MenuItem>
//           {commodities.map(commodity => (
//             <MenuItem key={commodity} value={commodity}>{commodity}</MenuItem>
//           ))}
//         </Select>
//       </Box>
//       <Button variant="contained" color="primary" onClick={handleGetPrice} disabled={loading}>
//         {loading ? <CircularProgress size={24} /> : 'Get Price'}
//       </Button>
//       {error && <Typography color="error" sx={{ marginTop: 2 }}>{error}</Typography>}
//       <TableContainer component={Paper} sx={{ marginTop: 4 }}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Commodity</TableCell>
//               <TableCell>Price</TableCell>
//               <TableCell>Market</TableCell>
//               <TableCell>Date</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {priceData.length > 0 ? (
//               priceData.map((price, index) => (
//                 <TableRow key={index}>
//                   <TableCell>{price.commodity}</TableCell>
//                   <TableCell>{price.price}</TableCell>
//                   <TableCell>{price.market}</TableCell>
//                   <TableCell>{price.date}</TableCell>
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan={4} align="center">No data available</TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// };

// export default DailyPriceModule;