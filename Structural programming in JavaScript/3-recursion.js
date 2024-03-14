//////////////////////  Functie recursiva 
// - se apeleaza pe ea
// - avem conditie de oprire


function c() {
  console.log('Start c')
  console.log()
  console.log('End c')
}

function b() {
  console.log('Start b')
  c()
  console.log('End b')
}

function a() {
  console.log('Start a')
  b()
  console.log('End a')
}

// a()


//////////////////////////// First example recurisve function
const say_hello = (n) => {
  if ( n == 0){ 
    console.log()
    return
  }
    
  console.log('Rulez Hello ' + n)
  say_hello(n - 1)
  console.log('Am Rulat Hello ' + n)
}

// say_hello(5)  // -> say_hello(4) -> say_hello(3) -> say_hello(2) -> say_hello(1) -> say_hello(0) -> intra in conditia de oprire
// din conditia de oprire se intoarce recursiv la parinti


//////////////////////// Functie recursiva care returneaza valori

function sum(n) {
  // conditie de oprire
  if ( n == 0 )
    return 0 // returnam rezultatul lui sum(0)
  
  // console.log("Adun " + n)
  return n + sum(n - 1)
}

// sum(n) = n + sum(n-1)
// sum(n) = n + (n-1) + sum(n-2)
// ... 
// sum(n) = n + (n-1) + (n-2) + ... + 2 + 1 + sum(0)
// sum(n) = n + (n-1) + (n-2) + ... + 2 + 1 + 0

// conditie n >= 0
// sum(0) = 0
// sum(1) = 1

// sum(4) = 4 + sum(3) 
// sum(4) = 4 +  3 + sum(2) 
// sum(4) = 4 +  3 + 2 + sum(1)
// sum(4) = 4 +  3 + 2 + 1 + sum(0)
// sum(4) = 4 +  3 + 2 + 1 + 0 + sum(-1)

// suma numerelor de la 1 la 10
// console.log(sum(0))  // 0
// console.log(sum(1))  // 1 + sum(0)
// console.log(sum(2))  // 2 + sum(1) = 2 + 1 + sum(0)


/////////////////////////// n factorial
// n! = n * (n-1)!
// n! = n * (n-1) * (n-2)!
// ...
// n! = n * (n-1) * (n-2) * ... * 2 * 1

// 1! = 1
// 0! = 1

function factorial(n){
  if ( n <= 1 )
     return 1

  return n * factorial(n-1)
}

console.log(factorial(5))

///////////////////////////  Sirul lui Fibonacci

// elementul n = elementul(n-1) + elementul(n-2)
// 0, 1, 1, 2, 3, 5, 8, ...

// fib(n) = fib(n-1) + fib(n-2)
// fib(3) = fib(2) + fib(1)
// fib(2) = 1
// fib(1) = 0
function fib(n) {
  // console.log(n) // pentru a vedea ca se apeleaza de multe ori functia
  if( n <= 0)
    return -1
  if( n == 1)
    return 0
  if( n == 2)
    return 1

  return fib(n-1) + fib(n-2)
}

// console.log(fib(-4))
console.log(fib(5)) // 3
// console.log(fib(6)) // 5
// console.log(fib(7)) // 8
// console.log(fib(8)) // 13