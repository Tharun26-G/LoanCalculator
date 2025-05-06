import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
  MenuItem,
  CircularProgress,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useEmiCalculator from '../hooks/useEmiCalculator';
import useCurrencyConverter from '../hooks/useCurrencyConverter';

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

  const {
    currencies,
    convertedAmount,
    setAmount,
    setFromCurrency,
    setToCurrency,
    convert,
    loading,
  } = useCurrencyConverter();

  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [convertedResult, setConvertedResult] = useState('');
  const [isConverting, setIsConverting] = useState(false);
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleLiveCurrencyConversion = async () => {
    if (emi && !isConverting) {
      setIsConverting(true);
      setAmount(emi);
      setFromCurrency('INR');
      setToCurrency(selectedCurrency);
      await convert();
      setConvertedResult(`${emi} INR = ${convertedAmount} ${selectedCurrency}`);
      setIsConverting(false);
    }
  };

  const handleReset = () => {
    setPrincipal('');
    setRate('');
    setDuration('');
    setSelectedCurrency('');
    setConvertedResult('');
  };

  useEffect(() => {
    setConvertedResult('');
  }, [principal, rate, duration]);

  return (
    <Box
      sx={{
        maxWidth: '600px',
        margin: 'auto',
        padding: isMobile ? 2 : 4,
        borderRadius: 3,
        boxShadow: 3,
        backgroundColor:
          theme.palette.mode === 'light'
            ? theme.palette.grey[50]
            : theme.palette.grey[900],
      }}
    >
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        color="text.primary"
      >
        Loan EMI Calculator
      </Typography>

      <Grid container spacing={3} direction="column">
        <Grid item container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Principal Amount (₹)"
              variant="outlined"
              fullWidth
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Annual Interest Rate (%)"
              variant="outlined"
              fullWidth
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Loan Duration (Months)"
              variant="outlined"
              fullWidth
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              type="number"
            />
          </Grid>
        </Grid>

        <Grid item container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              fullWidth
              onClick={calculateEmi}
              sx={{
                borderRadius: 3,
                paddingY: 1.5,
                textTransform: 'none',
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.getContrastText(theme.palette.primary.main),
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            >
              Calculate EMI
            </Button>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Convert EMI to"
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
              fullWidth
              SelectProps={{
                MenuProps: {
                  PaperProps: {
                    sx: {
                      minWidth: 200, // widen dropdown
                    },
                  },
                },
              }}
              sx={{
                '& .MuiSelect-select': {
                  paddingY: 1.5,
                },
              }}
            >
              {currencies.map((currency) => (
                <MenuItem key={currency} value={currency}>
                  {currency}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              fullWidth
              onClick={handleLiveCurrencyConversion}
              disabled={!selectedCurrency || isConverting}
              sx={{
                borderRadius: 3,
                paddingY: 1.5,
                textTransform: 'none',
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.getContrastText(theme.palette.secondary.main),
                '&:hover': {
                  backgroundColor: theme.palette.secondary.dark,
                },
              }}
            >
              {isConverting ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                `Convert EMI to ${selectedCurrency}`
              )}
            </Button>
          </Grid>
        </Grid>

        {emi && (
          <>
            <Grid item>
              <Typography variant="h6" align="center" color="primary">
                Your EMI: ₹{emi}
              </Typography>
            </Grid>

            {convertedResult && (
              <Grid item>
                <Typography variant="body1" align="center" sx={{ mt: 1 }}>
                  {convertedResult}
                </Typography>
              </Grid>
            )}

            <Grid item>
              <Button
                variant="outlined"
                fullWidth
                onClick={handleReset}
                sx={{
                  borderRadius: 3,
                  paddingY: 1.5,
                  textTransform: 'none',
                  color: theme.palette.error.main,
                  borderColor: theme.palette.error.main,
                  '&:hover': {
                    backgroundColor: theme.palette.error.light,
                  },
                }}
              >
                Reset
              </Button>
            </Grid>

            <Grid item container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => navigate('/schedule')}
                  sx={{
                    borderRadius: 3,
                    paddingY: 1.5,
                    textTransform: 'none',
                    backgroundColor: theme.palette.grey[700],
                    color: theme.palette.getContrastText(theme.palette.grey[700]),
                    '&:hover': {
                      backgroundColor: theme.palette.grey[800],
                    },
                  }}
                >
                  View Amortization Schedule
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => navigate('/currency')}
                  sx={{
                    borderRadius: 3,
                    paddingY: 1.5,
                    textTransform: 'none',
                    backgroundColor: theme.palette.grey[700],
                    color: theme.palette.getContrastText(theme.palette.grey[700]),
                    '&:hover': {
                      backgroundColor: theme.palette.grey[800],
                    },
                  }}
                >
                  Open Currency Converter
                </Button>
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};

export default EmiCalculatorForm;
