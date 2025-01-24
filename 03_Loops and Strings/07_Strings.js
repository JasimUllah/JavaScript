// Strings

let str = "Jasim Ullah";
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