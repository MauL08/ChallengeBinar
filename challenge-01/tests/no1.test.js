const changeWord = require('../no1');

describe('test changing word on text', () => {
  test('Andini sangat membenci kamu selamanya', () => {
    expect(
      changeWord(
        'mencintai',
        'membenci',
        'Andini sangat mencintai kamu selamanya'
      )
    ).toBe('Andini sangat membenci kamu selamanya');
  });
  test('Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu', () => {
    expect(
      changeWord(
        'bromo',
        'semeru',
        'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu'
      )
    ).toBe(
      'Gunung semeru tak akan mampu menggambarkan besarnya cintaku padamu'
    );
  });
  test('Saya makan ayam goreng', () => {
    expect(changeWord('goreng', 'opor', 'Saya makan ayam goreng')).toBe(
      'Saya makan ayam opor'
    );
  });
});

describe('test parameter', () => {
  test('number', () => {
    expect(changeWord(0, '', 0)).toBe('Parameter bukan String');
  });
  test('object', () => {
    expect(changeWord(0, '', {})).toBe('Parameter bukan String');
  });
  test('falsy', () => {
    expect(changeWord(null, null, null)).toBe('Parameter bukan String');
  });
});
