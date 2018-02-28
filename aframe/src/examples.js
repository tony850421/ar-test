function pressButton() {
    var box = document.getElementById('monkeyObject');
    box.setAttribute('position', '1 0 -1');
}

var scrollH = 0;
var scrollV = 0;
var scrollZ = 0;

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