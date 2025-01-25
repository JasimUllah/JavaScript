// Question # 01:
// Find the average of marks that student obtained

let marks = [92, 44, 61,77, 98];

let sum = 0;

for (let val of marks) {
    sum += val
}
let avg = sum / marks.length;
console.log(avg);
console.log("\n");

// ===================================================================================

// Question # 02:
// For a given array with prices of 5 items [250, 645, 300, 900, 50]. All items have an
// offer of 10% OFF. Change the array to store the final price after applying offer

let items = [250, 645, 300, 900, 50];

// let i = 0;

// for (let val of items) {
//     let off10 = val / 10;
//     items[i] = items[i] - off10;
//     console.log(items[i]);
//     i++;
// }

for (let inx = 0; inx < items.length; inx++) {
    let offer = items[inx] * 0.1;
    items[inx] -= offer;
}
console.log(items);