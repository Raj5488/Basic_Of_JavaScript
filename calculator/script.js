function appendCharacter(character) {
    const result = document.getElementById('result');
    result.value += character;
}

function clearResult() {
    const result = document.getElementById('result');
    result.value = '';
}

function deleteLastCharacter() {
    const result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
}

function calculateResult() {
    const result = document.getElementById('result');
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}
