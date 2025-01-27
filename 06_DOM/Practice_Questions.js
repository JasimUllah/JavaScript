// Quesrion 1

// let h2 = document.body.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerHTML = h2.innerText + "from Apna College students";

// Question 2

let divs = document.querySelectorAll(".box");

let idx = 1;
for (let div of divs) {
    div.innerText = `new div ${idx}`;
    idx++;
}

// divs[0].innerHTML = "New div 1"
// divs[1].innerHTML = "New div 2"
// divs[2].innerHTML = "New div 3"