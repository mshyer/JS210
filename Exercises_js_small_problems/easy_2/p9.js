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

console.log(stringToInteger('4321'));
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

function hexadecimalToInteger(hex_string) {
  const HEX_DIGITS = 
    [
      '0', '1', '2', '3', '4', '5', '6',
      '7', '8', '9', 'A', 'B', 'C', 'D',
      'E', 'F'
    ];

  hex_string = hex_string.toUpperCase();

  let scale = hex_string.length;
  let digits_from_string = hex_string.split('');

  return (digits_from_string.reduce(function(accumulator, element) {
    let hex_value = HEX_DIGITS.indexOf(element);
    return (
      accumulator + (hex_value * (16 ** (scale -= 1)))
    );
  }, 0) //this zero sets the initial value for accumulator to zero
  );
}

console.log(hexadecimalToInteger('4D9f'));
console.log(hexadecimalToInteger('1000'));
console.log(hexadecimalToInteger('4D9f') === 19871);

                      
