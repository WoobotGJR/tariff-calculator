import { useState, useEffect } from 'react';
import TariffSelector from './TariffSelector';
import CurrencySelector from './CurrencySelector';
import PeriodSelector from './PeriodSelector';
import Summary from './Summary';
import styled from 'styled-components';
import { currencyService } from '../api/currencyService/currencyService';

const CalculatorContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
`;

const TariffCalculator = () => {
  const [tariff, setTariff] = useState<string>('standard');
  const [currency, setCurrency] = useState<string>('RUB');
  const [period, setPeriod] = useState<string>('month');
  const [exchangeRates, setExchangeRates] = useState<Record<string, number>>({
    CNY: 0,
    KZT: 0,
  });

  useEffect(() => {
    (async () => {
      const exchangeRates = await currencyService.fetchExchangeRates();
      setExchangeRates({
        CNY: exchangeRates.CNY,
        KZT: exchangeRates.KZT,
      });
    })();
  }, []);

  return (
    <CalculatorContainer>
      <h1>Тарифный калькулятор</h1>
      <TariffSelector tariff={tariff} setTariff={setTariff} />
      <CurrencySelector currency={currency} setCurrency={setCurrency} />
      <PeriodSelector period={period} setPeriod={setPeriod} />
      <Summary
        tariff={tariff}
        currency={currency}
        period={period}
        exchangeRates={exchangeRates}
      />
    </CalculatorContainer>
  );
};

export default TariffCalculator;
