// src/components/CurrencyConverter.jsx
import React from 'react';
import {
  Box,
  TextField,
  MenuItem,
  Button,
  Typography,
  CircularProgress,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import useCurrencyConverter from '../hooks/useCurrencyConverter';

const CurrencyConverter = () => {
  const {
    currencies,
    amount,
    setAmount,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    convertedAmount,
    convert,
    loading,
  } = useCurrencyConverter();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: 'auto',
        p: 3,
        mt: 4,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        💱 Currency Converter
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <TextField
          label="Amount"
          variant="outlined"
          fullWidth
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
        />
        <TextField
          select
          label="From"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          fullWidth
        >
          {currencies.map((currency) => (
            <MenuItem key={currency} value={currency}>
              {currency}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="To"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          fullWidth
        >
          {currencies.map((currency) => (
            <MenuItem key={currency} value={currency}>
              {currency}
            </MenuItem>
          ))}
        </TextField>
        <Button variant="contained" onClick={convert}>
          Convert
        </Button>
        {convertedAmount && (
          <Typography variant="h6" align="center" sx={{ mt: 2 }}>
            {amount} {fromCurrency} = {convertedAmount} {toCurrency}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default CurrencyConverter;
