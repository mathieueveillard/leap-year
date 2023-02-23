const isMultipleOf = (divider: number, n: number): boolean => {
  return n % divider === 0;
};

const isLeapYear = (year: number): boolean => {
  return (
    (isMultipleOf(4, year) && !isMultipleOf(100, year)) || //
    isMultipleOf(400, year)
  );
};

export default isLeapYear;
