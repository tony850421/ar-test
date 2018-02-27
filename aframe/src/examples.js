AFRAME.registerComponent('change-color-on-hover', {
    schema: {
        color: {default: 'red'}
    },

    init: function () {
        var data = this.data;
        var el = this.el;  // <a-box>
        var defaultColor = el.getAttribute('material').color;

        el.addEventListener('click', function () {
            console.log("click al objeto");
        });
    }
});