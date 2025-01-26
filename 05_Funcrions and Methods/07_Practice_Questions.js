// Question # 01
// We are given arry of marks of students. Filter out the marks of students that scoreed 90+

let marks = [92, 99, 87, 79, 98]

let topper = marks.filter((val) => {
    return val > 90;
})
console.log(topper);

// ====================================================================================

// Question # 02:
// Take a number n as input from a user. Create an array of numbers from 1 to n.
// Use the resuce method to calculate sum of all numbers in the array
// Use the reduce method to calculate product of all numbers in the array.

let n = prompt("Enter a number");
let arr = [];

for (let i = 1; i <= n; i++) {
    arr[i-1] = i;
}
console.log(arr);

let sum = arr.reduce((pre, cur) => {
    return pre + cur;
})
console.log("sum =", sum);

let product = arr.reduce((pre, cur) => {
    return pre * cur;
})
console.log("product or factorial =", product)