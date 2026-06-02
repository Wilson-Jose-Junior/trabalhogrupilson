const target = document.getElementById("target");
const game = document.getElementById("game");
const scoreText = document.getElementById("score");

let score = 0;
let highScore = 0;
let timeLeft = 30;
let moveSpeed = 1000;

const timer = document.createElement("p");
timer.textContent = "Tempo: 30";
document.body.insertBefore(timer, game);

function moveTarget() {
    const maxX = game.clientWidth - target.offsetWidth;
    const maxY = game.clientHeight - target.offsetHeight;

    target.style.left = Math.random() * maxX + "px";
    target.style.top = Math.random() * maxY + "px";
}

target.addEventListener("click", () => {
    score++;
    scoreText.textContent = `Pontos: ${score}`;

    if (score > highScore) {
        highScore = score;
    }

    // aumenta a dificuldade
    if (moveSpeed > 300) {
        moveSpeed -= 20;
    }

    moveTarget();
});

moveTarget();

let mover = setInterval(moveTarget, moveSpeed);

const gameTimer = setInterval(() => {
    timeLeft--;

    timer.textContent = `Tempo: ${timeLeft}`;

    clearInterval(mover);
    mover = setInterval(moveTarget, moveSpeed);

    if (timeLeft <= 0) {
        clearInterval(gameTimer);
        clearInterval(mover);

        target.style.display = "none";

        alert(
            `🎮 Fim de jogo!\n\n` +
            `Pontuação: ${score}\n` +
            `Recorde: ${highScore}`
        );
    }
}, 1000);