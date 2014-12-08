// I haven't written anything new in this library
// All the code is from http://mohayonao.github.io/pico.js/
// Thanks @mohayonao !

var pico = require('node-pico');

// Generate whitenoise
var noise = {
    process: function(L, R) {
        for (var i = 0; i < L.length; i++) {
            L[i] = R[i] = Math.random() * 0.1;
        }
    }
};

pico.play(noise);