function shortLongShort(str1, str2) {
  if (str1.length > str2.length) {
    [str1, str2] = [str2, str1];
  }
  return str1 + str2 + str1;
}

console.log(shortLongShort('abc', 'defgh'));
console.log(shortLongShort('abcde', 'fgh'));
console.log(shortLongShort('', 'xyz'));
