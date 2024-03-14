const arr4 = ['luni', 'marti', 'miercuri', 'joi', 'vineri', '6', 7, 34, false]
const arr3 = []
for (let i = 0; i < arr4.length; i = i + 1) {
    if (arr2[i] == false) arr3.push(arr4[i])
}
for( elem in arr4){
    if (arr4[elem] == false) arr3.push(arr4[elem])
}
for(elem of arr4){
    if(elem == false) arr3.push(elem)
}
let elem2 = 0;
while(elem2 < 8) {
    console.log(arr4[elem2])
    elem2++
}
console.log(arr3)
const listaNume = ['Maria', 'ioana', 'mihai', 'ionut', 'petru']
const listaNumeCpt = []
const oFraza = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate maiores recusandae ullam facilis amet deleniti fugit magni architecto earum quisquam!"
// for (nume in listaNume) {
//     listaNumeCpt.push(listaNume[nume].toUpperCase())
// }
for(let i of listaNume){
    console.log(i)
    listaNumeCpt.push(
        i.slice(0, 1).toUpperCase() + i.slice(1)
    )
}
console.log(listaNumeCpt)
const arrToString = (arr) => arr.join(' ')
const stringToArr = (str) => str.split(' ')
console.log(arrToString(listaNume))
console.log(stringToArr(oFraza))

function solution(str){
    console.log(str.split(''))
    return str.split('').reverse().join('') 
}
console.log(solution('world'))

const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
function flatMatrix (arr) {
    const result = []
    for (elem of arr) {
        console.log(elem)
        for (elementSecondLevelArray of elem)
        {
            console.log(elementSecondLevelArray)
            result.push(elementSecondLevelArray )
        }
    } return result
}
console.log(flatMatrix(matrix))
//console.log(concatenare(matrix,nrList2))

const nrList1 =[2,5,45,733,261,-34, 19, -99]
const nrList2 =[9,5,2]
let concatenare = function (a,b) {
    return a.concat(b)
}
console.log(concatenare(nrList1, nrList2));

//EXERCITIU 1

const mixNrList2NrList2 =[2, 5, 45, 733, 261, -34, 19, -99, 9, 5, 2]

function compareNumbers(a, b) {
    return a - b;
}

console.log (mixNrList2NrList2.sort(compareNumbers));

// EXERCITIU 2

//const average= classPoints.reduce ((a,b) => a=b,0) / classPoints.length

function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}



