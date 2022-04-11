const getSplitName = (personName) => {
  let nameObj = {
    firstName: '',
    middleName: '',
    lastName: '',
  };

  if (typeof personName === 'string') {
    let nameValue = personName.split(' ');

    for (let i = 0; i < nameValue.length; i++) {
      if (nameValue.length > 3) {
        return 'Error : This function is only for 3 characters name';
      } else {
        if (nameValue.length === 1) {
          nameObj['firstName'] = nameValue[0];
        } else if (nameValue.length === 2) {
          nameObj['firstName'] = nameValue[0];
          nameObj['lastName'] = nameValue[1];
        } else {
          nameObj['firstName'] = nameValue[0];
          nameObj['middleName'] = nameValue[1];
          nameObj['lastName'] = nameValue[2];
        }
      }
    }

    return nameObj;
  } else if (typeof personName === 'object' || typeof personName === 'number') {
    return 'Error: Invalid data type';
  } else {
    return 'Error: No parameter included';
  }
};

// console.log(getSplitName("Aldi Daniela Pratama"));
// console.log(getSplitName("Dwi Kuncoro"));
// console.log(getSplitName("Aurora"));
// console.log(getSplitName("Aurora Aureliya Sukma Darma"));
// console.log(getSplitName(0));

module.exports = getSplitName;
