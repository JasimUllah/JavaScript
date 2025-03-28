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
// let div = document.querySelector("div");
// console.dir(div);

// let id = div.getAttribute("id");
// console.log(id);

// setting attributes
// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "myClass"));

// first create a button
let newBtn = document.createElement("button");
newBtn.innerText = "Click Here";
console.log(newBtn);

// insert button after div
// let div = document.querySelector("div");
// div.append(newBtn);

// insert button before div
// let div = document.querySelector("div");
// div.prepend(newBtn);

// insert button before div
// let div = document.querySelector("div");
// div.before(newBtn);

// insert button after div
// let div = document.querySelector("div");
// div.after(newBtn);

// remove button before div
let div = document.querySelector("div");
div.remove(newBtn);