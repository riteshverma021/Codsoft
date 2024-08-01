
function clearDisplay() {
    display.value = '';
}

function deleteLastChar() {
    display.value = display.value.slice(0, -1);
}


function appendDot() {
    display.value += '.';
}


function appendNumber() {
    display.value += this.textContent;
}


function appendOperator() {
    display.value += this.textContent;
}

function evaluateExpression() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
const display = document.getElementById('display');

document.getElementById('AC').addEventListener('click', clearDisplay);
document.getElementById('DE').addEventListener('click', deleteLastChar);
document.getElementById('dot').addEventListener('click', appendDot);
document.getElementById('slash').addEventListener('click', appendOperator);
document.getElementById('seven').addEventListener('click', appendNumber);
document.getElementById('eight').addEventListener('click', appendNumber);
document.getElementById('nine').addEventListener('click', appendNumber);
document.getElementById('mul').addEventListener('click', appendOperator);
document.getElementById('four').addEventListener('click', appendNumber);
document.getElementById('five').addEventListener('click', appendNumber);
document.getElementById('six').addEventListener('click', appendNumber);
document.getElementById('min').addEventListener('click', appendOperator);
document.getElementById('one').addEventListener('click', appendNumber);
document.getElementById('two').addEventListener('click', appendNumber);
document.getElementById('three').addEventListener('click', appendNumber);
document.getElementById('add').addEventListener('click', appendOperator);
document.getElementById('doublezero').addEventListener('click', appendNumber);
document.getElementById('zero').addEventListener('click', appendNumber);
document.getElementById('equal').addEventListener('click', evaluateExpression);
