function appendOperation(operation) {
    document.getElementById('resultArea').innerHTML += operation;
}
function calculateResult() {
    let container = document.getElementById('resultArea');
     
    try {
        let result = eval(container.innerHTML);
        container.innerHTML = result;
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
