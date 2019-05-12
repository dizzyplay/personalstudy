const {arrayToTable, taxi} = require('./taxi2');

test('array to table', () => {
  expect(arrayToTable([1, 1, 1])).toEqual([3, 0, 0, 0]);
  expect(arrayToTable([2, 1, 1])).toEqual([2, 1, 0, 0]);
  expect(arrayToTable([4, 4, 2, 2, 3, 1])).toEqual([1, 2, 1, 2]);
});

test('taxi', () => {
  const v = taxi([3, 0, 0, 0]);
  expect(v).toBe(1);
  expect(taxi([3, 1, 1, 1])).toBe(3);
  expect(taxi([1, 1, 1, 1])).toBe(3);
  expect(taxi([0, 1, 1, 1])).toBe(3);
  expect(taxi([0, 0, 0, 1])).toBe(1);
  expect(taxi([1, 0, 1, 1])).toBe(2);
  expect(taxi([0, 1, 0, 0])).toBe(1);
});
