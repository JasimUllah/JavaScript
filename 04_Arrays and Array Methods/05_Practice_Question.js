let arr = ["Blooberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
console.log(arr);

// Remove the first company from the array

let remove = arr.shift("Bloomberg");
console.log("Removed company is:", remove);
console.log(arr);

// Replace Uber with Ola

let replace = arr.splice(1, 1, "Ola");
console.log("Replaced company is:", replace);
console.log(arr);

// Add Amazon at the end

let add = arr.push("Amazon");
console.log("Added company is:", add);
console.log(arr);