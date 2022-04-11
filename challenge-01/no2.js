const checkTypeNumber = (givenNumber) => {
  if (typeof givenNumber === 'number') {
    if (givenNumber % 2 === 0) {
      return 'GENAP';
    } else {
      return 'GANJIL';
    }
  } else if (
    typeof givenNumber === 'object' ||
    typeof givenNumber === 'string'
  ) {
    return 'Error: Invalid data type';
  } else {
    return 'Error: Bro where is the parameter?';
  }
};

// console.log(checkTypeNumber(10)); // number
// console.log(checkTypeNumber(3)); // number
// console.log(checkTypeNumber('3')); // string
// console.log(checkTypeNumber({})); // object
// console.log(checkTypeNumber([])); // object
// console.log(checkTypeNumber()); // no parameter

module.exports = checkTypeNumber;
