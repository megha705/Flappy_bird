// Select the canvas
const canvas = document.querySelector('.canvas');

// Select the 2D context
const ctx = canvas.getContext('2d');

// Variables
let frames = 0;

// Game state 
const state = {
    current: 0,
    getReady: 0,
    game: 1,
    over: 2
}

// Event listener on canvas
document.addEventListener('click', function(evt) {
    switch(state.current) {
        case state.getReady:
            state.current = state.game;
            break;
        case state.game:
             bird.flap();
             break;
        case state.over: 
            state.current = state.getReady;
            break;
    }
})

// Sprite image
const sprite = new Image();
sprite.src = "assets/media/img/sprite.png";

// Background object
const background = {
    sX: 0,
    sY: 0,
    w: 275,
    h: 226,
    x: 0,
    y: canvas.height - 226,

    /**
     * Draws images on context
     * @param {none}
     * @return {none}
     */
    draw: function() {
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);

        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);
    }
}

// Foreground object
const foreground = {
    sX: 276,
    sY: 0,
    w: 224,
    h: 112,
    x: 0,
    y: canvas.height - 112,

    /**
     * Draws images on context
     * @param {none}
     * @return {none}
     */
    draw: function() {
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);

        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);
    }
}

// Bird object
const bird = {
    animation: [
        {sX: 276, sY: 112},
        {sX: 276, sY: 139},
        {sX: 276, sY: 164},
        {sX: 276, sY: 139}
    ],
    x: 50,
    y: 150,
    w: 34,
    h: 26,

    // frame
    frame: 0,

    draw: function() {
        let bird = this.animation[this.frame];

        ctx.drawImage(sprite, bird.sX, bird.sY, this.w, this.h, this.x - this.w/2, this.y - this.h/2, this.w, this.h);
    },

    flap: function() {
        // 
    } 

}

// Get ready 
const getReady = {
    sX: 0,
    sY: 228,
    w: 173,
    h: 152,
    x: canvas.width/2 - 173/2,
    y: 80,

    draw: function() {
        if (state.current == state.getReady) {
            ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        }
    }
}

// Get ready 
const gameOver = {
    sX: 175,
    sY: 228,
    w: 225,
    h: 202,
    x: canvas.width/2 - 225/2,
    y: 90,

    draw: function() {
        if (state.current == state.over) {
            ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        }
    }
}

/**
 * 
 * @param {none}
 * @return {none}
 */
function draw() {
    ctx.fillStyle = "#70c5ce";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    background.draw();
    foreground.draw();
    bird.draw();
    getReady.draw();
    gameOver.draw();
}

/**
 * 
 * @param {none}
 * @return {none}
 */
function update() {

}

/**
 * 
 * @param {none}
 * @return {none}
 */
function loop() {
    update();
    draw();
    frames++;

    // Request animation frame
    requestAnimationFrame(loop)
}
// Invokes loop function
loop();