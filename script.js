const clear = document.getElementById('clear');
const negative = document.getElementById('negative');
const percentage = document.getElementById('percentage');
const division = document.getElementById('division');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const subtract = document.getElementById('subtract');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const plus = document.getElementById('plus');
const zero = document.getElementById('zero');
const decimal = document.getElementById('decimal');
const equal = document.getElementById('equal');
const calculate = document.getElementById('calculate');
const result = document.getElementById('result');

let screen = ""
let account = 0

function showScreen() {
    calculate.innerHTML = screen;
}

clear.addEventListener('click', function(){
    account = 0;
    screen = "";
    showScreen();
})
negative.addEventListener('click', function(){
    account = 0-account;
    screen = ""
})

