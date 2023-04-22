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

let screen = "";
let secondScreen = "";
let operation = "";

function showScreen() {
    result.innerHTML = screen;
}
function showCalculate(){
    calculate.innerHTML = screen;
}
function operate(e){
    operation = e
    screen += e;
    showCalculate();
    secondScreen = screen;
    screen = "";
}
function account(e,d){
    const number1 = parseInt(e,10)
    const number2 = parseInt(d,10)
    let account
    operation==="+"?
    account = number1 + number2 :
    operation ===  "-" ?
    account = number1 - number2 : 
    operation ===  "/" ?
    account = number1 / number2 : 
    account = number1 * number2 
    return account
}

clear.addEventListener('click', function(){
    screen = "";
    secondScreen = "";
    showScreen();
    showCalculate();
})
negative.addEventListener('click', function(){
    if(screen === "") return;
    if(!screen.includes('-')){
        screen = "-" + screen;
    } else{
        screen = screen.split("-")[1];
    }
    showScreen();
})
plus.addEventListener('click', function(){
    operate("+")
})
subtract.addEventListener('click', function(){
    operate("-")
})
multiplication.addEventListener('click', function(){
    operate("×")
})
division.addEventListener('click', function(){
    operate("/")
})
equal.addEventListener('click',function(){
    let calculation = account(screen, secondScreen)
    screen = screen + secondScreen
    showCalculate();
    screen = calculation;
    showScreen();
    screen ="";
    secondScreen= "";
});
zero.addEventListener('click',function(){
    screen += "0"
    showScreen();
});
one.addEventListener('click', function(){
    screen += "1"
    showScreen();
})
two.addEventListener('click', function(){
    screen += "2"
    showScreen();
})
three.addEventListener('click', function(){
    screen += "3"
    showScreen();
})
four.addEventListener('click', function(){
    screen += "4"
    showScreen();
})
five.addEventListener('click', function(){
    screen += "5"
    showScreen();
})
six.addEventListener('click', function(){
    screen += "6"
    showScreen();
})
seven.addEventListener('click', function(){
    screen += "7"
    showScreen();
})
eight.addEventListener('click', function(){
    screen += "8"
    showScreen();
})
nine.addEventListener('click', function(){
    screen += "9"
    showScreen();
})
decimal.addEventListener('click', function(){
    if(!screen.includes(".")){
        screen += "."
        showScreen();
    }
});
