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
    var el = document.querySelector("a-scene");
    el.addEventListener("touchstart", handleStart, false);
    el.addEventListener("touchend", handleEnd, false);
    el.addEventListener("touchcancel", handleCancel, false);
    el.addEventListener("touchmove", handleMove, false);
    console.log("initialized.");
}

function handleStart(evt) {
    evt.preventDefault();
    console.log("touchstart.");
    var el = document.getElementsByTagName("canvas")[0];
    var ctx = el.getContext("2d");
    var touches = evt.changedTouches;

    for (var i = 0; i < touches.length; i++) {
        console.log("touchstart:" + i + "...");
        ongoingTouches.push(copyTouch(touches[i]));
        var color = colorForTouch(touches[i]);
        ctx.beginPath();
        ctx.arc(touches[i].pageX, touches[i].pageY, 4, 0, 2 * Math.PI, false);  // a circle at the start
        ctx.fillStyle = color;
        ctx.fill();
        console.log("touchstart:" + i + ".");
    }
}

function handleEnd(evt) {
    evt.preventDefault();
    console.log("touchend");
    var el = document.getElementsByTagName("canvas")[0];
    var ctx = el.getContext("2d");
    var touches = evt.changedTouches;

    for (var i = 0; i < touches.length; i++) {
        var color = colorForTouch(touches[i]);
        var idx = ongoingTouchIndexById(touches[i].identifier);

        if (idx >= 0) {
            ctx.lineWidth = 4;
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
            ctx.lineTo(touches[i].pageX, touches[i].pageY);
            ctx.fillRect(touches[i].pageX - 4, touches[i].pageY - 4, 8, 8);  // and a square at the end
            ongoingTouches.splice(idx, 1);  // remove it; we're done
        } else {
            console.log("can't figure out which touch to end");
        }
    }
}

function handleCancel(evt) {
    evt.preventDefault();
    console.log("touchcancel.");
    var touches = evt.changedTouches;

    for (var i = 0; i < touches.length; i++) {
        var idx = ongoingTouchIndexById(touches[i].identifier);
        ongoingTouches.splice(idx, 1);  // remove it; we're done
    }
}

function handleMove(evt) {
    evt.preventDefault();
    var el = document.getElementsByTagName("canvas")[0];
    var ctx = el.getContext("2d");
    var touches = evt.changedTouches;

    for (var i = 0; i < touches.length; i++) {
        var color = colorForTouch(touches[i]);
        var idx = ongoingTouchIndexById(touches[i].identifier);

        if (idx >= 0) {
            console.log("continuing touch "+idx);
            ctx.beginPath();
            console.log("ctx.moveTo(" + ongoingTouches[idx].pageX + ", " + ongoingTouches[idx].pageY + ");");
            ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
            console.log("ctx.lineTo(" + touches[i].pageX + ", " + touches[i].pageY + ");");
            ctx.lineTo(touches[i].pageX, touches[i].pageY);
            ctx.lineWidth = 4;
            ctx.strokeStyle = color;
            ctx.stroke();

            ongoingTouches.splice(idx, 1, copyTouch(touches[i]));  // swap in the new touch record
            console.log(".");
        } else {
            console.log("can't figure out which touch to continue");
        }
    }
}