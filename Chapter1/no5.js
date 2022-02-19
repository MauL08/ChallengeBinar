getSplitName = (personName) => {
  nameObj = {
    firstName: "",
    middleName: "",
    lastName: "",
  };

  if (typeof personName === "string") {
    nameValue = personName.split(" ");

    for (let i = 0; i < nameValue.length; i++) {
      if (nameValue.length > 3) {
        return "Error : This function is only for 3 characters name";
      } else {
        if (nameValue.length === 1) {
          nameObj["firstName"] = nameValue[0];
          break;
        } else if (nameValue.length === 2) {
          nameObj["firstName"] = nameValue[0];
          nameObj["lastName"] = nameValue[1];
        } else {
          nameObj["firstName"] = nameValue[0];
          nameObj["middleName"] = nameValue[1];
          nameObj["lastName"] = nameValue[2];
        }
      }
    }

    return nameObj;
  } else if (
    typeof givenNumber === "object" ||
    typeof givenNumber === "number"
  ) {
    return "Error: Invalid data type";
  } else {
    return "Error: No parameter included";
  }
};

console.log(getSplitName("Aurora Yuri Tunip"));
