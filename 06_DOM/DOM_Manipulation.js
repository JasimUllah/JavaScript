// Accessing elements or tags of html by id
// let heading = document.getElementById("heading"); // Returns the value of h1
// console.dir(heading);

// Accessing elements or tags of html by id
// let headings = document.getElementsByClassName("heading-class"); // Returns the value of h1
// console.dir(headings);

// Accessing by tags
// let paras = document.getElementsByTagName("p");
// console.dir(paras);

// Accessing by querySelector, this will return the first element
// let firstelement = document.querySelector("p");
// console.dir(firstelement);

// Accessing by querySelectorAll, this will return all the element
// let allelements = document.querySelectorAll("p");
// console.dir(allelements);



// Part 2 DOM Manipulation
// Accessing attrbutes of tags
let div = document.querySelector("div");
console.dir(div);

let id = div.getAttribute("id");
console.log(id);

// setting attributes
let para = document.querySelector("p");
console.log(para.setAttribute("class", "myClass"));