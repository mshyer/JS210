let rlSync = require('readline-sync');
const SQ_METERS_TO_FEET = 10.7639;

let unit;
while (unit !== 'm' && unit !== 'ft') {
  console.log('Please enter the unit type (\'m\' or \'ft\')');
  unit = rlSync.prompt();
}
console.log(`You selected Unit: ${unit}`);
console.log('Please enter the length: ');
let length = rlSync.prompt();
length = parseInt(length, 10);

console.log('Please enter the width: ');
let width = rlSync.prompt();
width = parseInt(width, 10);

let area = length * width;
//console.log(`the area in sq meters is ${area}`);
//console.log(`the area in sq feet is ${(area * SQ_METERS_TO_FEET).toFixed(2)}`);
//
let altUnit = (unit === 'm' ? 'ft' : 'm');
let altArea = (unit === 'm' ? (area * SQ_METERS_TO_FEET) : (area / SQ_METERS_TO_FEET));
console.log(`The area is ${area} sq ${unit} (${altArea} sq ${altUnit})`);
