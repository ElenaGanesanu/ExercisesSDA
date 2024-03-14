// functie de catete pentru a afla ipotenuza
function ipotenuza(a, b) {
   return Math.sqrt(a**2 +b ** 2);
}

console.log(ipotenuza(3,4))

if(ipotenuza(3,4) > 5) {
    console.log(`resultatul este gresit`)
}
else
console.log(`rezultatul este 5`)

console.log(ipotenuza(5,8)>5) ? "rezultatul este mai mare ca 5" : "rezultatul este mai mic decat 5"

console.log(ipotenuza(3,6))
let result= (ipotenuza(3,6)>8) ? "ipotenuza e mai mare ca 8" : "ipotenuza este mai mica decat 8" //if... else... sub alta forma ? if... : else...
console.log(result)

let numar = "8";
let intreg = function(num) {
    return (num === Math.floor(num)) ? "Numarul este intreg" : "Numarul nu este intreg"
};
console.log(intreg(numar));
console.log(Math.floor("8acb"));

console.log("Hello World")

console.log("un alt mesaj")

var a=5; //variabila a contine o valoare de tip Number (Number=numere intregi si cu zecimale)
console.log(a)
console.log(typeof a)

var b=13; //variabila incepe neaparat cu litera
console.log(b)

console.log(a+b)

a="abc" //o variabila se declara o singura data, a doua oara cand apare aceeasi variabila nu se mai pune var
console.log(a) //variabilele nu au tip de date, e dat de orice contin ele
console.log(typeof a) //afiseaza tipul de date al valorii

var mesaj= "grupa ro33 primul curs de js"
var mesaj2= `se poate si cu alte tipuri de ghilimele` // backticks sau template literals
var mesaj3= 'si asta e alt tip de ghilimele' 
console.log(mesaj) 

console.log(mesaj, mesaj2,mesaj3)

// comentariuu, la numere nu se pun ghilimele
/* comentariu
pe mai multe randuri */

var esteAdevarat= false; // notatie camel case, la mai multe cuvinte prima litera cu caps pt a diferentia cuvintele pt developeri
console.log(esteAdevarat)
// ; (punct si virgula) e optional <3
//clasele din js incep cu litera mare
//o constanta e mereu cu caps
//var e metoda peistorica de a declara o variabila, dupa 215 s-au introdus 2 moduri let si const
// var= function scoped
// let si const = block scoped
//nu putem atribuialte valori unei constante (const)

const dateOfBirth= "17/02"
console.log(dateOfBirth)
let nume= 'maria'
console.log(nume)

console.log(dateOfBirth+nume) //concatenare

let tata= 'Andrei'
let mama='Larina'
console.log("tatal este "+ tata + "\n mama este " + mama)
console.log(`tatal este ${ tata } mama este ${ mama }`) //respecta cum scriem noi ('')

// \n=new line

const dateOfbirthTata= 1960
const dateOfBirthMama= 1950
console.log(`tata este cu ${ dateOfbirthTata - dateOfBirthMama} ani mai mare`)
//boolean= vaiabila contine umai true sau false
//lista de mai multe elemente se defineste cu [] = array

//tipuri de date: primitive
const iAmNr = 23
const iAmStr = "i'm a string type"
const iAmBoolean = true
let iAmUndefined
//tipuri de date: de tip obiect ( care retin doar o referinta )
const array1 = [4, 6, 1, 8, 23, 7]  // lista , Array
const obj1 = {                      // obiect
    name : 'silviu',
    varsta: 26
}
const myFunction = function(a, b) {  // functie
    return a + b
}
console.log(
    `
    iAmNr = ${typeof iAmNr}
    iAmStr = ${typeof iAmStr}
    iAmBoolean = ${typeof iAmBoolean}
    iAmUndefined = ${typeof iAmUndefined}
    array1 = ${typeof array1}
    obj1 = ${typeof obj1}
    myFunction = ${typeof myFunction}
    `
)

//Types of functions:

function sum1(a, b) {       // functie ( function declaration)
    return a + b
}
const sum2 = function (a, b) {  // functie ( function expression)
    return a + b
}
const sum3 = (a, b) => a + b // functie ( function expression)

const major = 18
const pensionare = 65
console.log(sum1(major, pensionare))
console.log(sum1(18, 65))

function dif(x,y) {return x-y}
console.log(
`numarul maxim de ani este ${Math.abs(dif(major,pensionare))}`
)
console.log (Math.abs(dif(pensionare,major)) ) // ne asiguram ca nr rezultat e pozitiv

const majorCheck = function(param){
    if(param >= 18){
        console.log('persoana in cauza este majora')
    }
    else {
        console.log('warning, persoana este minora')
    }
}
majorCheck(45)

///falsy values in javascript:
// metode prin care evaluam o expresie ca true sau false
if(undefined) console.log( 'expresia este adevarata')
else console.log('expresia este falsa')

console.log(Boolean('25' - 24))

