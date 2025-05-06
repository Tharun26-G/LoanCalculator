// src/hooks/useEmiCalculator.js
import { useState } from 'react';

const useEmiCalculator = () => {
  const [emi, setEmi] = useState(null);
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [duration, setDuration] = useState(0);
  
  const calculateEmi = () => {
    const P = parseFloat(principal);
    const R = parseFloat(rate) / 12 / 100;  // Monthly interest rate
    const N = parseInt(duration);

    if (P && R && N) {
      const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
      setEmi(emi.toFixed(2));
    } else {
      setEmi(null);
    }
  };

  return {
    emi,
    principal,
    setPrincipal,
    rate,
    setRate,
    duration,
    setDuration,
    calculateEmi,
  };
};

export default useEmiCalculator;
