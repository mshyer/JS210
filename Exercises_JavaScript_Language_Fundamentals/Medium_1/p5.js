var counter = 5;
var rate = 3;
console.log('The total value is ' + String(counter * rate));

function counter(count) {
  // ...
}


//1: the total value is 15
//2: the total value is NaN
//3: the total value is 15
//4: SyntaxError counter has already been defined
