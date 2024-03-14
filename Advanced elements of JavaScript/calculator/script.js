let main = document.getElementById('main');
let display = document.getElementById('calc-display');

let leftSide = '';
let rightSide = '';
let operation = undefined;

const numbers = ['nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one', 'zero'];

numbers.forEach((number) => {
    document.getElementById(number).onclick = (event) => {
        if (operation === undefined) {
            leftSide = leftSide + event.target.innerHTML;
            display.innerHTML = leftSide;
        } else {
            rightSide = rightSide + event.target.innerHTML;
            display.innerHTML = rightSide;
        }
    }
});

document.getElementById('dot').onclick = () => {
    if (operation === undefined) {
        leftSide = leftSide + '.';
        display.innerHTML = leftSide;
    } else {
        rightSide = rightSide + '.';
        display.innerHTML = rightSide;
    }
}

document.getElementById('add').onclick = () => {
    operation = '+';
    display.innerHTML = '';
}

document.getElementById('equal').onclick = () => {
    if (operation === '+') {
        let res = +leftSide + +rightSide;
        display.innerHTML = res;
    }
}

document.onkeydown = (event) => {
    if (event.key === 'Backspace') {
        if (operation === undefined) {
            leftSide = leftSide.toString().slice(0, -1);
            display.innerHTML = leftSide;
        } else {
            rightSide = rightSide.toString().slice(0, -1);
            display.innerHTML = rightSide;
        }
    }
}

