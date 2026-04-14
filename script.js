// This file contains the JavaScript code that implements the game logic for the simulation game.

let gameInterval;
let score = 0;
let isGameRunning = false;

function startGame() {
    score = 0;
    isGameRunning = true;
    document.getElementById('score').innerText = `Score: ${score}`;
    gameInterval = setInterval(updateGame, 1000);
}

function updateGame() {
    // Game logic to update the state and visuals
    score++;
    document.getElementById('score').innerText = `Score: ${score}`;
}

function stopGame() {
    clearInterval(gameInterval);
    isGameRunning = false;
    alert(`Game Over! Your final score is: ${score}`);
}

document.getElementById('startButton').addEventListener('click', startGame);
document.getElementById('stopButton').addEventListener('click', stopGame);