function pressButton() {
    var box = document.getElementById('boxExample');
    box.setAttribute('position', '0 0 -1');
}

AFRAME.registerComponent('press', 
    schema: {type: 'number'},

    init: function () {
        var stringToLog = this.data;
        console.log(stringToLog);
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