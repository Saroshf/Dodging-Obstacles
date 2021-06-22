// Initalizing canvas and graphic context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 800;

// let timedisp = 
let objects = [];
drawPlayer();

//Main Draw Loop
requestAnimationFrame(draw);
function draw() {
    background("black");
    for (let i = 0; i < objects.length; i++) {
        moveObjects(objects[i]);
        drawObjects(objects[i]);
    }
    //Looping draw function
    requestAnimationFrame(draw);
}

function drawPlayer() {
    rect(300, 400, 50, 50, "fill");
    fill("white");
    console.log("player");
}
setInterval(addObjects, 1000); //clearInterval later when ball hits player to stop the function

function addObjects() {
    addaObject();
}