import axios from 'axios';
import { apiUrl } from '../../utils/constants/apiUrl';

const fetchExchangeRates = async () => {
  try {
    const response = await axios.get(`${apiUrl}/RUB`);
    return response.data.rates;
  } catch (error) {
    console.error('Error fetching exchange rates', error);
  }
};

export const currencyService = {
  fetchExchangeRates,
};
