// Question # 1:
// Create a new button element. Give it a text "click me", 
// background color of re and text color of white

let btn = document.createElement("button");
btn.innerText = "click me";
btn.style.color = "white";
btn.style.backgroundColor = "red";

document.querySelector("body").prepend(btn);

// ================================================================
// Question 2:
// create a <p> tag in html, give it a class and some styling
// now create a new class in css and try to append this class to the <p>

let p = document.querySelector("p");
p.classList.add("newClass");