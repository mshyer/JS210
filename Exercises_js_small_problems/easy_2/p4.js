const multiply = (a, b) => a * b;
const square = (a) => multiply(a, a);

//console.log(square(5) === 25); // logs true
//console.log(square(-8) === 64); // logs true

function powerTo(n, power) {
  result = 1;
  for (let i = 1; i <= power; i++) {
    result = multiply(result, n);
  }
  return result;
}

console.log(powerTo(3, 3));
console.log(powerTo(3, 0));
console.log(powerTo(10, -1));
    
