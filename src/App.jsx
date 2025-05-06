// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Container, Box } from '@mui/material';

const Calculator = () => <Box>📐 EMI Calculator</Box>;
const Schedule = () => <Box>📈 Amortization Schedule</Box>;
const Currency = () => <Box>💱 Live Currency Conversion</Box>;

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
