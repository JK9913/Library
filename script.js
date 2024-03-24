const myLibrary = [{Title:"Harry Potter", Author:"J.K. Rowling",Genre:"Fantasy",HasRead:true},{Title: "LOTR", Author:"J.R.R. Tolkien", Genre: "Fantasy", HasRead:false },{Title: "Game of Thrones", Author: "George R.R. Martin", Genre: "Fantasy", HasRead:false}];
const bookcase = document.querySelector(".bookcase");
const addBookButton = document.querySelector(".add-book");



function displayBooks() {
    myLibrary.forEach(book => {
        // Create elements that go into the bookcase
        let createdDiv = document.createElement("div");
        let createdTitle = document.createElement("h2");
        let createdText_1 = document.createElement("p");
        let createdText_2 = document.createElement("p");
        let createdText_3 = document.createElement("p");

        // add text to elements
        createdTitle.textContent = "Title: " + book.Title;
        createdText_1.textContent = "Author: " + book.Author;
        createdText_2.textContent = "Genre: " + book.Genre;
        createdText_3.textContent = "Has Read: " + book.HasRead;


        // append elements to div
        createdDiv.appendChild(createdTitle);
        createdDiv.appendChild(createdText_1);
        createdDiv.appendChild(createdText_2);
        createdDiv.appendChild(createdText_3);

        createdDiv.classList.add("book");
        bookcase.appendChild(createdDiv);
    });
}

class Book {
    constructor() {
        // the constructor...
        constructor(title, author, genre, hasRead); {
            this.title = title;
            this.author = author;
            this.genre = genre;
            this.hasRead = hasRead;
        };
    }

    
    
    info() {
        return `${this.title} by ${this.author}, genre: ${this.genre}, has read: ${this.hasRead}`;
    }
}

function addBookToLibrary() {
  // do stuff here
}

displayBooks();