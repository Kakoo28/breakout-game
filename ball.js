class Ball {
    constructor(x, y, dx, dy) {
        this.x = x;
        this.y = y;
        this.dx = 4;
        this.dy = -4;

        this.radius = 10;
    }
    update(interval) {
        this.x += this.dx;
        this.y += this.dy;
        if (this.x + this.dx > canvas.width - this.radius || this.x + this.dx < this.radius) {
            this.dx = -this.dx;
        }
        if (this.y + this.dy < this.radius) {
            this.dy = -this.dy;
        } else if (this.y + this.dy > canvas.height - this.radius) {
            document.getElementById('alert').innerText = "GameOver";
            setTimeout(() => {
                document.location.reload();
            }, 2000);
            clearInterval(interval)
        }

        
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }
}