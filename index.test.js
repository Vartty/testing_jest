const squareEq = require('./index');

test('x^2 + 2x - 3 equal 1 and -3', () => {
  expect(squareEq(1, 2, -3)).toBe(1,-3);
});
test('x^2 + 10x - 39 equal 3 and -13', () => {
  expect(squareEq(1,10,-39)).toBe(3,-13);
});
test('x^2 - 4x + 4 equal 2', () => {
  expect(squareEq(1,-4,4)).toBe(2);
});