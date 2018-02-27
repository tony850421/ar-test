AFRAME.registerComponent('pressClick', {
    schema: {
        color: {default: 'red'}
    },

    init: function () {
        var data = this.data;
        var el = this.el;  // <a-box>

        el.addEventListener('click', function () {
            el.setAttribute('color', data.color);
        });
    }
});