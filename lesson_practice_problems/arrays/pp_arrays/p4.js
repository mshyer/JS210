const simpleJoin = function(arr) {
  let join_string = '';
  for (let idx = 0; idx < arr.length; idx++) {
    stringIt = String(arr[idx]);
    join_string += stringIt;
  }

  return join_string;
}

let someArr = [1, 'a', null];

console.log(simpleJoin(someArr));
