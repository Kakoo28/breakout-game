class Paddle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.x = (canvas.width - this.width) / 2;

        this.speed = 6;

        this.controls = new Controls();
    }
    follow() {
        this.x = BALL.x - this.width/2
    }
    update() {
        if (this.controls.left) {
            this.x = Math.max(this.x - this.speed, 0);
        }
        if (this.controls.right) {
            this.x = Math.min(this.x + this.speed, canvas.width - this.width);
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this.x, canvas.height - this.height, this.width, this.height);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }
}