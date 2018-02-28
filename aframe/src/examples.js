function pressButton() {
    var box = document.getElementById('monkeyObject');
    box.setAttribute('position', '1 0 -1');
}

function scroll() {
    var scrollH = document.getElementById('horizontal').value;
    var scrollV = document.getElementById('vertical').value;

    var box = document.getElementById('monkeyObject');
    box.setAttribute('position', {x:scrollH, y:scrollV, z:0});
}