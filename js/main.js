console.log('main.js loaded');

var redButton = document.getElementById('button--red');
var greenButton = document.getElementById('button--green');
var counter = document.getElementById('counter--value');

var count = 0;
var interval = null;


function updateCounter(value) {
    counter.innerText = value;
}


function startCounter() {
    interval = setInterval(function() {
        count++;
        updateCounter(count);
    }, 1000);
}

function stopcounter() {
    clearInterval(interval);
}


updateCounter(count);

redButton.addEventListener('click', function() {
    startCounter();
});

greenButton.addEventListener('click', function() {
    stopcounter();
    console.log('stop counter');
});