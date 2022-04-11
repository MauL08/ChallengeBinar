const checkEmail = require('../no3');

describe('test check email', () => {
  describe('should return VALID', () => {
    test('apranata@binar.co.id', () => {
      expect(checkEmail('apranata@binar.co.id')).toBe('VALID');
    });
    test('apranata@binar.com', () => {
      expect(checkEmail('apranata@binar.com')).toBe('VALID');
    });
    test('apranata123@gmail.com', () => {
      expect(checkEmail('apranata123@gmail.com')).toBe('VALID');
    });
  });
  describe('should return INVALID', () => {
    test('apranata@binar', () => {
      expect(checkEmail('apranata@binar')).toBe('INVALID');
    });
    test('apranata', () => {
      expect(checkEmail('apranata')).toBe('INVALID');
    });
    test('@binar.com', () => {
      expect(checkEmail('@binar.com')).toBe('INVALID');
    });
  });
});

describe('check parameter', () => {
  test('number', () => {
    expect(checkEmail(0)).toBe('Error: Invalid data type');
  });
  test('object', () => {
    expect(checkEmail({})).toBe('Error: Invalid data type');
  });
  test('no parameter', () => {
    expect(checkEmail()).toBe('Error: No parameter included');
  });
});
