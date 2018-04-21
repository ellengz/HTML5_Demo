var can1, can2;
var ctx1, ctx2;
var bgImg = new Image();

window.onload = function() {
    console.log("onload");
    init();
    // gameloop();
}
function init() {
    // get convas context
    can1 = document.getElementById('canvas1'); // upper level
    ctx1 = can1.getContext('2d');
    can2 = document.getElementById('canvas2'); // lower level, background
    ctx2 = can2.getContext('2d');

    bgImg.src = "./src/sea.jpg";
    bgImg.onload = function() {
        ctx2.drawImage(bgImg, 0, 0, can2.width, can2.height)
    };
}
function gameloop() {
    // calculate internal for next frame according to performance
    // dynamic internals
    // configuration needed for different browsers (check commonFunctions)
    // this one works for Chrome and Safari
    window.requestAnimationFrame(gameloop);
}
