'use strict';

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    $('#led-r').turnOn();
    $('#led-g').turnOn();
    $('#led-b').turnOff();
});

$.end(function () {
    $('#led-r').turnOff();
    $('#led-g').turnOff();
    $('#led-b').turnOn();
});
