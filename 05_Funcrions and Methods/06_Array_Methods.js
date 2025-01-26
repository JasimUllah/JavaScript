let nums = [1, 2, 3, 4, 5, 6];


// map method
let newArr = nums.map((val) => {
    return val;
})
console.log(newArr);

// filter method
let evenArr = nums.filter((val) => {
    return val % 2 === 0;
})
console.log(evenArr);

// reduce method -> return a single value
let sum = nums.reduce((pre, cur) => {
    return pre + cur;
})
console.log(sum);