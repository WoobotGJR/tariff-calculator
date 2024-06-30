import styled from 'styled-components';
import { currencyType } from '../utils/constants/currencyType';

const SelectorContainer = styled.div`
  margin-bottom: 20px;
`;

interface CurrencySelectorProps {
  currency: string;
  setCurrency: (value: string) => void;
}

const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  currency,
  setCurrency,
}) => (
  <SelectorContainer>
    <label>
      Выберите валюту:
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        {currencyType.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </label>
  </SelectorContainer>
);

export default CurrencySelector;
