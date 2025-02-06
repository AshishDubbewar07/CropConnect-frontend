import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, CircularProgress, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper } from '@mui/material';

const DailyPriceModule = () => {
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [markets, setMarkets] = useState([]);
  const [commodities, setCommodities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedMarket, setSelectedMarket] = useState('');
  const [selectedCommodity, setSelectedCommodity] = useState('');
  const [priceData, setPriceData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch states
    axios.get('/dailyprice/states')
      .then(response => {
        if (Array.isArray(response.data)) {
          setStates(response.data);
        } else {
          console.error('Invalid data format for states:', response.data);
          setError('Invalid data format for states');
        }
      })
      .catch((error) => {
        console.error('Failed to fetch states:', error);
        setError('Failed to fetch states');
      });
  }, []);

  useEffect(() => {
    if (selectedState) {
      // Fetch districts based on state
      axios.get(`/dailyprice/districts/${selectedState}`)
        .then(response => {
          if (Array.isArray(response.data)) {
            setDistricts(response.data);
          } else {
            console.error('Invalid data format for districts:', response.data);
            setError('Invalid data format for districts');
          }
        })
        .catch((error) => {
          console.error('Failed to fetch districts:', error);
          setError('Failed to fetch districts');
        });
    }
  }, [selectedState]);

  useEffect(() => {
    if (selectedDistrict) {
      // Fetch markets based on district
      axios.get(`/dailyprice/markets/${selectedDistrict}`)
        .then(response => {
          if (Array.isArray(response.data)) {
            setMarkets(response.data);
          } else {
            console.error('Invalid data format for markets:', response.data);
            setError('Invalid data format for markets');
          }
        })
        .catch((error) => {f
          console.error('Failed to fetch markets:', error);
          setError('Failed to fetch markets');
        });
    }
  }, [selectedDistrict]);

  useEffect(() => {
    if (selectedMarket) {
      // Fetch commodities based on market
      axios.get(`/dailyprice/commodities/${selectedMarket}`)
        .then(response => {
          if (Array.isArray(response.data)) {
            setCommodities(response.data);
          } else {
            console.error('Invalid data format for commodities:', response.data);
            setError('Invalid data format for commodities');
          }
        })
        .catch((error) => {
          console.error('Failed to fetch commodities:', error);
          setError('Failed to fetch commodities');
        });
    }
  }, [selectedMarket]);

  const handleGetPrice = () => {
    setLoading(true);
    setError('');
    // Fetch price data
    axios.get(`/dailyprice/prices?state=${selectedState}&district=${selectedDistrict}&market=${selectedMarket}&commodity=${selectedCommodity}`)
      .then(response => {
        setPriceData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch price data:', error);
        setError('Failed to fetch price data');
        setLoading(false);
      });
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>Daily Price Module</Typography>
      <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
        <Select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          displayEmpty
          fullWidth
        >
          <MenuItem value="" disabled>Select State</MenuItem>
          {states.map(state => (
            <MenuItem key={state} value={state}>{state}</MenuItem>
          ))}
        </Select>
        <Select
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
          displayEmpty
          fullWidth
          disabled={!selectedState}
        >
          <MenuItem value="" disabled>Select District</MenuItem>
          {districts.map(district => (
            <MenuItem key={district} value={district}>{district}</MenuItem>
          ))}
        </Select>
        <Select
          value={selectedMarket}
          onChange={(e) => setSelectedMarket(e.target.value)}
          displayEmpty
          fullWidth
          disabled={!selectedDistrict}
        >
          <MenuItem value="" disabled>Select Market</MenuItem>
          {markets.map(market => (
            <MenuItem key={market} value={market}>{market}</MenuItem>
          ))}
        </Select>
        <Select
          value={selectedCommodity}
          onChange={(e) => setSelectedCommodity(e.target.value)}
          displayEmpty
          fullWidth
          disabled={!selectedMarket}
        >
          <MenuItem value="" disabled>Select Commodity</MenuItem>
          {commodities.map(commodity => (
            <MenuItem key={commodity} value={commodity}>{commodity}</MenuItem>
          ))}
        </Select>
      </Box>
      <Button variant="contained" color="primary" onClick={handleGetPrice} disabled={loading}>
        {loading ? <CircularProgress size={24} /> : 'Get Price'}
      </Button>
      {error && <Typography color="error" sx={{ marginTop: 2 }}>{error}</Typography>}
      <TableContainer component={Paper} sx={{ marginTop: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Commodity</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Market</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {priceData.length > 0 ? (
              <TableRow>
                <TableCell>{priceData.commodity}</TableCell>
                <TableCell>{priceData.modal_price}</TableCell>
                <TableCell>{priceData.market}</TableCell>
                <TableCell>{priceData.arrival_date}</TableCell>
              </TableRow>
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center">No data available</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DailyPriceModule;