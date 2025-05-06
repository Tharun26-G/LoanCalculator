import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useTheme,
} from '@mui/material';

const generateSchedule = (principal, annualRate, months) => {
  const monthlyRate = annualRate / 12 / 100;
  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  let balance = principal;
  const schedule = [];

  for (let i = 1; i <= months; i++) {
    const interest = balance * monthlyRate;
    const principalPayment = emi - interest;
    balance -= principalPayment;

    schedule.push({
      month: i,
      emi: emi.toFixed(2),
      interest: interest.toFixed(2),
      principal: principalPayment.toFixed(2),
      balance: balance > 0 ? balance.toFixed(2) : '0.00',
    });
  }

  return schedule;
};

const AmortizationSchedule = () => {
  const theme = useTheme();

  const principal = parseFloat(localStorage.getItem('principal'));
  const rate = parseFloat(localStorage.getItem('rate'));
  const duration = parseInt(localStorage.getItem('duration'));

  // Don't show anything if values are missing
  if (!principal || !rate || !duration) {
    return (
      <Box>
        <Typography variant="h6" color="error">
          Please calculate EMI first to view the amortization schedule.
        </Typography>
      </Box>
    );
  }

  const schedule = generateSchedule(principal, rate, duration);

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        📈 Amortization Schedule
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Breakdown of each EMI payment into principal and interest components
      </Typography>

      <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
        <Table size="small">
          <TableHead sx={{ backgroundColor: theme.palette.action.hover }}>
            <TableRow>
              <TableCell>Month</TableCell>
              <TableCell align="right">EMI</TableCell>
              <TableCell align="right">Principal</TableCell>
              <TableCell align="right">Interest</TableCell>
              <TableCell align="right">Balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schedule.map((row) => (
              <TableRow key={row.month}>
                <TableCell>{row.month}</TableCell>
                <TableCell align="right">₹{row.emi}</TableCell>
                <TableCell align="right">₹{row.principal}</TableCell>
                <TableCell align="right">₹{row.interest}</TableCell>
                <TableCell align="right">₹{row.balance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AmortizationSchedule;
