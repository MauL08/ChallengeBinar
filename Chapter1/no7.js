const dataPenjualan = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High ",
    kategori: "Sepatu Sneaker",
    hargaSatuan: 360000,
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];

getTotalPenjualan = (data) => {
  if (typeof data === "object") {
    terjual = data.map((val) => {
      return val.totalTerjual;
    });

    total = 0;
    terjual.forEach((val) => {
      total += val;
    });

    return total;
  } else if (typeof data === "number" || typeof data === "string") {
    return "Error: Invalid data type";
  } else {
    return "Error: No parameter included";
  }
};

console.log(getTotalPenjualan(dataPenjualan));
