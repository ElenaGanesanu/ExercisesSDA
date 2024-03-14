//////////////////////////////////////////  IF ELSE
// let name = 'Stefan'
// // name = 0

// if (name === 'Stefan'){
//   console.log('Hello 1, ' + name)
//   console.log('Hello 2, ' + name)
// } 


// a = 7
// b = 7

// if (a < b)
//   console.log('b este mai mare decat a')
// else  // branch-ul pentru opusul if-ului, adica a >= b
//   console.log('a este mai mare decat b')

// if (a < b)
//   console.log('b este mai mare decat a')
// else if (a > b)
//   console.log('a este mai mare decat b')
// else
//   console.log('a este egal cu b')

///////////////////////////////////////////////////////////////  Loops ( instructiuni repetitive )

// for( let i = 5; i >= 1; i--)
//     console.log(i)

// i = 1
// while( i <= 5) {
//   console.log(i++)  
//   // i++ este echivalent cu folosirea lui i, si dupa incrementarea lui i

//   // console.log(++i) 
//   // ++i  este echivalent cu incrementarea lui i, si dupa cu folosirea lui i
// }

///////////////////////////////////////////////////////////////  Functions


function display_hello() {
  console.log('Hello,')
  console.log('World!\n')
}

// display_hello()

// echivalent functie fara nume: Arrow functions
const display_hello2 = () => {
  console.log('Hello,')
  console.log('World!\n')
}

function coffee(sugar, milk) {
  //string interpolation
  console.log(`Coffee ${sugar} sugar, ${milk} milk`)  
}

// coffee(0, 2)  // Coffee 0 sugar, 2 milk
// coffee(5, 1)  // Coffee 5 sugar, 1 milk
// coffee(2, 1, 3)  // Coffee 2 sugar, 1 milk

// sugar = 3
// milk = 0

// // nu conteaza numele variabilelor
// coffee(sugar, milk)  // Coffee 3 sugar, 0 milk
// coffee(milk, sugar)  // Coffee 0 sugar, 3 milk


function sum(a, b){  // a si b sunt argumente
  result = a + b
  return result
}

// result = sum(5, 4)
// console.log(result)

// console.log(sum(1,2))  // 3  , 1 si 2 sunt params
// console.log( sum( sum(1, 2), sum(3, 4) ) )  // 10  // (1 + 2) + (3 + 4)

const prod = (a, b) => {
  return a * b
}

////////////////////////////////////////////////////////   a function can be passed as a function argument
// se mai cheama si 'callback function'
function calcul(a, b, operation){  
  result = operation(a, b)
  console.log(result)
}

// calcul(1, 2, sum)  // 3
// calcul(3, 4, prod) // 12

// calcul(4, 3, (a, b) => a - b )  // 1
// // echivalente
// calcul(4, 3, (a, b) => { return a - b })  // 1

////////////////////////////////////////////////////////  Folosirea functiilor anonime in Arrays: .forEach .filter
//////////////////////////////  Alte functii: .map .reduce  .find

const list = ['a', 'b', 'c']

// for (let index = 0; index < list.length; index++) {
//   console.log(list[index])
// }


const afisare = (elem) => {
  console.log(elem)
}

for (let index = 0; index < list.length; index++) {
  element = list[index]
  // afisare(element, index)
}

// echivalent
// list.forEach( afisare )
// // afisare(list[0])
// // afisare(list[1])
// // afisare(list[2])
// // ...

// // echivalent
// list.forEach( elem => console.log(elem) )

// console.log()

// list.forEach( (elem, index) => console.log(`Pe pozitia ${index} se afla ${elem}`) )


numbers = [ 1, 2, 3, 4, 5, 6]

// [1, 3, 5]
odd_numbers = []
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element % 2 == 1)
    odd_numbers.push(element)
}

// console.log(odd_numbers)
// echivalent
const is_odd = x => {
  if (x % 2 == 1)
    return true
  return false
}

const is_odd2 = x => {
  return x % 2 == 1
}

odd_numbers = numbers.filter(is_odd)
// echivalent
odd_numbers = numbers.filter( x => x % 2 == 1 )
even_numbers =  numbers.filter( x => x % 2 == 0 )

console.log(odd_numbers)
console.log(even_numbers)
console.log(numbers)



////////////////////////////////////////////////////////// Anonymous functions 1

//surfaceArea with callback
function surfaceAreaCallback(shape, a, b, c){
  //TODO code
  // calculare
  let result = shape(a, b, c)  // rectangle(a, b, c)

  // afisare
  console.log('Rezultatul pentru ' + shape.name + '  este: ' + result)
}

//TODO create anonymous function

trapezoid = (a, b, h) => {
  return (a+b)*h / 2
}

rectangle = (L, l) => {
  return L * l
}

triangle = (a, b, c) => {
  return a * b / 2
}

circle = (r) => {
  return 3.14 * r * r
}

// //sample function call ( callback_fn, dimension1, dimension2, dimension3)
// surfaceAreaCallback(trapezoid, 4, 3, 2);   // console.log(trapezoid(4, 3, 2))
// surfaceAreaCallback(rectangle, 4, 3);   // vrem sa reproduca: console.log(rectangle(4, 3))
// surfaceAreaCallback(rectangle, 4, 7); 
// surfaceAreaCallback(triangle, 4, 3, 2);
// surfaceAreaCallback(circle, 4);
// surfaceAreaCallback(r => 3.14 * r * r, 4);


////////////////////////////////////////////////////////// Anonymous functions 2

let more = () => {
  console.log("More than zero")
}

let equal = function() {
  console.log("Equal to zero")
}

function less() {
  console.log("Less then zero")
}


n = 0

// if (n > 0)
//   more()
// else if(n == 0)
//   equal()
// else
//   less()