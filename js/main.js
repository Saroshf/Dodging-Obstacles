// Initalizing canvas and graphic context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 800;
//Global variables
var startTime, endTime;
let outputEl = document.getElementById("output");
let btn = document.getElementById("startover")
// let timedisp = 
let objects = [];
let player = {x: 500, y: 699, w: 100, h: 100};
//Main Draw Loop
requestAnimationFrame(draw);
function draw() {
    background("black");
    // movePlayer();
    drawPlayer();
    for (let i = 0; i < objects.length; i++) {
        moveObjects(objects[i]);
        drawObjects(objects[i]);
    }
    //Looping draw function
    requestAnimationFrame(draw);
}

// Event Listeners
document.addEventListener("click", endGame);
document.addEventListener("keydown", movePlayer);
btn.addEventListener("click", startOver)
//Start Timer
startTime = new Date();
let time = setInterval(addObjects, 1000); //clearInterval later when ball hits player to stop the function

function startOver() {
startTime = 0;
startTime = new Date();
setInterval(addObjects, 1000);
addObjects();
}


function addObjects() {
    addaObject();
}

function endGame() {
    clearInterval(time);
    endTime = new Date();
    let timeDiff = endTime - startTime;
    timeDiff /= 1000;

    let seconds = Math.round(timeDiff);
    outputEl.innerHTML = `<div>You survived for: ${seconds} second(s)! </div>`
}

function drawPlayer() {
    fill("white");
    rect(player.x, player.y, player.w, player.h, "fill");
    console.log("player");
}

function movePlayer(event) {
    console.log(event.keyCode);
    if (event.keyCode == 39) { // Right Arrow Key
        player.x += 15;
    } else if (event.keyCode == 37) { // Left Arrow Key
        player.x -= 15;
    }
}

// function collisionCheck() {
//     let disty = Math.abs(objects.y - player.y);
//     let distx = Math.abs(objects.x - player.x);
//     if (distX > (player.x/2 + objects.r))

// }
