// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Container, Box, Typography } from '@mui/material';
import EmiCalculatorForm from './components/EmiCalculatorForm';
import CurrencyConverter from './components/CurrencyConverter';

const Calculator = () => (
  <Box>
    <EmiCalculatorForm />
  </Box>
);

const Schedule = () => (
  <Box>
    <Typography variant="h5" align="center" sx={{ mt: 4 }}>
      📈 Amortization Schedule
    </Typography>
    {/* Implement amortization schedule here */}
  </Box>
);

const Currency = () => (
  <Box>
    <CurrencyConverter />
  </Box>
);

const App = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 12, px: 2 }}>
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/currency" element={<Currency />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;

