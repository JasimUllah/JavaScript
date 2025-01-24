// Strings

let str = "Hello World!";
console.log(str);

// Printing total number of characters
str.length;
console.log(str.length)

// Accessing single index or character
console.log(str[4])

// ============================================================================

// Template Literals

let obj = {
    item: "pen",
    price: 10,
};

let output = `the cost of ${obj.item} is ${obj.price} rupees`;  // Template Literal
console.log(output);

// let sentence = `This is a special string`;
// console.log(sentence);
// console.log(typeof(sentence));

// ============================================================================

// Escape Characters

console.log("Hello\nWorld!");
console.log("Hello\tWorld!");

// ============================================================================

// String Methods

//  There are many string methods but few are the following

console.log(str.toUpperCase());     // Make all character Upper Cased

console.log(str.toLowerCase());     // Make all character Lower Cased

let str2 = "This is JavaScript Practice";
console.log(str2.trim());

console.log(str.slice(2, 8));

console.log(str.concat(str2));
console.log(str + str2);

console.log(str2.replace("JavaScript", "Python"));

console.log(str2.charAt(8));    // Character at index i