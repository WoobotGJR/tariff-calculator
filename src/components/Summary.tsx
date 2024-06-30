import styled from 'styled-components';
import { tariffs } from '../utils/constants/tarrifs';
import { getTotal } from '../utils/functions/getTotal';
import { getDiscount } from '../utils/functions/getDiscount';

const SummaryContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  border-top: 1px solid #ddd;
`;

interface SummaryProps {
  tariff: string;
  currency: string;
  period: string;
  exchangeRates: Record<string, number>;
}

const Summary: React.FC<SummaryProps> = ({
  tariff,
  currency,
  period,
  exchangeRates,
}) => {
  return (
    <SummaryContainer>
      <h2>Сумма для оплаты:</h2>
      <p>
        {getTotal(
          tariffs[tariff][period],
          currency,
          exchangeRates[currency]
        ).toFixed(2)}{' '}
        {currency}
      </p>
      {period === 'year' && (
        <p>
          Сумма скидки:{' '}
          {getDiscount(
            tariffs[tariff],
            currency,
            exchangeRates[currency],
            period
          ).toFixed(2)}{' '}
          {currency}
        </p>
      )}
    </SummaryContainer>
  );
};

export default Summary;
