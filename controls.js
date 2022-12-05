class Controls {
    constructor() {
        this.right = false;
        this.left = false;

        this.#keyboardListener();
    }
    #keyboardListener() {
        document.onkeydown = (e) => {
            switch (e.key) {
                case "ArrowLeft":
                    this.left = true;
                    break;
                case "ArrowRight":
                    this.right = true;
                    break;
            }
        }
        document.onkeyup = (e) => {
            switch (e.key) {
                case "ArrowLeft":
                    this.left = false;
                    break;
                case "ArrowRight":
                    this.right = false;
                    break;
            }
        }
    }
}