const greetings = function(nameArr, infoObj) {
  let name = nameArr.join(' ');
  let title = infoObj['title'];
  let occupation = infoObj['occupation'];
  return `Hello, ${name}! Nice to have a ${title} ${occupation} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.
