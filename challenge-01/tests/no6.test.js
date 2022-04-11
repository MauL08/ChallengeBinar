const getAngkaTerbesarKedua = require('../no6');

describe('test number', () => {
  describe('should return corect second number', () => {
    test('[2,3,4,1,5]', () => {
      expect(getAngkaTerbesarKedua([2, 3, 4, 1, 5])).toBe(4);
    });
    test('[7,2,2,4,6,9,0]', () => {
      expect(getAngkaTerbesarKedua([7, 2, 2, 4, 6, 9, 0])).toBe(7);
    });
    test('[9, 4, 7, 7, 4, 3, 2, 2, 8]', () => {
      expect(getAngkaTerbesarKedua([9, 4, 7, 7, 4, 3, 2, 2, 8])).toBe(8);
    });
  });
});

describe('check parameter', () => {
  test('number', () => {
    expect(getAngkaTerbesarKedua(0)).toBe('Error: Invalid data type');
  });
  test('string', () => {
    expect(getAngkaTerbesarKedua('')).toBe('Error: Invalid data type');
  });
  test('no parameter', () => {
    expect(getAngkaTerbesarKedua()).toBe('Error: No parameter included');
  });
});
