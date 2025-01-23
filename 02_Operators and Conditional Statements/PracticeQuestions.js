// Question # 01:
// Get user to input a number using prompt("Enter a number").
// Check if the number is a multiple of 5 or not.

// let num = prompt("Enter a number");

// if (num % 5 === 0) {
//     console.log(num, "is a multiple of 5");
// }
// else {
//     console.log(num, "is not a multiple of 5");
// }

// =============================================================================

// Question # 02:
// Write a code which can give grades to students according to their score

let score = prompt("Enter your score: ");

// if (score >=90 && score <= 100) {
//     console.log("Your grade is A");
// } else if (score >= 70 && score <= 89) {
//     console.log("Your grade is B");
// } else if (score >= 60 && score <= 69) {
//     console.log("Your grade is C");
// } else if (score >= 50 && score <= 59) {
//     console.log("Your grade is D");
// } else if (score >= 0 && score <= 49) {
//     console.log("Your failed this course");
// } else {
//     console.log("You entered an invalid number");
// }

let grade;

if (score >=90 && score <= 100) {
    grade = "A";
} else if (score >= 70 && score <= 89) {
    grade = "B";
} else if (score >= 60 && score <= 69) {
    grade = "C";
} else if (score >= 50 && score <= 59) {
    grade = "D";
} else if (score >= 0 && score <= 49) {
    grade = "F";
} 

console.log("Your grade is:", grade);