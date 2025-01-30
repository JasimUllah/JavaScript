let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// }

// Event Object
btn1.onclick = (evnt) => {
    console.log(evnt);
    console.log(evnt.type);
    console.log(evnt.target);
};

let box = document.querySelector(".box");
box.onmouseover = () => {
    console.log("You are hovering over box");
};