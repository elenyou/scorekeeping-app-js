const p1Button = document.getElementById('p1');
const p2Button  = document.getElementById('p2');
const p1Display = document.getElementById('p1Display');
const p2Display = document.getElementById('p2Display');
const resetButton = document.getElementById('reset');
const numInput = document.querySelector('input');
const winningScoreDisplay = document.querySelector('p span');
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winningScore = 5;

p1Button.addEventListener("click", function () {
    if(!gameOver) {
        p1Score++;
        if(p1Score === winningScore) {
            p1Display.classList.add('winner');
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function () {
    if(!gameOver) {
        p2Score++;
        if(p2Score === winningScore) {
            p2Display.classList.add('winner');
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});

resetButton.addEventListener("click", function () {
    reset();
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove('winner');
    p2Display.classList.remove('winner');
    gameOver = false;
}

numInput.addEventListener("change", function () {
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});

