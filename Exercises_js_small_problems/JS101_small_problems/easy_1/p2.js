const rlSync = require('readline-sync');
let start = Number(rlSync.question('please enter the starting number: '));
let end = Number(rlSync.question('please enter the last number: '));
//
//let i = start;
//while (i < end) {
//  console.log(i);
//  i += 2;
//}
//
for (let i = start; i < end; i+= 2) {
  console.log(i);
}
