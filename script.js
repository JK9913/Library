class Book {
        // the constructor...
    constructor(title, author, genre, hasRead) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.hasRead = hasRead;
    }

    get title() {
        return this._title;
    }

    set title(title) {
        this._title = title;
    }

    get hasRead() {
        return this._hasRead;
    }

    set hasRead(hasRead) {
        if(hasRead) {
            this._hasRead = false;
        } else {
            true;
        }
    }
    
    info() {
        return `${this.title} by ${this.author}, genre: ${this.genre}, has read: ${this.hasRead}`;
    }
}

const myLibrary = [new Book("Harry Potter", "J.K. Rowling","Fantasy",true)];
const bookcase = document.querySelector(".bookcase");
const addBookButton = document.querySelector(".add-book");
const button = document.querySelector(".add-book-button");
const form = document.querySelector(".add-book-form");
const submitBook = document.querySelector(".submit-book-button");

submitBook.addEventListener('click', function(event) {
    event.preventDefault();
    console.log("Submit button is clicked");
    addBookToLibrary();
    // Prevent form submission
});


button.addEventListener('click', function(event) {
    event.preventDefault();
    console.log("Form is clicked");
    showForm();
     // Prevent form submission
    
});



function showForm() {
    if (form.style.display === "block") {
        form.style.display = "none";
        console.log("Form is hidden");
        button.textContent = "Add book";
        return;
    } else {
        form.style.display = "block";
        button.textContent = "Cancel";
        console.log("Form is visible");
        return
    }
    
}



function displayBooks() {
    myLibrary.forEach(book => {
        // Create elements that go into the bookcase
        let createdDiv = document.createElement("div");
        let createdTitle = document.createElement("h2");
        let createdText_1 = document.createElement("p");
        let createdText_2 = document.createElement("p");
        let createdText_3 = document.createElement("p");

        // add text to elements
        createdTitle.textContent = "Title: " + book.title;
        createdText_1.textContent = "Author: " + book.author;
        createdText_2.textContent = "Genre: " + book.genre;
        createdText_3.textContent = "Has Read: " + book.hasRead;


        // append elements to div
        createdDiv.appendChild(createdTitle);
        createdDiv.appendChild(createdText_1);
        createdDiv.appendChild(createdText_2);
        createdDiv.appendChild(createdText_3);

        createdDiv.classList.add("book");
        bookcase.appendChild(createdDiv);
    });
}



function addBookToLibrary() {
    let title = document.querySelector(".title").value;
    let author = document.querySelector(".author").value;
    let genre = document.querySelector(".genre").value;
    let hasRead = document.querySelector(".has-read").checked;
    let newBook = new Book(title, author, genre, hasRead);
    myLibrary.push(newBook);
    console.log(myLibrary);
    bookcase.innerHTML = "";
    displayBooks();
    showForm();
    return;
}

displayBooks();

