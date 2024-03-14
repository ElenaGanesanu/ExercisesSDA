// // Create a Person class, using ECMA6. 
// // It should have name, surname, age properties.
// // Now create an Address class.
// // It should contain street, number, postal code, city.
// // Now let our Address become a property of Person class.
// // Create methods for Person class: `setAddress()` and `getAddress()` - setting and returning the address of a person.
// // Try to make the address inaccessible from outside the Person (except for using methods mentioned above).


// //ECMA6 Address class definition
// class Address{
    
//     //constructor for Address
//     constructor(street, number, code, city) {
//         this.street = street;
//         this.number = number;
//         this.code = code;
//         this.city = city;
//     }
    
// }


//ECMA6 Person class definition
class Person{
    
    //constructor for Person
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        
        //we don't use this here - otherwise the variable will become public
        // this.address;
        var address;
        
        //we have hidden the functions inside the constructor to make them access private fields
        this.setAddress = function(newAddress) {
            address = newAddress;
        };
        this.getAddress = function() {
            return address;
        };
    }
    checkPassword(){
        console.log(this.address);
        console.log(this.getAddress());
        return true
    }
}

//creating new objects
var address = new Address('Street', 51, '12345', 'Paris');
var person1 = new Person('John', 'Doe', 43);

//using setter function
person1.setAddress(address);

//undefined
console.log('1 ' + JSON.stringify(person1.address));

//returning the current Person's address
console.log('2 ' + JSON.stringify(person1.getAddress()));
person1.fun();

class Car{
    constructor(brand) {
        this._carname= brand;
    }
    get carname () {
        return this._carname;
    }
    set carname(carname) {
        this._carname= carname;
    }
}

const myCar = new Car ('Ferrari');
console.log(myCar.carname);
myCar.carname='Dacia';
console.log(myCar.carname);
