const reverseArr = function(arr) {
  let reversed = [];
  for (let idx = (arr.length - 1); idx >= 0; idx--) {
    reversed.push(arr[idx]);
  }

  return reversed;
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(reverseArr(arr));
