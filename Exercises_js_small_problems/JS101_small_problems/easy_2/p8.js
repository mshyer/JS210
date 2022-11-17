const oddities = function(arr) {
  let odd_idx_elements = [];
  for (let idx = 0; idx < arr.length; idx++) {
    if (idx % 2 === 0) {
      odd_idx_elements.push(arr[idx]);
    }
  }
  return odd_idx_elements;
}

const evenities = function(arr) {
  return arr.filter((ele) => arr.indexOf(ele) % 2 === 1);
}
//console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
//console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
//console.log(oddities(["abc", "def"])); // logs ['abc']
//console.log(oddities([123])); // logs [123]
//console.log(oddities([])); // logs []

console.log(evenities([0, 1, 2, 3, 4, 5, 6]));
console.log(evenities(['Barbra', 'Streisand']));
