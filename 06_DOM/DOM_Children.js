// DOM Nodes
// 1. text node
// 2. comment node
// 3. elements node

// This will return the text
// console.dir(document.body.firstChild.nodeName);

// This wil return the first child of the body (DIV)
// let text = document.body.firstElementChild.tagName;
// console.dir(text);

// This will return all the childrens of the body tag
// let childrens = document.body.children;
// console.dir(childrens);

// This will return the 4th child of the body tag
let child = document.body.children[4];
console.dir(child);