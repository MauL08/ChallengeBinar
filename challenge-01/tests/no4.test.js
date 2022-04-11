const isValidPassword = require('../no4');

describe('check valid password', () => {
  describe('should return true', () => {
    test('Meong2021', () => {
      expect(isValidPassword('Meong2021')).toBe(true);
    });
    test('meong2021', () => {
      expect(isValidPassword('Meong2021')).toBe(true);
    });
    test('test123', () => {
      expect(isValidPassword('Meong2021')).toBe(true);
    });
  });
  describe('should return false', () => {
    test('@eong', () => {
      expect(isValidPassword('@eong')).toBe(false);
    });
    test('Meong2', () => {
      expect(isValidPassword('Meong2')).toBe(false);
    });
    test('test', () => {
      expect(isValidPassword('test')).toBe(false);
    });
  });
});

describe('check parameter', () => {
  test('number', () => {
    expect(isValidPassword(0)).toBe('Error: Invalid data type');
  });
  test('object', () => {
    expect(isValidPassword({})).toBe('Error: Invalid data type');
  });
  test('no parameter', () => {
    expect(isValidPassword()).toBe('Error: No parameter included');
  });
});
