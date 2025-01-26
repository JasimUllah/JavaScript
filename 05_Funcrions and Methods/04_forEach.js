// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function printValue(val) {
//     console.log(val);
// });

// arr.forEach((val) => {
//     console.log(val);
// });

let arr = ["isl", "psh", "sin"]

arr.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr);
});