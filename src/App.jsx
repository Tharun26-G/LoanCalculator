// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Container, Box } from '@mui/material';
import EmiCalculatorForm from './components/EmiCalculatorForm';

const Calculator = () => (
  <Box>
    <EmiCalculatorForm /> {/* Embedding the EMI Calculator component here */}
  </Box>
);

const Schedule = () => (
  <Box>
    <Typography variant="h5" align="center" sx={{ mt: 4 }}>
      📈 Amortization Schedule
    </Typography>
    {/* Amortization schedule content will be here */}
  </Box>
);

const Currency = () => (
  <Box>
    <Typography variant="h5" align="center" sx={{ mt: 4 }}>
      💱 Live Currency Conversion
    </Typography>
    {/* Currency conversion content will be here */}
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
