// Logical Operators

let a = 5;
let b = 8;

let condition1 = a < b; // True
let condition2 = a === 5; // True
console.log("condition1 && condition2 =", condition1 && condition2);    // Logical AND

let condition3 = a > b; // False
let condition4 = a === 5; // True
console.log("condition3 && condition4 =", condition3 && condition4);    // Logical AND

console.log("a === 5 || a > b =", a === 5 || a > b);    // Logical OR

console.log("!(a === b) =", !(a === b));    // Logical NOT
console.log("!(a < b) =", !(a < b));    // Logical NOT