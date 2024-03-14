//document.write('<h2>Hello World</h2>');
//alert("Hello World");
console.log('salut')

var a;
var b;
a= 5;
console.log(a);
a=10;
a=18;
console.log(a);

a=10;
b=5;

//var s=a+b; sau
//console.log(a+b);

var s=a+b;
console.log(s);
//var s=a-b; scadere
//var s=a*b; inmultire
//var s=a/b; impartire
//var s=a%b; restul impartirii
// a++ la fel ca a= a+1
// a-- la fel ca a= a-1
a= 28;
b= 5;
var s= a%b;
console.log(s)
a++

a =a+b; 
a *= b;
console.log(a);

a="12";
b=10;
console.log(a < b);  //se face conversie, se aduc la acelasi tip de date si dupa se compara
//mereu se converteste numarul in string, pt orice numar poate sa devina string, nu orice string poate sa devina numar
console.log(a+b);

var c = "Salut";
//console.log(c[5]);
//console.log(c.indexOf("!"));
console.log(c.indexOf("xyz"));
console.log(c.length);
console.log(c.substring(1, 4)); // de la pozitia 1 la pozitia 4, neluand 4

var text="Marți, compania care a devenit primul Unicorn românesc, a vândut acțiuni la prețul de 56 de dolari pe unitate, preț care este peste valoarea de 52-54 de dolari propusă pentru oferta publică inițială. La cea mai recentă rundă de investiții, din 1 februarie, compania era evaluată la 35 de miliarde de dolari, iar cotația actuală aste de 62,28 dolari pe acțiune, cu peste 6 dolari mai mult față de prețul cu care a vândut UiPath acțiuni."
/*
-lungime string
-pozitie virgla
-substring in care sa avem cuv unicorn
*/

var lungime= text.length;
var pozVirgula= text.indexOf(',');
var unicorn= "Unicorn";
console.log(text[6]) //caracterul de pe pozitia 6 din string
console.log(text.length);
console.log(text.indexOf(","));
console.log(text.indexOf('Unicorn'));
console.log(text.substring( text.indexOf(unicorn), text.indexOf(unicorn) + unicorn.length));

a=10;
b=10;

// console.log( a !== b) [a diferit de b]

if (a > b){
    console.log("Numarul mai mare este a = " + a);
}else{
    if( a < b) {
        console.log("Numarul mai mare este b = " + b);
    } else{
        console.log("Numerele sunt egale");
    }
}

/*
x de tip number
vrem sa afisam in alerta tipul numarului x */

/*var x;
x=10;
if (x % 2 == 0) {
    alert("Numarul este par");
}else {
    alert("Numarul este impar");
}*/

var z=8; //are valori doar intre 1 si 7

switch(z){
    case 1: 
        console.log("Luni");
    break;
    case 2:
        console.log("Marti");
    break;
    case 3:
        console.log("Miercuri");
    break;
    case 4:
        console.log("Joi");
    break;
    case 5:
        console.log("Vineri");
    break;
    case 6:
        console.log("Sambata");
    break;
    case 7:
        console.log("Duminica");
    break;
    default:
        console.log("Nu exista ziua cu numarul " + z);
}

function f(x){
   // var y = x+2;
   // return y;
   return x+2;
}

function e(x){
    return f(x) +3;
}
console.log(e(2));

var s= f(2);
console.log(f(2));

function suma (x1, x2){
    return x1+x2;
}

console.log(suma(6477, 5703));

function parImpar (x){
    if(x % 2 === 0){
        return "par";
    }else{
        return "impar";
    }
}

blaBlaNuConteaza=12;
console.log(parImpar(blaBlaNuConteaza));

//Funtie care calculeaza aria unei forme geometrice
// triunghi dreptunghic, dreptunghi, trapez
// a*b/2 -arie triunghi
// a*b -arie dreptunghi
// (a+b)*c/2 -arie trapez

function arie (forma, a, b, c){
    var rezultat;
    var pi = 3.14;

    switch(forma){
        case "triunghi":
           rezultat = a * b /2;
        break;
        case "dreptunghi":
            rezultat = a * b;
        break;
        case "trapez":
            rezultat = (a + b) * c /2;
        break;
        case "cerc":
            rezultat= pi * a * a;
        break;
        default:
        //    return "Nu stiu sa calculez aria pentru " + forma
        rezultat = "Nu stiu sa calculez aria pentru " + forma
    }
    return rezultat;
}
console.log( "Aria triunghiului este " + arie("triunghi", 5, 7));
console.log(arie("dreptunghi", 3, 4))
console.log(arie("trapez", 3, 5, 7))
console.log(arie("cerc", 3))

//oridinea parametrilor cand definim functia=ordinea parametrilor cand apelam functia

//Structuri repetitive

for( var i=95; i<=100; i++){
    console.log(i);
}

i=110;
while(i<=100){
   console.log(i);
   i++; 
}

i=110;

do{
    console.log(i);
    i++;
} while (i<=100);      //verifica conditia la final si atunci si daca nu se indeplineste conditia tot se executa o singura data

/*
functia divizibil(a, b, c)- va afisa in consola toate numerele cuprinse intre a si b divizibile cu c
divizibil(13, 25, 5) -> 15, 20, 25
*/

function divizibil(a, b, c){
    for( var i=a; i<=b; i++){
        if (i%c===0){
            console.log(i);
        }
    }
}

divizibil(13, 25, 5);

//Afisati in consola fiecare caracter dintr-un string dat

var cuvant="Telefon"
for( var i=0; i<cuvant.length; i++){
    console.log(cuvant[i]);
}

/*
functie care primeste ca param un strig
returneaza true sau fals daca cuv e palindrom (ana, aerisirea, capac)
*/

function palindromCheck(cuvant){
var ultimEl= cuvant.length-1;
    for(var i=0; i<=cuvant.length/2; i++){
        if(cuvant[i] !== cuvant[ultimEl-i]){
            return false;
        }
    }
    return true;
}
console.log(palindromCheck('mama'));
console.log(palindromCheck('ana'));

//Parcurgeti stringul telefon si cautati litera L, cand o goasiti afisati in consola mesaj si opriti structura repetitiva


var telefon ="Telefon"

    for(i=0; i< telefon.length; i++){
        if( telefon[i]="l"){
        console.log("Caracterul se afla in string");
        break;
        }
    }

var arr =[0, 5, "salut", true, 25];
console.log(arr[2]);
console.log(arr[4]);
console.log(arr.length);
console.log(arr.indexOf(5));
arr.push(10);
console.log(arr);
arr.pop();          //elimina automat ultimul element
console.log(arr);

var ar=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(ar[1][1]); //afisarea unui element din interiorul unui array care se afla in interiorul altui array


//functia divizibil(a, b, c)- va returna un array toate numerele cuprinse intre a si b divizibile cu c
//divizibil(13, 25, 5) -> 15, 20, 25

function divArray(a, b, c){
    var arr1=[];
    for( var i=a; i<=b; i++){
        if (i%c==0){
            arr1.push(i);
        }
    }
    return arr1;
}
console.log(divArray(13,25,5));

var ar=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

for( var i=0; i<ar.length; i++){
    for( var a=0; a<ar[i].length; a++){
        console.log(ar[i][a]);
    }
}

// 0, 1, 1, 2, 3, 5, 8.... Sirul lui Fibonacci
// o functie fib(n) va returna un array cu primele n nr din sirul lui Fibonacci

function fib(n){
    var arra= [0, 1];

    for(var i=2; i<n; i++){
        arra.push(arra[i - 1] + arra[i - 2]);
    }
    return arra;
}
console.log(fib(20));
