// Question
// Create a toggle button that changes the screen to dark-mode when clicked & 
// light-mode when clicked again

// Toggling -> Switching between two states

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let curMode = "light";

modeBtn.addEventListener("click", () => {
    if (curMode === "light") {
        curMode = "dark";
        // document.querySelector("body").style.backgroundColor = "#1D1616";
        
        // Accessing by classes
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else {
        curMode = "light";
        // document.querySelector("body").style.backgroundColor = "#1D1616";

        // Accessing by classes
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(curMode);
})