'use strict';

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    // Turn on `#led-r` when `#button` is pushed.
    $('#button').on('push', function () {
        console.log('Button pushed.');
        $('#led-r').turnOn();
        $('#led-g').turnOn();
        $('#led-b').turnOff();
    });

    // Turn off `#led-r` when `#button` is released.
    $('#button').on('release', function () {
        console.log('Button released.');
    $('#led-r').turnOff();
    $('#led-g').turnOff();
    $('#led-b').turnOn();
    });

});

$.end(function () {
    $('#led-r').turnOn();
});
