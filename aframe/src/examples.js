var scrollH = 0;
var scrollV = 0;
var scrollZ = 0;

var rotateH = 0;
var rotateV = 0;
var rotateZ = 0;

var scale = 0.4;

function HorizontalMove() {
    scrollH = document.getElementById('horizontal').value;

    var box = document.getElementById('monkeyObject');
    box.setAttribute('position', {x:scrollH, y:scrollV, z:scrollZ});
}

function VerticalMove() {
    scrollV = document.getElementById('vertical').value;

    var box = document.getElementById('monkeyObject');
    box.setAttribute('position', {x:scrollH, y:scrollV, z:scrollZ});
}

function ZMove() {
    scrollZ = document.getElementById('top').value;

    var box = document.getElementById('monkeyObject');
    box.setAttribute('position', {x:scrollH, y:scrollV, z:scrollZ});
}

function HRotate() {
    rotateH = document.getElementById('rotateH').value;

    var box = document.getElementById('monkeyObject');
    box.setAttribute('rotation', {x:rotateH, y:rotateV, z:rotateZ});
}

function VRotate() {
    rotateV = document.getElementById('rotateV').value;

    var box = document.getElementById('monkeyObject');
    box.setAttribute('rotation', {x:rotateH, y:rotateV, z:rotateZ});
}

function ZRotate() {
    rotateZ = document.getElementById('rotateZ').value;

    var box = document.getElementById('monkeyObject');
    box.setAttribute('rotation', {x:rotateH, y:rotateV, z:rotateZ});
}


function scaleObject() {
    scale = document.getElementById('scale').value;

    var box = document.getElementById('monkeyObject');
    box.setAttribute('scale', {x:scale, y:scale, z:scale});
}

var ongoingTouches = [];

function startup() {
    var el = document.querySelector("body");
    el.addEventListener("touchstart", handleStart, false);
    el.addEventListener("touchend", handleEnd, false);
    el.addEventListener("touchcancel", handleCancel, false);
    el.addEventListener("touchmove", handleMove, false);
    console.log("initialized.");
}

function handleStart(evt) {
    evt.preventDefault();
    console.log("touchstart.");

    var touches = evt.changedTouches;

    for (var i = 0; i < touches.length; i++) {
        console.log("touchstart:" + touches[i].pageX + " " + touches[i].pageY + " ..." + i);
    }
}

function handleEnd(evt) {
    evt.preventDefault();
    console.log("touchend");
}

function handleCancel(evt) {
    evt.preventDefault();
    console.log("touchcancel.");
}

function handleMove(evt) {
    evt.preventDefault();
    console.log("touchMove.");

    var touches = evt.changedTouches;
    
    ongoingTouches.push(touches[0]);
    console.log(ongoingTouches.length + " lenth");

    for (var i = 0; i < touches.length; i++) {
        console.log("touchMove:" + touches[i].pageX + " " + touches[i].pageY + " ..." + i);
    }
    
    for (var i=0; i<ongoingTouches.length; i++){
        console.log(ongoingTouches[i] + " ..." + i);
    }
}

startup();
