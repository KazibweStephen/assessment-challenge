const convertNumberToWords = (userInput) => {
  if( userInput !== undefined && !isNaN(userInput)) {
    return `We are changing ${userInput} to words`;
  }
  return "Please enter a number!";
}

module.exports = convertNumberToWords;
