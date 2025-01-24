// The for of loop checks the strings and arrays not objects

let str = "JavaScript";

let size = 0;

for (let val of str) {
    console.log("val =", val);
    size++;
}

console.log("Size is = ", size);