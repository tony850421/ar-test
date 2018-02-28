function pressButton() {
    var box = document.getElementById('monkeyObject');
    box.setAttribute('position', '1 0 -1');
}

function HorizontalMove() {
    var scrollH = document.getElementById('horizontal').value;
    console.log(scrollH + " value H");

    var box = document.getElementById('monkeyObject');
    box.setAttribute('position', {x:scrollH});
}

function VerticalMove() {
    var scrollV = document.getElementById('vertical').value;
    console.log(scrollV + " value H");

    var box = document.getElementById('monkeyObject');
    box.setAttribute('position', {y:scrollV});
}