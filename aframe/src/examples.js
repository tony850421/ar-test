AFRAME.registerComponent('press_click', {
    schema: {
        color: {default: 'red'}
    },

    init: function () {
        var data = this.data;
        var el = this.el;  // <a-box>
        var defaultColor = el.getAttribute('material').color;

        el.addEventListener('mouseenter', function () {
            el.setAttribute('color', data.color);
        });

        el.addEventListener('mouseleave', function () {
            el.setAttribute('color', defaultColor);
        });
    }
});

document.querySelector('a-entity').addEventListener('click', function (evt) {
    console.log('This 2D element was clicked!');
});