function convertToRomanNumerals(num) {
  let result = '';
  let numCopy = num;

  if (numCopy >= 10) {
    const tens = Math.floor(numCopy / 10);
    numCopy -= tens * 10;

    if (tens === 3) {
      result += 'XXX';
    } else if (tens === 2) {
      result += 'XX';
    } else if (tens === 1) {
      result += 'X';
    }
  }

  if (numCopy >= 9) {
    result += 'IX';
  } else if (numCopy >= 5) {
    result += 'V';
    numCopy -= 5;
  }

  if (numCopy >= 4) {
    result += 'IV';
  } else if (numCopy >= 1) {
    result += 'I';
  }

  return result;
}

// eslint-disable-next-line no-console
console.log(convertToRomanNumerals(2));
// eslint-disable-next-line no-console
