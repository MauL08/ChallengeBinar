checkEmail = (email) => {
  const emailRegEx = /[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-z]{2}/;

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

console.log(checkEmail("apranata@binar.co.id"));
console.log(checkEmail("apranata@binar.com"));
console.log(checkEmail("apranata@binar"));
console.log(checkEmail("apranata")); // Error karena format email tidak lengkap
// console.log(checkTypeNumber(checkEmail(3322))); // Erro karena tidak ada fungsi checkTypeNumber
console.log(checkEmail()); // Error karena parameternya kosong
