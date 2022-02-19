getAngkaTerbesarKedua = (data) => {
  if (typeof data === "object") {
    sortedNumbers = data.sort().reverse();
    return sortedNumbers[1];
  } else if (typeof data === "number" || typeof data === "string") {
    return "Error: Invalid data type";
  } else {
    return "Error: No parameter included";
  }
};

const dataNumbers = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataNumbers));
