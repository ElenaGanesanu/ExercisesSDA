/****
 * Do the following changes using only JS
 * 1. Add a <h1> title in the #header div with the text The Amazing Website
 * 2. Delete all the elements with class .junk
 * 3. Move div#left in before div#right
 * 4. Change the background color of #header (your choise not white)
 * 5. Replace the <h1> from both sides with <h2> using the same text
 * 6. Add a random button of your choise to the #left side and a div with class .row to the #right
 ****/

function fixWebsite() {
    let newElement= document.createElement('h1');
    newElement.innerHTML = '<span>The Amazing Website</span>';
    let parentNewElem= document.getElementById('header');
    parentNewElem.appendChild(newElement);
    
    let deleteJunk= document.querySelectorAll('.junk');
    deleteJunk.forEach((element) =>{
        element.parentElement.removeChild(element);
    })

    let rightSide= document.getElementById('right');
    let leftSide= document.getElementById('left');
    rightSide.parentElement.insertBefore(leftSide, rightSide);

    let changeColor= document.getElementById('header');
    changeColor.style.backgroundColor= 'blue';

    let rightSideChange= document.getElementById('right');
    let leftSideChange= document.getElementById('left');
    let titles= document.getElementsByClassName('title');
    let newTitleRight= document.createElement('h2');
    let newTitleLeft= document.createElement('h2');
    newTitleRight.innerHTML= 'Right Side New';
    newTitleLeft.innerHTML= 'Left Side New';
    rightSideChange.replaceChild(newTitleRight, titles[1]);
    leftSideChange.replaceChild(newTitleLeft, titles[0]);

    let butonPlace= document.getElementById('left');
    let buton= document.createElement('button');
    buton.innerText= 'Asta e un buton';
    butonPlace.appendChild(buton);

    let divPlace= document.getElementById('right');
    let divRow= document.createElement('div');
    divRow.className= 'row';
    divRow.innerText= 'Acesta este un div';
    divPlace.appendChild(divRow);
}

fixWebsite();