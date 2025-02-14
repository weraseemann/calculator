function appendOperation(operation) {
    document.getElementById('resultArea').innerHTML += operation;
}
function calculateResult() {
    let container = document.getElementById('resultArea');

    try {
        let expression = container.innerHTML;  // or container.value if using <input>

        // Remove extra spaces
        expression = expression.replace(/\s+/g, '');

        // Convert percentages to decimals
        expression = expression.replace(/(\d+(\.\d+)?)%/g, (match, number) => {
            console.log(`Match: ${match}, Number: ${number}`);  // Debugging
            return parseFloat(number) / 100;
        });

        let result = eval(expression);
        container.innerHTML = result;

        // Auto-scroll
        container.scrollLeft = container.scrollWidth;

    } catch (error) {
        container.innerHTML = 'ERROR';
    }
}
function deleteLast() {
    let container = document.getElementById('resultArea');
    if (container.innerHTML.endsWith(' ')) {
    container.innerHTML = container.innerHTML.slice(0, -3);
    } else {
        container.innerHTML = container.innerHTML.slice(0, -1);
    }
}
function deleteAll() {
    document.getElementById('resultArea').innerHTML = '';
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    const allowedKeys = '0123456789+-*/().';

    if (allowedKeys.includes(key)) {
        appendOperation(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        backspace();
    }
});
// Backspace Function
function backspace() {
    let container = document.getElementById('resultArea');
    container.innerHTML = container.innerHTML.slice(0, -1);
}
let isOpeningBracket = true; // Track the current bracket state

function toggleBracket() {
    const container = document.getElementById('resultArea');
    let expression = container.innerHTML;

    // Count existing brackets
    let openBrackets = (expression.match(/\(/g) || []).length;
    let closeBrackets = (expression.match(/\)/g) || []).length;

    // Get last character in the expression
    let lastChar = expression.trim().slice(-1);

    // Determine whether to add ( or )
    if (expression === "" || /[+\-*/%(]$/.test(lastChar)) {
        // If empty or last char is an operator, add an opening bracket (
        container.innerHTML += '(';
    } else if (openBrackets > closeBrackets) {
        // If more ( than ), add a closing bracket )
        container.innerHTML += ')';
    } else {
        // Default to adding (
        container.innerHTML += '(';
    }
}
