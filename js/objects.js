// Functions for Objects

function newRandomObject() {
    return {
        x: randomInt(0, cnv.width),
        y: randomInt(0, 200),
        r: randomInt(20, 40),
        v: (1),
        a: randomDec(0.1, 0.2),
        colour: randomRGB()
    };
}

function drawObjects(aObject) {
    fill(aObject.colour);
    circle(aObject.x, aObject.y, aObject.r, "fill");
}

function moveObjects(aObject) {
    aObject.y += aObject.v;
    aObject.v += aObject.a;
    // if (aObject.y >= cnv.height) {
    //     aObject.y = 0;
    //     aObject.x = randomInt(0, cnv.width);

    // }
    
}

function addaObject() {
    objects.push(newRandomObject());
    console.log(objects);
}