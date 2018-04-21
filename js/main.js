var can1, can2;
var ctx1, ctx2;
var canWidth, canHeight;

var bgImg = new Image();

// execute function game when onload
document.body.onload = game;

function game() {
    console.log("onload");
    init();
    gameloop();
}

function init() {
    // get convas context
    can1 = document.getElementById('canvas1'); // upper level
    ctx1 = can1.getContext('2d');
    can2 = document.getElementById('canvas2'); // lower level, background
    ctx2 = can2.getContext('2d');

    bgImg.src = "./src/sea.jpg";
    canWidth = can1.width;
    canHeight = can1.height;
}
function gameloop() {
    // calculate internal for next frame according to performance
    // dynamic internals
    // configuration needed for different browsers (check commonFunctions)
    // this one works for Chrome and Safari
    window.requestAnimationFrame(gameloop);
    drawBackground();
}
