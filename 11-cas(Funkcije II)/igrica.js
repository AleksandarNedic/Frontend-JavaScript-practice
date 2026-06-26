let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");

// igrač (kvadrat)
let player = {
    x: 100,
    y: 100,
    size: 30,
    speed: 5
};

// pritisnute tipke
let keys = {};

// slušamo tastaturu
document.addEventListener("keydown", (e) => {
    keys[e.key] = true;
});

document.addEventListener("keyup", (e) => {
    keys[e.key] = false;
});

// update logika
function update() {
    if (keys["ArrowUp"]) player.y -= player.speed;
    if (keys["ArrowDown"]) player.y += player.speed;
    if (keys["ArrowLeft"]) player.x -= player.speed;
    if (keys["ArrowRight"]) player.x += player.speed;
}

// crtanje
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // player
    ctx.fillStyle = "blue";
    ctx.fillRect(player.x, player.y, player.size, player.size);
}

// game loop
function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}

loop();