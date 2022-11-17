function multisum(n) {
  let numArr = Array.from({length: n}, (x, i) => i + 1);
  numArr = numArr.filter(num => num % 5 === 0 || num % 3 === 0);
  return numArr.reduce((acc, ele) => acc + ele);
}
console.log(multisum(20));
console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168
