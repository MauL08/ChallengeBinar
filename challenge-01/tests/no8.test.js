const getInfoPenjualan = require('../no8');

const data1 = [
  {
    idProduct: 'BOOK002421',
    namaProduk: 'Pulang - Pergi',
    penulis: 'Tere Liye',
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: 'BOOK002351',
    namaProduk: 'Selamat Tinggal',
    penulis: 'Tere Liye',
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Garis Waktu',
    penulis: 'Fiersa Besari',
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Laskar Pelangi',
    penulis: 'Andrea Hirata',
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

const data2 = [
  {
    idProduct: 'BOOK002421',
    namaProduk: 'Pulang - Pergi',
    penulis: 'Tere Liye',
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: 'BOOK002351',
    namaProduk: 'Selamat Tinggal',
    penulis: 'Tere Liye',
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Garis Waktu',
    penulis: 'Fiersa Besari',
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Laskar Pelangi',
    penulis: 'Andrea Hirata',
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

const data3 = [
  {
    idProduct: 'BOOK002421',
    namaProduk: 'Pulang - Pergi',
    penulis: 'Tere Liye',
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: 'BOOK002351',
    namaProduk: 'Selamat Tinggal',
    penulis: 'Tere Liye',
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Garis Waktu',
    penulis: 'Fiersa Besari',
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Laskar Pelangi',
    penulis: 'Andrea Hirata',
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

describe('test get info penjualan', () => {
  describe('should return info penjualan', () => {
    test('Object data 1', () => {
      expect(getInfoPenjualan(data1)).toEqual({
        totalKeuntungan: 'Rp 9.829.000',
        totalModal: 'Rp 43.131.000',
        persentaseKeuntungan: '22.79%',
        produkBukuTerlaris: 'Garis Waktu',
        penulisTerlaris: 'Tere Liye',
      });
    });
    test('Object data 2', () => {
      expect(getInfoPenjualan(data2)).toEqual({
        totalKeuntungan: 'Rp 9.829.000',
        totalModal: 'Rp 43.131.000',
        persentaseKeuntungan: '22.79%',
        produkBukuTerlaris: 'Garis Waktu',
        penulisTerlaris: 'Tere Liye',
      });
    });
    test('Object data 3', () => {
      expect(getInfoPenjualan(data3)).toEqual({
        totalKeuntungan: 'Rp 9.829.000',
        totalModal: 'Rp 43.131.000',
        persentaseKeuntungan: '22.79%',
        produkBukuTerlaris: 'Garis Waktu',
        penulisTerlaris: 'Tere Liye',
      });
    });
  });
});

describe('check parameter', () => {
  test('number', () => {
    expect(getInfoPenjualan(0)).toBe('Error: Invalid data type');
  });
  test('string', () => {
    expect(getInfoPenjualan('')).toBe('Error: Invalid data type');
  });
  test('no parameter', () => {
    expect(getInfoPenjualan()).toBe('Error: No parameter included');
  });
});
