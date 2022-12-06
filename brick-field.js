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
                if (Math.floor(Math.random() * (10 - 1) + 1) > 7) {
                    this.bricks[c][r] = {x: 0, y: 0, status: Math.floor(Math.random() * (4.4 - 2) + 2)};
                } else {
                    this.bricks[c][r] = { x: 0, y: 0, status: 1};
                }
            }
        }
    }

    collisionDetection() {
        {

            for (let c = 0; c < this.columnCount; c++) {
                for (let r = 0; r < this.rowCount; r++) {
                    const b = this.bricks[c][r];
                    if (BALL.x > b.x - BALL.radius + 1 &&
                        BALL.x < b.x + this.width + BALL.radius - 1 &&
                        BALL.y > b.y - BALL.radius + 1 &&
                        BALL.y < b.y + this.height + BALL.radius - 1 &&
                        b.status >= 1
                    ) {
                        BALL.dy = -BALL.dy;
                        b.status--;
                        score++;
                        document.getElementById('score').innerText = `${score}`;

                        let isEmpty = true;
                        for (let c = 0; c < this.columnCount; c++) {
                            for (let r = 0; r < this.rowCount; r++) {
                                const b = this.bricks[c][r];
                                if (b.status !== 0) {
                                    isEmpty = false;
                                }
                            }
                            if (!isEmpty) break;
                        }

                        if (isEmpty) {
                            this.#setBricks();
                            BALL.dy++;
                            BALL.dx++;
                            PADDLE.speed++;
                            if (PADDLE.width > 50) {
                                PADDLE.width-=20
                            }
                            BALL.y-=50;
                        }
                    }
                }
            }
        }
    }

    draw(ctx) {
        for (let c = 0; c < this.columnCount; c++) {
            for (let r = 0; r < this.rowCount; r++) {
                if (this.bricks[c][r].status >= 1) {
                    const b = this.bricks[c][r];
                    this.x = c * (this.width + this.padding) + this.offsetLeft;
                    this.y = r * (this.height + this.padding) + this.offsetTop;
                    this.bricks[c][r].x = this.x;
                    this.bricks[c][r].y = this.y;
                    ctx.beginPath();
                    ctx.rect(this.x, this.y, this.width, this.height);
                    switch (b.status) {
                        case 1:
                            ctx.fillStyle = "#0095DD";
                            break;
                        case 2:
                            ctx.fillStyle = "#cbd200";
                            break;
                        case 3:
                            ctx.fillStyle = "#d27600";
                            break;
                        case 4:
                            ctx.fillStyle = "#d90404";
                            break;
                    }

                    ctx.fill();
                    ctx.closePath();
                }
            }
        }
    }
}