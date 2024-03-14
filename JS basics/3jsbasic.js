//operatori ++, --, ==,!=, >=, <=, /, %

//const currentYear= new date ().getFullYear();
//console.log(currentYear);

//functie sa verifice ca anul curent este par
// si este mai mare ca 2000  ---  &&
//aceeasi functie dar ( este par ) sau (>2000) --- ||

let t = 1900
if ((t % 2 == 0) || (currentYear > 2000) && ( t == currentYear)) console.log( "true" )
else console.log("false")

///array uri
const arr = [ 2, 4, 5, 6, 8,23]
console.log(arr)
console.log(arr[3])
for(let i = 0; i< arr.length; i++) {
    console.log(arr[i])
}
for(let i = 0; i< arr.length; i++) {
    arr[i] = arr[i] + 2
    console.log(arr[i])
}

const arr2 = ['luni', 'marti', 'miercuri', 'joi', 'vineri', 6, 7, 34, false]
const arrString = [];
// extrage valorile din arr2 care sunt de tip string si salveaza-le in
//arrString cu metoda arrString.push()

for(let i = 0 ; i < arr2.length; i++) {
    if (typeof arr2[i] == `string`) {
        arrString.push(arr2[i])
    }
}
console.log(arrString)