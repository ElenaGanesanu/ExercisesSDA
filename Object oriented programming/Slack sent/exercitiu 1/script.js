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
function Book (title, author, year, pages) {
    this.title= title,
    this.author= author,
    this.year= year,
    this.pages= pages,
    this.reserve= false
};


//Library class constructor
function Library(name, address) {
    this.name= name,
    this.address= address,
    this.bookList = [],

    this.add = function(book) {
    this.bookList.push(book);
    console.log(this.bookList);
    }
    
    this.search = function(title) {
    for(let i=0; i<this.bookList.length; i++){
        if(
            this.bookList[i].title===title
        ) {console.log('Found')}
        else{
            console.log('Not Found');
        }
        }
    }
};

//sample calls
var book = new Book('War and Peace', 'Leo Tolstoy', 1867, 999);
var book2 = new Book('Ulysses', 'James Joyce', 1922, 777);
var library = new Library('my library', 'my city');

library.add(book);
library.add(book2);
library.search("Some other book");
library.search("War and Peace");

// library.reserve("War and Peace");

