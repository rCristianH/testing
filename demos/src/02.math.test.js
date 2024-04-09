const { sum, multiply, divide } = require('./02.math'); // Adjust the path if needed

describe('Math functions', () => {
  describe('sum', () => {
    test('adds positive numbers', () => {
      expect(sum(2, 3)).toBe(5);
    });

    test('adds negative numbers', () => {
      expect(sum(-2, -3)).toBe(-5);
    });

    test('adds zero', () => {
      expect(sum(5, 0)).toBe(5);
      expect(sum(0, -7)).toBe(-7);
    });
  });

  describe('multiply', () => {
    test('multiplies positive numbers', () => {
      expect(multiply(2, 3)).toBe(6);
    });

    test('multiplies negative numbers', () => {
      expect(multiply(-2, 3)).toBe(-6);
      expect(multiply(2, -3)).toBe(-6);
    });

    test('multiplies by zero', () => {
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(0, -7)).toBe(0);
    });
  });

  describe('divide', () => {
    test('divides positive numbers', () => {
      expect(divide(6, 2)).toBe(3);
    });

    test('divides by one', () => {
      expect(divide(5, 1)).toBe(5);
    });

    test('handles division by zero (error)', () => {
      expect(divide(5, 0)).toBeNull(); // Or a custom error message
    });
  });
});
