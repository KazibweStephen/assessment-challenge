const under20 = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];

const multiples10 = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function convertNumberToWords(number) {
  let remainder = 0;
  let word;

  // add words from previous run
  let words = arguments[1];

  // check if its a number
  if(number === undefined || isNaN(number)) {
    return "Please enter a number!";
  }

  // check for negative numbers 
  if (number < 0) {
    return 'Sorry, We don\'t do negative numbers.'
  }

  // Check if its greater than a million
  if (number > 1000000) {
    return 'Wow, That\'s a big number.'
  }

  // Check if number is zero
  // if it's first run i.e no words added yet return zero else
  // return array of words as string
  if (number === 0) {
      return !words ? 'zero' : words.join(' ').replace(/,$/, '');
  }

  // for first run, set words to empty array
  if (!words) {
      words = [];
  }

  // convert values less than 20
  if (number < 20) {
    word = under20[number];
  }

  // converting values below 100
  else if (number < 100) {
    remainder = number % 10;
    word = multiples10[Math.floor(number / 10)];

    // if remainder, convert using under20, then reset remainder.
    if (remainder) {
        word += ` ${under20[remainder]}`;
        remainder = 0;
    }
  }

  // converting hundreds
  else if (number < 1000) {
    remainder = number % 100;
    word = `${convertNumberToWords(Math.floor(number / 100))} hundred`;
  }

  // converting thousands
  else if (number < 1000000) {
    remainder = number % 1000;
    word = `${convertNumberToWords(Math.floor(number / 1000))} thousand,`;
  }

  // converting a million
  else if (number == 1000000) {
    word = `${convertNumberToWords(Math.floor(number / 1000000))} million.`;
  }

  // add converted word to words array
  words.push(word);

  // call convert function with remainder and converted words.
  return convertNumberToWords(remainder, words);
}

module.exports = convertNumberToWords;
