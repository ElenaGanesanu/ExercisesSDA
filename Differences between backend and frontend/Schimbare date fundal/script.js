const textArray = [
    'primul text',
    'al doilea text',
    'din nou un text',
    'ultimul text',
    'altceva altceva'
]

let interval= setInterval(changeText, 1000);
let currectIndex = 0;
let step= 1

function changeText () {
    console.log(currectIndex);
    if(textArray.length<= currectIndex){
        currectIndex= 0;
    }
    let newText= textArray[currectIndex];
    currectIndex+= step;
    let myP= document.getElementById('myP');
    myP.textContent= newText;
}

function stop() {
    clearInterval(interval);
    interval= null;
    console.log(interval);
}
function start () {
    console.log(interval);
    if(!interval){
        interval= setInterval(changeText, 1000);
    }
}

function updateStep() {
    let inp= document.getElementById('updateInput');
    step= parseInt(inp.value);
    console.log(step);
}