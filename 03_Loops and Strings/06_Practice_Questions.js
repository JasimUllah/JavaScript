// Question # 01:
// Print all even numbers from 0 to 100

// let i = 0;
// let n = 100;

// while (i <= n) {
//     if (i%2 === 0) {
//         console.log("even number is =", i);
//     }
//     i++;
// }

// =========================================================================

// Question # 02:
// Create a game where you start with anu random game number. Ask the user to
// keep guessing the game number until the user enters correct number

let num = 25;

let guessNumber = prompt("Guess a number:");

while (guessNumber != num) {
    guessNumber = prompt("You entered a wrong number. Gues again: ");
}
console.log("Congrats! You enterd the correct number");