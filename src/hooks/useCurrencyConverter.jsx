// src/hooks/useCurrencyConverter.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = 'ab15b329d9ac9575a0bef805'; // Replace with your actual API key
const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

const useCurrencyConverter = () => {
  const [rates, setRates] = useState({});
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(API_URL);
        setRates(response.data.conversion_rates);
        setCurrencies(Object.keys(response.data.conversion_rates));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchRates();
  }, []);

  const convert = () => {
    if (!amount || isNaN(amount)) {
      setConvertedAmount(null);
      return;
    }
    const rateFrom = rates[fromCurrency];
    const rateTo = rates[toCurrency];
    const result = (amount / rateFrom) * rateTo;
    setConvertedAmount(result.toFixed(2));
  };

  return {
    rates,
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
  };
};

export default useCurrencyConverter;
