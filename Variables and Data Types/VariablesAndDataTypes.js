FullName = "Jasim Ullah";   // Storing a string in "fullName" variable
console.log(FullName);

age = 24;   // Storing a vlaue in "fullName" variable
console.log(age);

x = null;   // Special value meaning nothing
console.log(x);

y = undefined;  // Don't know what is stored inside the variable
console.log(y);
console.log("\n");
console.log("\n");


// The best practice to declare a variable is to use these keyword before declaring

// 1. var: Variable can be re-declared and updated (A golbal scope varaible)
// 2. let: Variable cannot be re-declared but can be updated (A block scope variable)
//  3. const: Variable cannot be re-declard or updated (A block scope varable)

console.log("Using Keywords");
let fullName = "Jasim U";
console.log(fullName);

const PI = 3.14;    // const must be initialized it cannot be empty
let r = 15;
circleArea = PI * r;
console.log(circleArea);