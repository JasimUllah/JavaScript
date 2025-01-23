// Comparison Operators

let a = 5;
let b = 2;
// let b = "5";

console.log("a == b", a == b);  // True or false -> False
console.log("a != b", a != b);  // True or false -> True

// If we have two same values a = b one is a number and the other is a sttring
// the javascript will first convert that string to a number and then compare
// and we will get the true value

console.log("a == b", a == b);  // True or false -> True

// To prohibit this we can we a strict version of comparison operators
// this will also check the string

console.log("a === b", a === b);  // True or false -> False
console.log("a !== b", a !== b);  // True or false -> False

console.log("a > b", a > b);  // True or false -> True
console.log("a < b", a < b);  // True or false -> False
console.log("a >= b", a >= b);  // True or false -> True
console.log("a <= b", a <= b);  // True or false -> False