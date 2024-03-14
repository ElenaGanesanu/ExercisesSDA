// Sa se afiseze in consola elementele urmatoare de DOM
// - InnerText-ul titlului paginii ----> "My nice home page"
// - Elementul cu id-ul "first"
// - Elementul cu name-ul "second"
// - Lista de elemente de clasa "row"

// HINT: document.querySelector / querySelectorAll / etc.

setInterval(() => {
    let counterElement = document.getElementById('counter');
    let counter = +counterElement.innerText;
    counter++;
    counterElement.innerText = counter;
    let style = `color: green; font-size: ${counter*0.2}rem`;
    counterElement.previousElementSibling.style = style;
    counterElement.style = style;
    counterElement.nextElementSibling.style = `height: ${counter*0.2}rem; width: auto`
    console.log("Counter changed!");
}, 1000); // se executa functia la intervalul de 1000ms

// function changeCounter() {
//     console.log("Counter changed!");
// }