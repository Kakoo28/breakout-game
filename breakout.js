const auto = document.getElementById('select-auto'); auto.checked = false;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let gameInterval;
let score = 0;
let level = 1;

const PADDLE = new Paddle(10, 120);
const BALL = new Ball(Math.floor(Math.random() * canvas.width), canvas.height - 30, 2, -2);
const BRICK_FIELD = new BrickField(5, 16, 75, 20, 10, 30, 30);


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.clientHeight);
    BRICK_FIELD.draw(ctx);
    BALL.draw(ctx);
    PADDLE.draw(ctx);
    BALL.update(gameInterval);
    PADDLE.update();
    BRICK_FIELD.collisionDetection();
    if (auto.checked) PADDLE.follow();
}

gameInterval = setInterval(draw, 10);