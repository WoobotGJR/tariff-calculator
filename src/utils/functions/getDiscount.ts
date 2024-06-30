export const getDiscount = (
  tarrif: Record<string, number>,
  currency: string,
  exchangeRate: number,
  period: string
) => {
  if (period === 'year') {
    const monthTotal = tarrif.month * 12;
    const yearTotal = tarrif.year;
    const discount = monthTotal - yearTotal;
    const rate = currency === 'RUB' ? 1 : exchangeRate;
    return discount * rate;
  }
  return 0;
};
