AFRAME.registerComponent('press', {
    schema: {type: 'number'},

    init: function () {
        var stringToLog = this.data;
        console.log(stringToLog);

        var a = document.querySelector('a');
        console.log(a);
    },

    update: function () {
        // Do something when component's data is updated.
    },

    remove: function () {
        // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
        // Do something on every scene tick or frame.
    }
});