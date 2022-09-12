export const formatNumberToUSD = (number: number) => {
  const formattedNumber = number.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return formattedNumber;
};
