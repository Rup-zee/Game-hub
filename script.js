// Game Hub shared score
let totalScore = parseInt(localStorage.getItem("totalScore")) || 0;
document.getElementById("score").textContent = totalScore;

// Update score function
function updateScore(result) {
    if(result === "win") totalScore += 10;
    else if(result === "tie") totalScore += 5;
    else if(result === "lose") totalScore -= 5;

    document.getElementById("score").textContent = totalScore;
    localStorage.setItem("totalScore", totalScore);
}

// Load selected game into iframe
function loadGame(gamePath) {
    document.getElementById("game-container").innerHTML =
        `<iframe src="${gamePath}" frameborder="0" style="width:100%; height:500px; border-radius:10px;"></iframe>`;
}
