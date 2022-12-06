const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let gameInterval;

const PADDLE = new Paddle(10, 75);
const BALL = new Ball(Math.floor(Math.random() * canvas.width), canvas.height - 30, 2, -2);
const BRICK_FIELD = new BrickField(5, 15, 75, 20, 16, 30, 30);


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.clientHeight);
    BRICK_FIELD.draw(ctx);
    BALL.draw(ctx);
    PADDLE.draw(ctx);
    BALL.update(gameInterval);
    PADDLE.update();
    BRICK_FIELD.collisionDetection();
}

gameInterval = setInterval(draw, 10);