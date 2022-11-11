let rlSync = require('readline-sync');

let n;
while (!Number.isInteger(n) || n === 0) {
  n = rlSync.question('Please enter an integer greater than 0: ');
  n = parseFloat(n);
}

let operation;
while (operation !== 's' && operation !== 'p') {
  console.log('Enter "s" to compute the sum, or "p" to compute the product: ');
  operation = rlSync.prompt();
}

const addor = (accumulator, element) => accumulator + element;
const productor = (accumulator, element) => accumulator * element;
let numArr = Array.from({length: n}, (x, i) => i + 1);

let result = numArr.reduce(operation === 's' ? addor : productor);

console.log(result);
