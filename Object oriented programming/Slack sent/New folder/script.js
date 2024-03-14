// class Product {
//     constructor(name, price, description) {
//         this.name = name;
//         this.price = price;
//         this.description = description;
//     }
// }
// class Cart{
//     constructor(){
//         this.products = [];
//     }
//     add(product){
//         let cici = {
//             product: product,
//             quantity: 1,
//         };
//         this.products.push(cici);
//         // console.log(cici.product)
//     }
//     delete(){
//             var deleted = false; //to determine if a product was really deleted
//             for(let i in this.products) {
//                 if(this.products[i].name === this.name) {
//                     this.products.splice(i, 1);
//                     deleted = true;
//                     break;
//                 }
//             }
//             if(deleted) {
//                 console.log(name + ' has been deleted');
//             } else {
//                 console.log(name + ' has not been found');
//             }
//     }
//     change(name, quantity){
//         for(let i of this.products){
//             //console.log(i)
//             if(i.product.name === name ){
//                 i.quantity = quantity;
//                 break;
//                 }
//         }          //js te rog schimba si tu asta
//     }
//     display(){
//         var total = 0;
//         // console.log(product.name);   
//         // console.log(quantity);
//             for(let i  of this.products) {
//                 //numele produsului si cantit
//                 console.log(`numele produsului este ${i.product.name}, iar cantitatea este ${i.quantity}`);
//                 //console.log(i)
//                  total += i.product.price * i.quantity;
//             }
//         console.log(total);
//     }
// }
// // se creaza o metoda change care are ca parametrii name si quantity pe baza numelui se modifica cantitatea. se foloseste for of  
// let toy = new Product(`Woody`, 35, `puppet`);
// let toy2 = new Product(`Potato`, 20, `puppet`);
// let toy3 = new Product(`Wendy`, 40, `puppet`);
// //console.log(toy.price);
// let cart = new Cart();
// cart.add(toy);
// cart.add(toy2);
// cart.add(toy3);
// // console.log(cart.products);
// // cart.delete(toy);
// // console.log(cart.products)
// cart.change(`Woody`,2)
// cart.display()
///////////////////////////////////////////////////////////////////////////////////////////////////
// creaza o clasa customer care are 3 parametrii: name, surname, email. Creati o clasa order care are 4 parametrii number, date, cart, customer. salvati name, surname, email din customer folosind spread operator. valoarea lui this.customer va fii egal cu new customer din variabilele create cu spread operator

// se creaza o clasa clothing care face extend la product care primeste parametrii name, price, desc, size, color. name, price si desc se paseaza mai departe prin super la clasa parinte product, iar size and color se salveaza cu this in clasa clothing. se creaza o metoda care sa faca un console.log iar in console log sa apara o proprietate parinte si proprietatile lui clothing. iar apoi se mai creaza o clasa food, care are aceeasu schema ca clothing, iar parametrul suplimentar este weight. iar apoi se creaza o clasa cosmetics cu parametrii suplimentari flavor si volume, similar cu clothing. initializati cate o instanta pentru fiecare clasa si apelati metoda fiecareia pentru a face console.log

class Product {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }
}

class Clothing extends Product{
    constructor(name, price, description, size, color){
        super(name, price, description);
        this.size = size;
        this.color = color;
        // console.log(`The name is ${this.name} the size is ${this.size} the color is ${this.color}`)
    }

    display= function() {
        console.log(`The name is ${this.name} the size is ${this.size} the color is ${this.color}.`);
    }
}

var tshirt = new Clothing('tricou', 20, 'v-neck','M','pink');
tshirt.display();

class Food extends Product{
    constructor(name, price, description, weight){
        super(name, price, description);
        this.weight = weight;
    }

    display= function() {
        console.log(`The name is ${this.name} the weight is ${this.weight}.`);
    }
}

var burger = new Food('cheeseburger', 10,'delicious',300);
burger.display();

class Cosmetics extends Product{
    constructor(name, price, description, flavor, volume){
        super(name, price, description);
        this.flavor = flavor;
        this.volume = volume;
    }

    display= function() {
        console.log(`The name is ${this.name} the flavor is ${this.flavor} and the volume is ${this.volume}.`);
    }
}

var shampoo = new Cosmetics('HeadNShoulders', 5, 'te scapa chiar si de par', 'mango and mint', 450);
shampoo.display();

