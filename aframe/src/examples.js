AFRAME.registerComponent('press_click', {
    schema: {
        color: {default: 'red'}
    },

    init: function () {
        document.querySelector('a-entity').addEventListener('click', function (evt) {
            console.log('This 2D element was clicked!');
        });
    }
});

