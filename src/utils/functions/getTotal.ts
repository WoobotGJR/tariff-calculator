export const getTotal = (
  amount: number,
  currency: string,
  exchangeRate: number
) => {
  const rate = currency === 'RUB' ? 1 : exchangeRate;
  return amount * rate;
};
