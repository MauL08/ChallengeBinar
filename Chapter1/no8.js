const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

getInfoPenjualan = (data) => {
  dataPenjualanObj = {
    totalKeuntungan: "",
    totalModal: "",
    persentaseKeuntungan: "",
    produkBukuTerlaris: "",
    penulisTerlaris: "",
  };

  if (typeof data === "object") {
    mainObj = data.map((val) => {
      let writerName = val.penulis;
      let bookName = val.namaProduk;

      let beli = val.hargaBeli;
      let jual = val.hargaJual;
      let stokTerjual = val.totalTerjual;
      let sisa = val.sisaStok;

      // totalStok
      let totalStok = val.sisaStok + val.totalTerjual;

      // Modal
      let modal = beli * totalStok;

      // Terjual
      let hasilJual = jual * stokTerjual;

      // Untung
      let untung = hasilJual - modal;
      if (untung < 0) untung = 0;

      // persentaseBukuTerlaris
      let persentaseProdukTerlaris = (stokTerjual / totalStok) * 100;

      return {
        writerName,
        bookName,
        totalStok,
        stokTerjual,
        sisa,
        beli,
        jual,
        modal,
        hasilJual,
        untung,
        persentaseProdukTerlaris,
      };
    });

    let totalUntung = 0;
    let totalModal = 0;
    let totalHasilJual = 0;

    let booksProb = [];
    let bookInfo = {};

    mainObj.forEach((val, index) => {
      totalUntung += val.untung;
      totalModal += val.modal;
      totalHasilJual += val.hasilJual;

      booksProb[index] = val.persentaseProdukTerlaris;

      bookInfo[val.bookName] = {};
      bookInfo[val.bookName]["namaPenulis"] = val.writerName;
      bookInfo[val.bookName]["persentaseTerjual"] =
        val.persentaseProdukTerlaris;
    });

    // totalKeuntungan
    dataPenjualanObj["totalKeuntungan"] = Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    })
      .format(totalUntung)
      .split(",")[0];

    // totalModal
    dataPenjualanObj["totalModal"] = Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    })
      .format(totalModal)
      .split(",")[0];

    // persentaseKeuntungan
    let persentaseKeuntungan =
      ((totalHasilJual - totalModal) / totalModal) * 100;

    dataPenjualanObj["persentaseKeuntungan"] =
      String(Math.round(persentaseKeuntungan)) + "%";

    // produkBukuTerlaris
    let highBookProb = booksProb.sort().reverse()[0];

    mainObj.forEach((val) => {
      if (highBookProb === val.persentaseProdukTerlaris) {
        dataPenjualanObj["produkBukuTerlaris"] = val.bookName;
      }
    });

    // penulisTerlaris
    countPenulis = {};
    countPersentage = {};
    let res = 0;
    let choosenWriter;

    Object.keys(bookInfo).map((val) => {
      if (!countPenulis[bookInfo[val]["namaPenulis"]]) {
        countPenulis[bookInfo[val]["namaPenulis"]] = 1;
        countPersentage[bookInfo[val]["namaPenulis"]] =
          bookInfo[val]["persentaseTerjual"];
      } else {
        countPenulis[bookInfo[val]["namaPenulis"]] += 1;
        countPersentage[bookInfo[val]["namaPenulis"]] +=
          bookInfo[val]["persentaseTerjual"];
      }
    });

    Object.keys(countPenulis).map((val) => {
      tmp = countPersentage[val] / countPenulis[val];

      if (res < tmp) {
        choosenWriter = val;
        res = tmp;
      }
    });

    dataPenjualanObj["penulisTerlaris"] = choosenWriter;

    return { dataPenjualanObj, bookInfo, countPenulis, countPersentage };
  } else if (typeof data === "number" || typeof data === "string") {
    return "Error: Invalid data type";
  } else {
    return "Error: No parameter included";
  }
};

console.log(getInfoPenjualan(dataPenjualanNovel));
