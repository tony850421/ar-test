function pressButton() {
    var box = document.getElementById('monkeyObject');
    box.setAttribute('position', '1 0 -1');
}

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