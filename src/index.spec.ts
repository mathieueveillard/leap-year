test("A year that is NOT divisible by 4 is NOT a leap year", () => {
  expect(isLeapYear(2003)).toEqual(false);
});
