let apples = 3;
let bananas = 1;
let eitherOr = (bananas || apples);
let areEqual = (apples === bananas);
console.log(eitherOr);
console.log(areEqual);

if (apples === bananas) {
    console.log("the two values are strictly equal");
}  else {
    if (apples == bananas) {
    console.log("the two values are equal according to non-strict equality");
    } else {
        console.log("they are not equal");
    }
}


