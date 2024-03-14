// let v = 5
// console.log(v)
// console.log(typeof v)

// v = 'String'
// console.log(v)
// console.log(typeof v)

// v = true
// console.log(v)
// console.log(typeof v)

// // contine mai multe valori
// const a = [1, 2, { name: 'last_value', value: 3 }]
// console.log(a)
// console.log(typeof a)

//////////////////////////////////// Objects

// JSON - JS Object notation

// contine mai multe perechi de tipul cheie - valoare
// cheie poate fi orice string
// valoarea poate fi orice tip de date
// in Python se cheama dictionare ( de exemplu in dictionar stocam perechi de tipul cuvant_cheie: definitie )

const first_obj = {
  first_key: 5,
  name: 'Stefan',
  age: 70
}

// console.log(first_obj)
// console.log(typeof first_obj)


let person1 = {
  first_name: 'First1',
  last_name: 'Last',
  age: 30,
  address: '',
  id: 1
}

let person2 = {
  first_name: 'First2',
  last_name: 'Last',
  age: 40,
  addresses: ['address1', 'address2', 55, { prop1: 1 }],
  id: 2,
  friends_array: [
    {
      name: 'Friend1'
    },
    {
      name: 'Friend2'
    },
    'Friend3'
  ],
  friends_obj: {
    f1: {
      name: 'Friend1'
    },
    f2: {
      name: 'Friend2'
    },
    f3: 'Friend3'
  }
}

// console.log(person1)
// console.log(person2)
// my_key = 'first_name'
// console.log(person2[my_key])         // First2
// console.log(person2['first_name'])   // First2
// console.log(person2.first_name)      // First2

// console.log(person2.first_nameeee)   // undefined
// console.log(person2.friends)

// for (let index = 0; index < person2.friends.length; index++) {
//   const elem = person2.friends[index]
//   console.log(elem);
//   console.log(elem.name)

// }


//////////////// Adaugam proprietati obiectelor

// console.log(person1.birthday)  // undefined

// person1.birthday = '1-1-2012'

// console.log(person1.birthday)  // 1-1-2012

// person1.birthday = '12-12-2002'

// console.log(person1.birthday)  // 12-12-2002

///////////////////////////// Stergere proprietati

// console.log(person1)

// delete person1.birthday
// delete person1.birthday

// console.log(person1)


////////// Vrem sa stocam un chestionar care are un nume, niste categorii
// fiecare categorie are mai multe intrebari
// fiecare intrebare e formata din: intrebare, variante de raspuns, raspuns corect

const quiz = {
  name: 'My quiz',
  topics: {
    sport: [
      {
        question: 'Which one is correct team name in NBA?',
        options: [
          "New York Bulls",
          "Los Angeles Kings",
          "Golden State Warriros",
          "Huston Rocket"
        ],
        answer: 3
      }
    ],
    math: [
      {
        question: '5 + 7 = ?',
        options: [
          "10",
          "11",
          "12",
          "13"
        ],
        answer: 2
      },
      {
        question: '12 - 8 = ?',
        options: [
          "1",
          "2",
          "3",
          "4"
        ],
        answer: '3'
      }
    ],
    history: []
  },
  updates: '123'
}

// console.log(quiz)
// console.log(quiz.name)
// // console.log(quiz.topics)
// console.log( Object.keys(quiz) )  // [ 'name', 'topics', 'updates ]
// console.log( Object.keys(quiz.topics) )  // [ 'sport', 'math', 'history' ]
// console.log()

// console.log(quiz.topics.math[1].options[3])
// console.log()

// a = [ 1, [2, [3, [4, [5, 6]]]]]
// console.log(a)
// console.log(a[0])
// console.log(a[1][1][1]) // [ 4, [ 5, 6 ] ]
// console.log(a[1][1][1][1]) // [ 5, 6 ]
// console.log(a[1][1][1][1][1]) // 6

//////////////////// Obiectele pot stoca functii

const fn = () => { console.log("My fn") }
// console.log(fn)

const person = {
  firstName: "John",                            // a field
  lastName: "Doe",                              // a field
  hello: () => {console.log('Hi!')},        // a method
  fullName: function() { return this.firstName + ' ' + this.lastName }
};

// console.log(person); // "object"
// console.log(person.hello); // "object"

// person.hello();              // Hi!                   // a method call
// console.log(person.firstName);   // John 

// // console.log(person.firstName + ' ' + person.lastName)   
// console.log( person.fullName() );  

//////////////////////////// Proprietatile sunt publice

// const counterObj = {
//   counter: 0,
//   increment: function() { this.counter += 1},
//   decrement: function() { this.counter -= 1},
//   display: function() { console.log(this.counter)},
// }

// counterObj.display()
// counterObj.increment()
// counterObj.increment()
// counterObj.increment()
// counterObj.display()

// counterObj.counter = 100
// counterObj.display()

///////////////////////////////// Clase ( sablon pentru obiecte)
////////////// Function Constructor & Class
// Person
// name, age, favorite_colour

function Address(){
  this.city = ''
  this.street = ''
  this.number = ''
}

function Person(a, b, c = 'nespecificat'){
  this.name = a || ''
  this.age = b || 0
  this.favorite_colour = c
  this.address = new Address()
  this.display = () => {
    console.log(`My name is ${this.name} and my favorite colour is ${this.favorite_colour}`)
  }
  this.increment_age = () => {
    this.age += 1
  }
}

// // cod echivalent cu clase
// class Person {
//   constructor(a, b, c = 'nespecificat') {
//     console.log('Apelez functia constuctor')
//     this.name = a || ''
//     this.age = b || 0
//     this.favorite_colour = c
//     this.display = () => {
//       console.log(`My name is ${this.name} and my favorite colour is ${this.favorite_colour}`)
//     }
//     this.increment_age = () => {
//       this.age += 1
//     }
//   }
// }

person1 = new Person('Stefan', 50, 'green')
person2 = new Person()
person3 = new Person()



console.log(person1)
person1.display()
// person1.increment_age()
// console.log(person1.age)
// person1.age = 100
// console.log(person1.age)

