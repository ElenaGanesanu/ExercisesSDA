// // Part 1 Inheritance Function Constructor
// function Animal(name, size) {
//     this.name = name;
//     this.size = size;
//     this.hello1 = function() {
//         console.log(this.name)
//     }
//     // let hello2 = ()=>{
//     //     console.log('Billy')
//     // }
// }
// Animal.prototype.hello2 = ()=>{
//     // console.log('alex');
//     console.log('Bob2');
// }
// Animal.prototype.color4 = 'green'

// // Animal.hello2()

// var animal = new Animal('Bob', 'big')
// animal.hello1()
// animal.hello2()


// function Bird(name, size, speed) {
//     Animal.call(this, name, size);
//     this.speed = speed;
// }

// Bird.prototype = Object.create(Animal.prototype);
// Bird.prototype.constructor = Bird;

// var a = new Bird('sparrow', 99, 100);
// a.hello1();
// a.hello2();
// console.log(a.color4);



// // Part 2 Inheritance Class Constructor
// // Polymorphism
// class Animal{
//     constructor(name, size) {
//         this.name = name;
//         this.size = size;
//     }
//     hello() {
//         console.log(this.name);
//     }
// }
// class Bird extends Animal{
//     constructor(name, size, speed) {
//         super(name, size);
//         this.speed = speed;
//     }
//     hello() {
//         console.log("i am a bird");
//     }
// }
// var a = new Animal('bob', 10, 50);
// a.hello();
// var b = new Bird("sparrow", 99, 100);
// b.hello();


// //Part 3 PROMISES
// function first(){
//     console.log(1)
// }
// function second(callback){
//     setTimeout(()=>{
//         console.log(2)
//         callback();
//     },0)
// }
// function third(){
//     console.log(3)
// }
// first();
// second(third);
// third();
// setTimeout(()=>{
//     console.log('works')
// },1000)
// var promise = new Promise(function(resolve, reject) {
//     // do something
//     var ok = doSomeLongOperation();
//     if (ok) { //operation succeeded
//       resolve("working");
//     }
//     else { //operation failed
//       reject("not working");
//     }
// });
// promise.then(
//     (result) => {console.log(result)},
//     (error) => {console.log(error)}
// )
// (()=>{
//     setTimeout(() => {
//         const data = {name: 'John'};
//         console.log(data);
//         setTimeout(() => {
//             console.log('Data has been Updated')
//         },4000)
//     }, 1000)
// })()
// callBack()
// const promise = new Promise((resolve, reject) => {
//     resolve({user: 'Lion'})
//     // reject('not working')
// })
// promise
//     .then((data)=>{
//         const user = data
//         // console.log(user)
//         return fetch('https://jsonplaceholder.typicode.com/todos/1');
//         // return user;
//     })
//     .then((todos)=>{
//         console.log(todos)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// async function myFunction() {
//     return "Hello";
//   }
//   function myFunction() {
//     return Promise.resolve("Hello");
//   }
// async function myDisplay() {
//     let myPromise = new Promise(function(resolve, reject) {
//       resolve("I love You !!");
//     });
//     document.getElementById("demo").innerHTML = await myPromise;
//   }
//   myDisplay();