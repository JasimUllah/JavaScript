let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// }

// let box = document.querySelector(".box");
// box.onmouseover = () => {
//     console.log("You are hovering over box");
// };

// Event Object
// btn1.onclick = (evnt) => {
//     console.log(evnt);
//     console.log(evnt.type);
//     console.log(evnt.target);
// };

// Adding Event listners
btn1.addEventListener("click", () => {
    console.log("btn1 was clicked - handler 1");
});

btn1.addEventListener("click", () => {
    console.log("btn1 was clicked - handler 2");
});

const handler3 = () => {
    console.log("btn1 was clicked - handler 3");
};

btn1.addEventListener("click", () => {
    console.log("btn1 was clicked - handler 4");
});

// Removing event listner
btn1.removeEventListener("click", handler3);