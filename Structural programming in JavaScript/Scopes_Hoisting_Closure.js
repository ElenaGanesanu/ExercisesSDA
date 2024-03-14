/////////// Scopes

/////////////////////////////  No var, let , const
function exampleFunc() {
  x = 5; // oops, forgot to use `var` - we have a global variable now
}

// console.log(x); // ReferenceError: x is not defined
// exampleFunc(); // abia aici se declara x-ul
// console.log(x); // 5

/////////////////////////////  Const Scope

function testLetAndConst() {
  let x = 5;
  const y = 15;

  if (x === 5) {
    const x = 8; // a new variable is created, storing different value
    console.log('x: ' + x);  // 8
    console.log('y: ' + y);  // 15
  }

  if (y === 15) {
    let y = 18; // a new variable is created, storing different value
    console.log('x: ' + x);  // 5
    console.log('y: ' + y);  // 18
  }

  // y = 18 // TypeError: Assignment to constant variable.

  console.log('x: ' + x);  // 5
  console.log('y: ' + y);  // 15
}

// testLetAndConst()


/////////////////////////////////////// Hoisting


// console.log(n)  // undefined

// var n = 5

// console.log(n)  // 5

////////////// Nu e valabil pentru let si nici pentru const

// console.log(m) // ReferenceError: Cannot access 'n' before initialization

// let m = 5
// // const m = 5

// console.log(m) // 5

/////////////////////////////////////// Hoisting for functions

// afisare(1)

// function afisare(n){
//   console.log('Afisare' + n)
// }

// afisare(2)


//////////////////// arrow functions

// // hello()
// console.log(hello) // undefined

// var hello = () => {
//   console.log('Hello')
// }

// hello()
// console.log(hello) // [Function: hello]


///////////////////////// Hoisting in functions

function baz() {
  console.log(foo); // Uncaught ReferenceError: Cannot access 'baz' before initialization

  var foo = "Lorem ipsum";
}

// console.log(foo); // ReferenceError: foo is not defined
// baz();
// console.log(foo); // ReferenceError: foo is not defined


/////////////////////////// Temporary Dead Zone (TDZ)

function baz() {
  // console.log(foo) // ReferenceError: Cannot access 'foo' before initialization

  let foo = "Lorem ipsum";

  if (true) {
    // console.log(foo) // ReferenceError: Cannot access 'foo' before initialization

    let foo = "Something else";
    console.log(foo);  // "Something else"
  }
  
  console.log(foo) // "Lorem ipsum"
}

// baz();

/////////////////////////////////////////  IIFE, Immediately Invocated Function Expressions

////////////////////// Exemplu 1
// const hello = () => {
//   console.log('Hello, world!')
// }

// console.log(hello)  // [Function: hello]

// console.log( () => { console.log('Hello, world!' )} ) // [Function (anonymous)]

// a = hello()  //  Hello, world!
// console.log(a)  // undefined

// a = (() => { console.log('Hello, world!') } )()   //  Hello, world!
// console.log(a)  // undefined

////////////////////////// Exemplu 2
// fn = (() => 5 )
// console.log(fn())  // 5

// a = (() => 5 )()
// console.log(a)  // 5

///////////////////////////// Exemplu 3
// function increase(x){
//   return x + 1
// }
// fn = ((x) => { return x + 1 })
// fn = (x) => { return x + 1 }
// fn = (x) => x + 1
// fn = x => x + 1

// console.log(fn(5)) // 6

// a = (x => x + 1)(5)  // echivalent a = 5 + 1
// console.log(a)  // 6


///////////////////////////////////////////  Closure

////////// a function can return a function as a result

function a() {
  console.log('Afisare a') 

  const b = () => {
    console.log('Afisare b')
    return 100
  }

  console.log(b)  // [Function: b]
  return b
}

// result = a()         // functia a returneaza functia b
// console.log(result)  // [Function: b]

// c = result()    // rulam functia b, pentru ca variabila result stocheaza functia b
//            //  Afisare b

// console.log(c)  // 100

//////////////////// Diferenta dintre un numar si o functie care returneaza un numar
// n = 5
// fn = () => { return 5 }

// console.log(n)  // 5
// console.log(fn) //  [Function: fn]
// console.log(fn()) //  5


////////// Closure Example

parent_counter = function () {
  var counter = 0;

  const inside_count = function () {
    // console.log('Rulez inside_count ' + counter)
    return counter += 1;
  }

  return inside_count
}

// count = parent_counter();

// console.log(count)    // [Function inside_count]
// // console.log(counter)  // ReferenceError: counter is not defined
// var counter = 100

// console.log(count())  // se ruleaza functia inside_count
// console.log(count()) 
// console.log(count()) 

// count = parent_counter();
// console.log(count())
// console.log(count())


/////////// Same example without Closure

// var counter = 0

// const count = function () {
//   console.log('Rulez count')

//   return counter += 1
//   // // echivalent
//   // counter = counter + 1
//   // return counter
// }

// console.log(count)  // [Function: count]
// console.log(counter)  // 0

// count()
// console.log(counter)  // 1
// count()
// console.log(counter)  // 2

// counter = 100
// count()
// console.log(counter)  // 101

// console.log(count())  // 102
// console.log(count())  // 103

