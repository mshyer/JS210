const integerToString = function(num) {
  const DIGIT_STRINGS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let output_str = '';
  while (num > 0) {
    let chr_idx = (num % 10);
    num = Math.floor(num / 10);
    output_str += DIGIT_STRINGS[chr_idx];
  }
  return output_str.split('').reverse().join('');
}

const signedIntegerToString = function(num) {
  switch (Math.sign(num)) {
    case -1:
      return ('-' + integerToString(-num));
    case 1:
      return ('+' + integerToString(num));
    default:
      return '0';
  }
}


console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
