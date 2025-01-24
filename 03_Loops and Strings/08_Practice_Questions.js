// Quesrion:

// Prompt the user to enter full name. Generate a username for them based on the input. 
// Start username with @, followes by their full name and ending with the fullname length

// let fullName = prompt("Enter Your Full name");
// // console.log(fullName);

// let noSpaces = `${fullName.split(" ").join("").toLowerCase()}`
// // console.log(noSpaces);

// // let len = fullName.length;
// // console.log(len);

// let username = `@${noSpaces}${fullName.length}`;
// console.log(username);

// ======================================================================================

let fullName = prompt("Enter your name without spaces and in lower case");

let userName = "@" + fullName + fullName.length;
console.log(userName);