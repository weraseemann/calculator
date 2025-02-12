function appendOperation(operation) {
    document.getElementById('resultArea').innerHTML += operation;
}
function calculateResult() {
    let container = document.getElementById('resultArea');
     
    try {
        let result = eval(container.innerHTML);
        container.innerHTML = result;

        // Auto-scroll to the right after calculation
        container.scrollRight = container.scrollWidth;
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
    const bracketButton = document.getElementById('bracketButton');

    if (isOpeningBracket) {
        container.innerHTML += '(';           // Add opening bracket
        bracketButton.textContent = ')';  // Toggle button label to closing bracket
    } else {
        container.innerHTML += ')';           // Add closing bracket
        bracketButton.textContent = '(';  // Toggle button label back to opening bracket
    }

    isOpeningBracket = !isOpeningBracket; // Toggle the state
}