// Creati o clasa car care primeste 3 proprietati: brand model si currectFuel. creati 3 clase: passagerCar, Bus, Truck care extend (extends) Car si au o proprietate de sine statatoare de maxFuel(  este diferit la fiecare din ele). Creati o clasa GasStation care are o metoda refuel care calculeaza cantitatea de combustibil necesara ca sa umpleti rezervorul masinii. Se creaza o instanta pentru fiecare tip de masina, se creaza o instanta de GasStation si se creaza un console.log() pentru fiecare tip de automobile in care sa apara de cat combustibil este nevoie pentru a umple rezervorul


// class Car{
//     constructor(brand, model, currentFuel){
//         this.brand = brand;
//         this.model = model;
//         this.currentFuel = currentFuel;
//     }
// };

// class PassengerCar extends Car{
//     constructor(brand, model, currentFuel){
//         super(brand, model, currentFuel)
//     this.maxFuel = 50;
//     }
// };

// class Bus extends Car{
//     constructor(brand, model, currentFuel){
//         super(brand, model, currentFuel)
//     this.maxFuel = 80;
//     }
// };

// class Truck extends Car{
//     constructor(brand, model, currentFuel){
//         super(brand, model, currentFuel)
//     this.maxFuel = 90;
//     }
// };

// class GasStation{
//     refuel = function(car){
//         return car.maxFuel - car.currentFuel;
//     }
// };

// var car1 = new PassengerCar('Audi','A5', 25);
// var car2 = new Bus('BMW','X4', 30);
// var car3 = new Truck('Lamborghini','Uracan', 40);
// var gas = new GasStation();

// console.log(gas.refuel(car1));
// console.log(gas.refuel(car2));
// console.log(gas.refuel(car3));


//TEORIE


//Function Declaration
function a(){
    console.log('bla');
}

//Function Expression
var a = () => {
    console.log('Anonimus function');
}


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