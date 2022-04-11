const checkTypeNumber = require('../no2');

describe('test check type number', () => {
  describe('should return GENAP', () => {
    test('10', () => {
      expect(checkTypeNumber(10)).toBe('GENAP');
    });
    test('4', () => {
      expect(checkTypeNumber(4)).toBe('GENAP');
    });
    test('8', () => {
      expect(checkTypeNumber(8)).toBe('GENAP');
    });
  });
  describe('should return GANJIL', () => {
    test('3', () => {
      expect(checkTypeNumber(3)).toBe('GANJIL');
    });
    test('1', () => {
      expect(checkTypeNumber(1)).toBe('GANJIL');
    });
    test('5', () => {
      expect(checkTypeNumber(5)).toBe('GANJIL');
    });
  });
});

describe('check parameter', () => {
  test('string', () => {
    expect(checkTypeNumber('test')).toBe('Error: Invalid data type');
  });
  test('object', () => {
    expect(checkTypeNumber({})).toBe('Error: Invalid data type');
  });
  test('no parameter', () => {
    expect(checkTypeNumber()).toBe('Error: Bro where is the parameter?');
  });
});
