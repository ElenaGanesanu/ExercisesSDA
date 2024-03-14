

// let person = {
//     name: 'Ana',
//     lastName: 'Balan',
//     age: 18,
//     likesApples: true,
//     books: [
//         234,
//         'ana',
//         {JKR: 'HP1'},
//         {JKR: 'HP2'},
//         {JKR: 'HP3'}
//     ],
//     red: function() {
//         console.log(this.name + ' ' + this.lastName);
//     }
// };

// person.red();
// console.log(typeof(person));
//console.log(person);
//console.log(JSON.stringify(person));
//let person2 = JSON.stringify(person); //transforma in string
//console.log(person2);
//let person3 = JSON.parse(person2); //opusul la stringify/ transforma din sting in obiect
//console.log(person3);
//console.log(person.name);
//console.log(person.books[0]);

//clase, functii constructor se scriu cu litera mare la inceputul numeleui (convention)

//Functie constructor

function Movie(title, year, director) {
    this.title = title;
    this.year = year;
    this.director = director;
    this.info = function() {
        console.log(this.title+ ' by ' + this.director);
    }
};

let movie = new Movie('Red', 2022, 'James');
let movie2 = new Movie('Blue', 2022, 'Robert');
let movie3 = new Movie('Alt film', 2022, 'James');

// movie.info(); //apelarea functie blueprint
// movie2.info();

// console.log(movie instanceof Movie);
// console.log(movie instanceof Object);

let person2 = Object.create(
    Object.prototype,
    {
        firstName: {value: 'Jimmy', enumerable: true, writable: true, configurable: true},
        lastName: {value: 'Joe', enumerable: true, writable: true, configurable: true},
        age: {value: '18', enumerable: true, writable: true, configurable: true},
    }
);

//let person3 =[1,2,3,4]

//Object.defineProperty(person2, 'firstName', {enumerable: false}); //modifica obiectul

for (let p2 in person2) {
    console.log(p2 + ' : ' + person2[p2]);
};

// for (let p3 of person3) {
//     console.log(p3)
// };

