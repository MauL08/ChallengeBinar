isValidPassword = (givenPassword) => {
  // const passRegEx = /[A-Z]+[a-z]+[0-9]/; // Sesuai aturan, tapi harus berurut
  const passRegEx = /[A-Za-z0-9]/; // Sesuai aturan, tapi tidak berurut (bebas)

  if (typeof givenPassword === "string") {
    if (givenPassword.length < 8) {
      return "Error: Password length less than 8 ";
    } else {
      res = passRegEx.test(givenPassword);
      return res;
    }
  } else if (
    typeof givenPassword === "object" ||
    typeof givenPassword === "number"
  ) {
    return "Error: Invalid data type";
  } else {
    return "Error: No parameter included";
  }
};

console.log(isValidPassword("mEONG2022"));
