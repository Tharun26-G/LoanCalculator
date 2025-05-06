import { useState } from 'react';

const useEmiCalculator = () => {
  const [principal, setPrincipal] = useState(localStorage.getItem('principal') || '');
  const [rate, setRate] = useState(localStorage.getItem('rate') || '');
  const [duration, setDuration] = useState(localStorage.getItem('duration') || '');
  const [emi, setEmi] = useState(localStorage.getItem('emi') || null);

  const calculateEmi = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 12 / 100;
    const n = parseInt(duration);

    if (!p || !r || !n) return;

    const emiVal = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const fixedEmi = emiVal.toFixed(2);

    // Store values
    localStorage.setItem('principal', principal);
    localStorage.setItem('rate', rate);
    localStorage.setItem('duration', duration);
    localStorage.setItem('emi', fixedEmi);

    setEmi(fixedEmi);
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
