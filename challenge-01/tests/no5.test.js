const getSplitName = require('../no5');

describe('test split name', () => {
  describe('should return splitted names', () => {
    test('Aldi Daniela Pratama', () => {
      expect(getSplitName('Aldi Daniela Pratama')).toEqual({
        firstName: 'Aldi',
        middleName: 'Daniela',
        lastName: 'Pratama',
      });
    });
    test('Dwi Kuncoro', () => {
      expect(getSplitName('Dwi Kuncoro')).toEqual({
        firstName: 'Dwi',
        middleName: '',
        lastName: 'Kuncoro',
      });
    });
    test('Aurora', () => {
      expect(getSplitName('Aurora')).toEqual({
        firstName: 'Aurora',
        middleName: '',
        lastName: '',
      });
    });
  });
  describe('should return error (max characters name)', () => {
    test('Aurora Aureliya Sukma Darma', () => {
      expect(getSplitName('Aurora Aureliya Sukma Darma')).toBe(
        'Error : This function is only for 3 characters name'
      );
    });
    test('Ikan Bakar Ayam Sapi', () => {
      expect(getSplitName('Ikan Bakar Ayam Sapi')).toBe(
        'Error : This function is only for 3 characters name'
      );
    });
    test('Raja Dunia Bawah Tanah', () => {
      expect(getSplitName('Raja Dunia Bawah Tanah')).toBe(
        'Error : This function is only for 3 characters name'
      );
    });
  });
});

describe('check parameter', () => {
  test('number', () => {
    expect(getSplitName(0)).toBe('Error: Invalid data type');
  });
  test('object', () => {
    expect(getSplitName({})).toBe('Error: Invalid data type');
  });
  test('no parameter', () => {
    expect(getSplitName()).toBe('Error: No parameter included');
  });
});
