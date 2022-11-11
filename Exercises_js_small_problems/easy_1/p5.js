let rlSync = require('readline-sync');
let amount = parseFloat(rlSync.question('What is the bill? '));
let tip_percentage = parseFloat(rlSync.question('What is the tip rate? '));

let tip = ((tip_percentage / 100) * amount);
let total = (amount + tip);

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);
