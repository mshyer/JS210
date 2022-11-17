function stringToInteger(string) {
  const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  let digits = [];
  let scale = string.length
  result_number = 0;
  for (let idx = 0; idx < string.length; idx++) {
    let current_number = (NUMBERS.indexOf(string[idx]));
    result_number += (current_number * (10 ** (scale - 1)));
    scale -= 1;
  }
  return result_number;
}

function stringToSignedInteger(string) {
  switch (string[0]) {
    case '-':
      return -stringToInteger(string.slice(1));
    case '+':
      return stringToInteger(string.slice(1));
    default:
      return stringToInteger(string);
  }
}
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("570") === 570); // logs true
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
