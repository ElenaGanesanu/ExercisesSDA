let myP = document.getElementById ('myP');
console.log(myP.textContent);

function changeText () {
    let myP = document.getElementById ('myP');
    let myNewText = document.querySelector ('#newText');
    myP.textContent = myNewText.value;
    myNewText.value = ''; //sterge textul din casuta
}