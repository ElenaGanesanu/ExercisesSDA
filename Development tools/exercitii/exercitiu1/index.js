const prompt= require('prompt-sync')();

const fs= require('fs');

// const user_input1= prompt('Enter the first number: ');
// const user_input2= prompt('Enter the second number: ');
const figura= prompt('The figure is: ');

// console.log(
//     'The sum of the numbers is: '
//     parseFloat(user_input1) + parseFloat(user_input2)
//     )

// fs.write('user_input1.txt', user_input1)

const modulCalcul= require('./calcul.js');

const rezultat= modulCalcul.figureCheck(figura);
console.log(rezultat);

fs.appendFileSync('rezultat.txt',`The result is: ${rezultat}\r\n`);