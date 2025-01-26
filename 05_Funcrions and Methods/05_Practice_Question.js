// Practice Question

// For a given array of numbers, print the square of each value using the forEach loop

let nums = [1, 2, 3, 4, 5];

function numSquare (num) {
    console.log(num * num);
}

nums.forEach(numSquare);

// nums.forEach((num) => {
//     console.log(num * num);
// })