let wins = 0;
let losses = 0;
let ties = 0;

const buttons = document.querySelectorAll("button");
const resultDiv = document.getElementById("result");
const finalDiv = document.getElementById("final");

const winsEl = document.getElementById("wins");
const lossesEl = document.getElementById("losses");
const tiesEl = document.getElementById("ties");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    playRound(playerChoice);
  });
});

function playRound(choice) {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomIndex];

  let resultText = `Computer chose: ${computerChoice}. `;

  if (computerChoice === choice) {
    resultText += "It's a tie!";
    ties++;
  } else if (
    (choice === "paper" && computerChoice === "rock") ||
    (choice === "scissors" && computerChoice === "paper") ||
    (choice === "rock" && computerChoice === "scissors")
  ) {
    resultText += `You win! ${capitalize(choice)} beats ${computerChoice}.`;
    wins++;
  } else {
    resultText += `You lose! ${capitalize(computerChoice)} beats ${choice}.`;
    losses++;
  }

  updateScore(resultText);
}

function updateScore(text) {
  resultDiv.textContent = text;
  winsEl.textContent = wins;
  lossesEl.textContent = losses;
  tiesEl.textContent = ties;

  if (wins + losses + ties === 5) {
    if (wins > losses) {
      finalDiv.textContent = "🎉 You’re the overall winner!";
    } else if (losses > wins) {
      finalDiv.textContent = "😢 You lost to the computer!";
    } else {
      finalDiv.textContent = "🤝 It’s a tie overall!";
    }

    // Disable buttons
    buttons.forEach(btn => btn.disabled = true);
  }
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
