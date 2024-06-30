import styled from 'styled-components';
import { tarrifType } from '../utils/constants/tarrifType';

const SelectorContainer = styled.div`
  margin-bottom: 20px;
`;

interface TariffSelectorProps {
  tariff: string;
  setTariff: (value: string) => void;
}

const TariffSelector: React.FC<TariffSelectorProps> = ({
  tariff,
  setTariff,
}) => (
  <SelectorContainer>
    <label>
      Выберите тариф:
      <select value={tariff} onChange={(e) => setTariff(e.target.value)}>
        {tarrifType.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </label>
  </SelectorContainer>
);

export default TariffSelector;
