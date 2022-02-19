checkEmail = (email) => {
  const emailRegEx = /[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-z]/;

  if (typeof email === "string") {
    res = emailRegEx.test(email);
    if (res) {
      return "VALID";
    } else {
      return "INVALID";
    }
  } else if (typeof email === "object" || typeof email === "number") {
    return "Error: Invalid data type";
  } else {
    return "Error: No parameter included";
  }
};

console.log(checkEmail("apranata@binar.co.id")); // Valid
console.log(checkEmail("apranata@binar.com")); // Valid
console.log(checkEmail("apranata@binar")); // Invalid
console.log(checkEmail("apranata")); // Invalid
console.log(checkTypeNumber(checkEmail(3322))); // Error karena tidak ada fungsi checkTypeNumber
console.log(checkEmail()); // Error karena parameternya kosong
