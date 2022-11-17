let rlSync = require('readline-sync');

let name = rlSync.question('What is your name? ');
if (/.*!$/.test(name)) {
  console.log(`HELLO ${name.toUpperCase().slice(0, name.length - 1)}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}`);
}
