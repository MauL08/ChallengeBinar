const getTotalPenjualan = require('../no7');

const data1 = [
  {
    namaProduct: 'Sepatu Futsal Nike Vapor Academy 8',
    hargaSatuan: 760000,
    kategori: 'Sepatu Sport',
    totalTerjual: 90,
  },
  {
    namaProduct: 'Sepatu Warrior Tristan Black Brown High',
    hargaSatuan: 960000,
    kategori: 'Sepatu Sneaker',
    totalTerjual: 37,
  },
  {
    namaProduct: 'Sepatu Warrior Tristan Maroon High ',
    kategori: 'Sepatu Sneaker',
    hargaSatuan: 360000,
    totalTerjual: 90,
  },
  {
    namaProduct: 'Sepatu Warrior Rainbow Tosca Corduroy',
    hargaSatuan: 120000,
    kategori: 'Sepatu Sneaker',
    totalTerjual: 90,
  },
];

const data2 = [
  {
    namaProduct: 'Sepatu Futsal Nike Vapor Academy 8',
    hargaSatuan: 760000,
    kategori: 'Sepatu Sport',
    totalTerjual: 10,
  },
  {
    namaProduct: 'Sepatu Warrior Tristan Black Brown High',
    hargaSatuan: 960000,
    kategori: 'Sepatu Sneaker',
    totalTerjual: 30,
  },
  {
    namaProduct: 'Sepatu Warrior Tristan Maroon High ',
    kategori: 'Sepatu Sneaker',
    hargaSatuan: 360000,
    totalTerjual: 10,
  },
  {
    namaProduct: 'Sepatu Warrior Rainbow Tosca Corduroy',
    hargaSatuan: 120000,
    kategori: 'Sepatu Sneaker',
    totalTerjual: 90,
  },
];

const data3 = [
  {
    namaProduct: 'Sepatu Futsal Nike Vapor Academy 8',
    hargaSatuan: 760000,
    kategori: 'Sepatu Sport',
    totalTerjual: 0,
  },
  {
    namaProduct: 'Sepatu Warrior Tristan Black Brown High',
    hargaSatuan: 960000,
    kategori: 'Sepatu Sneaker',
    totalTerjual: 20,
  },
  {
    namaProduct: 'Sepatu Warrior Tristan Maroon High ',
    kategori: 'Sepatu Sneaker',
    hargaSatuan: 360000,
    totalTerjual: 90,
  },
  {
    namaProduct: 'Sepatu Warrior Rainbow Tosca Corduroy',
    hargaSatuan: 120000,
    kategori: 'Sepatu Sneaker',
    totalTerjual: 5,
  },
];

describe('test get total terjual', () => {
  describe('should return total terjual', () => {
    test('Object data 1', () => {
      expect(getTotalPenjualan(data1)).toBe(307);
    });
    test('Object data 2', () => {
      expect(getTotalPenjualan(data2)).toBe(140);
    });
    test('Object data 3', () => {
      expect(getTotalPenjualan(data3)).toBe(115);
    });
  });
});

describe('check parameter', () => {
  test('number', () => {
    expect(getTotalPenjualan(0)).toBe('Error: Invalid data type');
  });
  test('string', () => {
    expect(getTotalPenjualan('')).toBe('Error: Invalid data type');
  });
  test('no parameter', () => {
    expect(getTotalPenjualan()).toBe('Error: No parameter included');
  });
});
