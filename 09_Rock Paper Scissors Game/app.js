let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

// Function to generate a random number for computer
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  console.log("Game was a draw");
};

// Function for user to select a choice
const playGame = (userChoice) => {
  console.log("Choice was clicked", userChoice);
  const compChoice = getCompChoice();
  console.log("comp choice = ", compChoice);

  // Draw condition
  if (userChoice === compChoice) {
    drawGame();
  }
};

// Dsiplaying the clicked choice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
