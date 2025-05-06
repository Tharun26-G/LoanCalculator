// src/components/EmiCalculatorForm.js
import React from 'react';
import { TextField, Button, Box, Typography, Grid, useTheme, useMediaQuery } from '@mui/material';
import useEmiCalculator from '../hooks/useEmiCalculator';

const EmiCalculatorForm = () => {
  const {
    emi,
    principal,
    setPrincipal,
    rate,
    setRate,
    duration,
    setDuration,
    calculateEmi,
  } = useEmiCalculator();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        maxWidth: '600px',
        margin: 'auto',
        padding: isMobile ? 2 : 4,
        borderRadius: 2,
        boxShadow: 2,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Loan EMI Calculator
      </Typography>

      <Grid container spacing={2} direction="column">
        <Grid item>
          <TextField
            label="Principal Amount (₹)"
            variant="outlined"
            fullWidth
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            type="number"
          />
        </Grid>
        <Grid item>
          <TextField
            label="Annual Interest Rate (%)"
            variant="outlined"
            fullWidth
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            type="number"
          />
        </Grid>
        <Grid item>
          <TextField
            label="Loan Duration (Months)"
            variant="outlined"
            fullWidth
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            type="number"
          />
        </Grid>

        <Grid item sx={{ marginTop: 2 }}>
          <Button
            variant="contained"
            fullWidth
            onClick={calculateEmi}
            sx={{ padding: isMobile ? 1 : 1.5 }}
          >
            Calculate EMI
          </Button>
        </Grid>

        {emi !== null && (
          <Grid item sx={{ marginTop: 2 }}>
            <Typography variant="h6" color="primary" align="center">
              Your EMI: ₹{emi}
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default EmiCalculatorForm;
