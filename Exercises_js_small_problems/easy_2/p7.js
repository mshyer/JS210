function xor(arg1, arg2) {
  return ((Boolean(arg1) && !Boolean(arg2)) || Boolean(arg2) && !Boolean(arg1));
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);
