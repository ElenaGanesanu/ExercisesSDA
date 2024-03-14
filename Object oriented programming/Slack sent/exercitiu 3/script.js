// // Now let’s figure out some classes that will be needed for another application. 
// // This time we would like to build an online store. 
// // It will have products and shopping carts. 
// // What objects, fields and methods can we use here?
// // Implement constructors for these objects in classic notation

// //constructor for Product
// function Product(name, price) {
//     this.name = name;
//     this.price = price;
// }

// //constructor for shopping Cart
// function Cart() {
    
//     //initializing an empty array of products
//     this.products = [];
    
//     //adding a product to the cart
//     this.addProduct = function(product) {
//         // console.log(product);
//         this.products.push(product);
//     }
    
//     //removing a product from the cart
//     this.deleteProduct = function(name) {
//         var deleted = false; //to determine if a product was really deleted
//         for(let i in this.products) {
//             if(this.products[i].name === name) {
//                 this.products.splice(i, 1);
//                 deleted = true;
//                 break;
//             }
//         }
        
//         if(deleted) {
//             console.log(name + ' has been deleted');
//         } else {
//             console.log(name + ' has not been found');
//         }
//     }
    
//     //displaying current content
//     this.display = function() {
//         console.log('current content:');
//         for(let i of this.products) {
//             console.log(i.name + ': ' + i.price);
//         }
//     }
// }

// //creating some sample Products
// var p1 = new Product('Apple', 5);
// var p2 = new Product('Banana', 6);
// var p3 = new Product('Cherry', 7);

// //creating a Cart
// var cart = new Cart();

// //adding products and checking the Cart
// cart.addProduct(p1);
// // cart.display();
// cart.addProduct(p2);
// // cart.display();
// cart.addProduct(p3);
// // cart.display();

//deleting products and checking the Cart
// cart.deleteProduct('Banana');
// cart.display();
// cart.deleteProduct('Zebra');
// cart.display();

// function red(){
//     console.log('red')
// }

// var Movie = function(newTitle, newDirector){
//     let title = newTitle;
//     let director = newDirector;
//     this.info = function(){
//         console.log(title + " by " + director);
//     }
// };

// var Movie2 = function(newTitle, newDirector){
//     this.title = newTitle;
//     this.director = newDirector;
//     this.info = function(){
//         console.log(this.title + " by " + this.director);
//     }
// };

// var m = new Movie("Titanic", "James Cameron");
// m.info(); //Titanic by James Cameron
// console.log(m.title); //undefined

// var m2 = new Movie2("Titanic", "James Cameron");
// m2.info(); //Titanic by James Cameron
// console.log(m2.title); 


// function Car1(brand, model){
//     this.brand = brand;
//     this.model = model;
//     this.launch = function(){
//         console.log("works1");
//     }
// }
// var c1 = new Car1('BMW', 'I8');
// c1.launch();
// console.log(c1.brand);
// console.log(c1.model);


// class Car2{
//     constructor(brand, model){
//         var _brand = brand;
//         // this.brand = brand;
//         this.model = model;
//         this.getBrand = function() {
//             return _brand;
//         }
//     }

//     launch(){
//         console.log("works2");
//     }
// }
// var c2 = new Car2('Audi', 'Q5');
// c2.launch();
// console.log(c2.brand);
// console.log(c2.model);
// console.log(c2.getBrand());


// var a = function(b, c) {
//     return b + c;
//  }
//  //call
//  console.log(a(2, 3));

//definition
// const a = (b, c) => {
//     console.log('works');
//     return b + c;
// };

// const a = (b, c) => ({"sum": b + c});

// console.log(a(2, 3)); //{sum: 5}

// class Car{
//     constructor(brand, model){
//         this.brand = brand;
//         this.model = model;
//     }

//     launch = () => {
//         console.log("works");
//     }
// }

// function sum(a, b = 5){
//     return a + b;
// }

// var x = sum(2); //x is now 7


//we have an array
// var arr = [10, 11, 12, 30, '23', true];

// we write our custom function for searching
// we want to find an element that has a value over 20:
// function searcher(value, index, array){
//     return value > 20;
// }

// we use the find array function
// var item = arr.find(searcher); //item is now at 30

// var item2 = arr.find((value) => value > 20);
// console.log(item2);

// var name = 'John';
// var surname = 'Doe';
// var age = 22;

// var text = 'My name is ' + name + ' ' + surname + '. I am ' + age + ' years old.';

// var text = `My name is ${name} ${surname}. I am ${age} years old.`;

// var car = {
//     brand: 'audi',
//     model: 'q5',
//     year: 2009
// }

// var brand = car.brand;
// var model = car.model;
// var year = car.year;

// var {brand, model, year} = car;

// class Person {
//     constructor( firstName, lastName, age) {
//         this.firstName= firstName;
//         this.lastName= lastName;
//         this.age= age;
//         this.height= 150
//     }

//     personDates() {
//         console.log(this.firstName, this.lastName);
//     }
// };

// class HealthStatus extends Person {
//     constructor(firstName, lastName, age, heartBeat) {
//         super(firstName, lastName, age);
//         this.heartBeat = heartBeat;
//     }
// }

// var person1= new Person('Joe', 'Goldberg', 36);
// person1.personDates();
// console.log(person1.heartBeat);

// var person2= new HealthStatus('Andrei', 'David', 36, 70);
// console.log(person2.heartBeat);

/*

Using ECMA6 notation, create a Computer class, containing parameters, such as:

* name,
* CPU speed,
* RAM size,
* hard disk type,
* hard disk size,
* screen size.

Now create a Comparer class, with a method allowing to compare two computers and print the result in console. For example:
*/

class Computer {
    constructor(name,CPUspeed,RAMsize,screenSize) {
        this.name= name;
        this.CPUspeed= CPUspeed;
        this.RAMsize= RAMsize;
        this.screenSize= screenSize;
    }
}

class Comparer{
    constructor() {
    }

    compare(computer1, computer2) {
        for(let a in computer1) {
            if(computer1[a]>computer2[a]){
            console.log( 'bla')
            } else if (computer2[a]>computer1[a]) {
            console.log( 'bla2')
            } else{
                console.log( 'bla3')
            }
        }
    }
};
var computer1 = new Computer('test1', 2, 4, 2);
var computer2 = new Computer('test1', 2, 4, 2);

let result= new Comparer();
result.compare( computer1, computer2);