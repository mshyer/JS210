let rlSync = require('readline-sync');

let n1 = Number(rlSync.question('Enter the first number: '));
let n2 = Number(rlSync.question('Enter the second number: '));

console.log(`${n1} + ${n2} = ${n1 + n2}`);
