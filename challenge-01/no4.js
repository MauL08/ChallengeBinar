const isValidPassword = (givenPassword) => {
  const passRegEx = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.{8})/;

  if (typeof givenPassword === "string") {
    let res = passRegEx.test(givenPassword);
    return res;
  } else if (
    typeof givenPassword === "object" ||
    typeof givenPassword === "number"
  ) {
    return "Error: Invalid data type";
  } else {
    return "Error: No parameter included";
  }
};

console.log(isValidPassword("Meong2021"));
console.log(isValidPassword("meong2021"));
console.log(isValidPassword("@eong"));
console.log(isValidPassword("Meong2"));
console.log(isValidPassword(0));
console.log(isValidPassword());
