const getAngkaTerbesarKedua = (dataNumbers) => {
  if (typeof dataNumbers === 'object') {
    let sortedNumbers = dataNumbers.sort().reverse();
    return [...new Set(sortedNumbers)][1];
  } else if (
    typeof dataNumbers === 'number' ||
    typeof dataNumbers === 'string'
  ) {
    return 'Error: Invalid data type';
  } else {
    return 'Error: No parameter included';
  }
};

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

// console.log(getAngkaTerbesarKedua(dataAngka));
// console.log(getAngkaTerbesarKedua(0));
// console.log(getAngkaTerbesarKedua());

module.exports = getAngkaTerbesarKedua;
