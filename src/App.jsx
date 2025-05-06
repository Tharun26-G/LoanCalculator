import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Container, Box, Typography } from '@mui/material';
import EmiCalculatorForm from './components/EmiCalculatorForm';
import CurrencyConverter from './components/CurrencyConverter';
import AmortizationSchedule from './components/AmortizationSchedule';

const Calculator = () => (
  <Box>
    <EmiCalculatorForm />
  </Box>
);

const Schedule = () => (
  <Box>
    <AmortizationSchedule />
  </Box>
);

const Currency = () => (
  <Box>
    <CurrencyConverter />
  </Box>
);

const NotFound = () => (
  <Box sx={{ mt: 4, textAlign: 'center' }}>
    <Typography variant="h4" color="error">
      404 - Page Not Found
    </Typography>
    <Typography variant="subtitle1" sx={{ mt: 2 }}>
      The page you are looking for does not exist.
    </Typography>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
