const languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages);
// languages array
console.log(languages.length);
// 3
languages.length = 4;
console.log(languages);
// same array with one empty element
console.log(languages.length);
//4 

languages.length = 1;
console.log(languages);
// array only with javascript element
console.log(languages.length);
//1

languages.length = 3;
console.log(languages);
// same array with 2 empty elements after javascript
console.log(languages.length);
//3

languages.length = 1;
languages[2] = 'Python';
console.log(languages);
// array with javascript then 1 empty then python
console.log(languages[1]);
// undefined
console.log(languages.length);
// 3


