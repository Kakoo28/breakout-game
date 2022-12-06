class BrickField {
    constructor(rowCount, columnCount, width = 75, height = 20, padding= 10, offsetTop = 30, offsetLeft = 30) {
        this.rowCount = rowCount;
        this.columnCount = columnCount;
        this.width = width;
        this.height = height;
        this.padding = padding;
        this.offsetTop = offsetTop;
        this.offsetLeft = offsetLeft;

        this.x = 0;
        this.y = 0;

        this.bricks = [];
        this.#setBricks();
    }
    #setBricks() {
        for (let c = 0; c < this.columnCount; c++) {
            this.bricks[c] = [];
            for (let r = 0; r < this.rowCount; r++) {
                this.bricks[c][r] = { x: 0, y: 0, status: 1};
            }
        }
    }

    collisionDetection() {
        {
            for (let c = 0; c < this.columnCount; c++) {
                for (let r = 0; r < this.rowCount; r++) {
                    const b = this.bricks[c][r];
                    if (BALL.x > b.x &&
                        BALL.x < b.x + this.width &&
                        BALL.y > b.y &&
                        BALL.y < b.y + this.height
                    ) {
                        BALL.dy = -BALL.dy;
                        b.status = 0;
                    }
                }
            }
        }
    }

    draw(ctx) {
        for (let c = 0; c < this.columnCount; c++) {
            for (let r = 0; r < this.rowCount; r++) {
                if (this.bricks[c][r].status === 1) {
                    this.x = c * (this.width + this.padding) + this.offsetLeft;
                    this.y = r * (this.height + this.padding) + this.offsetTop;
                    this.bricks[c][r].x = this.x;
                    this.bricks[c][r].y = this.y;
                    ctx.beginPath();
                    ctx.rect(this.x, this.y, this.width, this.height);
                    ctx.fillStyle = "#0095DD";
                    ctx.fill();
                    ctx.closePath();
                }
            }
        }
    }
}