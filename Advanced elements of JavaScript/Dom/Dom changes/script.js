// Sa se afiseze in consola elementele urmatoare de DOM
// - InnerText-ul titlului paginii ----> "My nice home page"
// - Elementul cu id-ul "first"
// - Elementul cu name-ul "second"
// - Lista de elemente de clasa "row"

// HINT: document.querySelector / querySelectorAll / etc.

// setInterval(() => {
//     let counterElement = document.getElementById('counter');
//     let counter = +counterElement.innerText;
//     counter++;
//     counterElement.innerText = counter;
//     let style = `color: green; font-size: ${counter*0.2}rem`;
//     counterElement.previousElementSibling.style = style;
//     counterElement.style = style;
//     counterElement.nextElementSibling.style = `height: ${counter*0.2}rem; width: auto`
//     console.log("Counter changed!");
// }, 1000); // se executa functia la intervalul de 1000ms

// function changeCounter() {
//     console.log("Counter changed!");
// }

function createNewElement() {
    let newElement = document.createElement('p'); //p div span h1 etc.

    newElement.className = "row";
    newElement.innerHTML = "<span>This is a new element</span>";
    newElement.id = "a";

    let lastRow = document.querySelector('.row:last-child');
    console.log(lastRow);

    let newElementCopy = newElement.cloneNode(true);
    newElementCopy.id = "b";
    lastRow.insertBefore(newElement, lastRow.firstChild); // Adauga in fata unui copil al elemntului
    lastRow.appendChild(newElementCopy); // Adauga dupa ultimul copil al elementului

    lastRow.parentElement.insertBefore(newElementCopy, lastRow);
}

createNewElement();

function moveElement() {
    let b = document.querySelector('#b');
    let firstRow = document.querySelector('.row:first-child');
    let container = document.querySelector('.container');
    container.insertBefore(b, firstRow);
}

moveElement();

function deleteElement() {
    let toDeleteElement = document.querySelectorAll('.row')[3];
    let container = document.querySelector('.container');
    container.removeChild(toDeleteElement);
    // Also valid toDeleteElement.parentElement.removeChild(toDeleteElement);
}

deleteElement();

function modifyElement() {
    let toModifyElement = document.querySelectorAll('.row')[1];
    let container = document.querySelector('.container');
    let newElement = document.createElement('div');
    newElement.style = 'color: green; font-size: 4rem';
    newElement.innerText = "I replaced you!";
    // let replacement = document.querySelectorAll('.row')[2]; - Also works with existent elements from DOM
    container.replaceChild(replacement, toModifyElement);
}

modifyElement();