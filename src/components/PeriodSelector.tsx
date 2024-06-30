import styled from 'styled-components';
import { timeIntervals } from '../utils/constants/timeIntervals';

const SelectorContainer = styled.div`
  margin-bottom: 20px;
`;

interface PeriodSelectorProps {
  period: string;
  setPeriod: (value: string) => void;
}

const PeriodSelector: React.FC<PeriodSelectorProps> = ({
  period,
  setPeriod,
}) => (
  <SelectorContainer>
    <label>
      Выберите период оплаты:
      <select value={period} onChange={(e) => setPeriod(e.target.value)}>
        {timeIntervals.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </label>
  </SelectorContainer>
);

export default PeriodSelector;
