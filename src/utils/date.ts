export const convertDateToDotFormat = (dateString: string) => {
  const shortDate = dateString.split('T')[0];
  const shortDateReverted = shortDate.split('-').reverse().join('.');
  return shortDateReverted;
};
