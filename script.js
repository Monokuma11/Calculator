let result = document.getElementById('result');

function insert(value) {
    if (result.value != '0') {
        result.value += value;
    } else {
        result.value = value;
    }
}

function clearResult() {
    result.value = '0';
}

function backspace() {
    result.value = result.value.slice(0, -1);
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}
