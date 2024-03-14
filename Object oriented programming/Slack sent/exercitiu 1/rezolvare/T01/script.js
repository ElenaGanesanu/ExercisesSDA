/*
Define a Book object, containing the information:

* title,
* author,
* published year,
* pages number,
* is it currently reserved.

Create some objects, instances of the Book class.

Define a Library object, containing:

* name,
* address,
* array of books,

The library should have the following methods: 

* adding a book, 
* searching for a book by title (use `Array.find()`), 
* deleting a book (by title or by position in the array of books)
* reserving a book (and un-reserving when returned).
*/

//Book class constructor
function Book(title, author, year, pages) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.reserved = false;
}

//Library class constructor
function Library(name, address) {
    
    this.name = name;
    this.address = address;
    this.books = [
        // {"title":"War and Peace","author":"Leo Tolstoy","year":1867,"pages":999,"reserved":false},
        // {"title":"War and Peace","author":"Leo Tolstoy","year":1867,"pages":999,"reserved":false}
    ];
    
    //adding a book to the library
    this.add = function(book) {
        this.books.push(book);
        // console.log('Book: ' + JSON.stringify(book));
    }

    this.search = function(title) {
        // const foundBook0 = this.books.find((book) => false);
        const foundBook1 = this.books.find((book) => {return book.title === title});
        // const foundBook2 = this.books.find(function(book) {return book.title === title});
        // console.log(foundBook0)
        // console.log(foundBook1)
        // console.log(foundBook2)
        return foundBook1;
    }
    
    this.reserve = function(title){
        const foundBook = this.search(title);
        // console.log('---------------------------'+JSON.stringify(foundBook));
        if(foundBook.reserved === false){
            console.log(foundBook.title + ' is reserved? NO ' + 'but now it is');
            foundBook.reserved = true;
        }
    }

    this.unreserve = function(title) {
        const foundBook = this.search(title);
        if(foundBook.reserved === true){
            console.log(foundBook.title + ' is reserved? YES ' + 'but now it isn t');
            foundBook.reserved = false;
        }
    }

    this.delete = function(x) {
        console.log(JSON.stringify(this.books));
        const deletedBook = this.books.splice(x-1, 1);
        console.log(deletedBook);
        console.log(this.books);
    }
    this.deleteByTitle = function(bookName) {
        // console.log('T1 ' + JSON.stringify(this.books));
        // const filteredArray = this.books.filter((book)=> {
        //     return book.title !== bookName;
        // });
        // console.log('T2 ' + JSON.stringify(filteredArray));
        // ----------------------------------
        var deleted = false;
        for(let i in this.books) {
            if(this.books[i].title === bookName) {
                this.books.splice(i, 1);
                deleted = true;
                break;
            }
        }

        for(let i=0; i < 2; i++ ){


        }

        if(deleted){
            console.log(bookName + 'has been deleted');
            console.log(this.books);
        } else {
            console.log(bookName + 'hasn t been found');
        }
    }
}

//sample calls
var book = new Book('War and Peace', 'Leo Tolstoy', 1867, 999,);
var book2 = new Book('Ulysses', 'James Joyce', 1922, 777);
var book3 = new Book('Ulysses2', 'James Joyce', 1922, 777);
var library = new Library('my library', 'my city');

library.add(book);
library.add(book2);
library.add(book3);
// library.search("Some other book");
// library.search("War and Peace");

// library.reserve("War and Peace");
// library.unreserve("War and Peace");
library.deleteByTitle("War and Peace");
// library.delete(3);

// Loop
// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true

