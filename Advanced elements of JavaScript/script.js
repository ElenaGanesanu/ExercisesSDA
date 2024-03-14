
class Student {

    name= undefined;
    surname= undefined;
    print() {
        console.log(`${this.name} ${this.surname}`);
    }
    constructor(_name, _surname) {
        this.name= _name;
        this.surname= _surname;
    }
}

var s= new Student('Ana', 'Maria');

var students=[];
students.push(new Student('Ana', 'Maria'));
students.push(new Student('Rosu', 'Andrei'));
students.push(new Student('Ion', 'Popescu'));
students.push(new Student('Mihai', 'Traian'));

var students= [
    new Student('Ana', 'Maria'),
    new Student('Rosu', 'Andrei'),
    new Student('Ion', 'Popescu'),
    new Student('Mihai', 'Traian')
]

for(let i=0; i<students.length; i++) {
    students[i].print();
}

function main() {
    for(let i=0; i<students.length; i++) {
        students[i].print();
    }
}

main();