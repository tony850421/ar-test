function pressButton() {
    var box = document.getElementById('monkeyObject');
    box.setAttribute('position', '1 0 -1');
}

function HorizontalMove() {
    var scrollH = document.getElementById('horizontal').value;

    var box = document.getElementById('monkeyObject');
    box.setAttribute('position', {x:scrollH});
}

function VerticalMove() {
    var scrollV = document.getElementById('vertical').value;

    var box = document.getElementById('monkeyObject');
    box.setAttribute('position', {y:scrollV});
}

function ZMove() {
    var scrollZ = document.getElementById('top').value;

    var box = document.getElementById('monkeyObject');
    box.setAttribute('position', {z:scrollZ});
}