const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let gameInterval;

const paddle = new Paddle(10, 75);
const ball = new Ball(Math.floor(Math.random() * canvas.width), canvas.height - 30, 2, -2);

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.clientHeight);
    ball.draw(ctx);
    paddle.draw(ctx);
    ball.update(gameInterval);
    paddle.update();
}

gameInterval = setInterval(draw, 10);