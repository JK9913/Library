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
    let index = 0;

    myLibrary.forEach(book => {
        // Create elements that go into the bookcase
        let createdDiv = document.createElement("div");
        let titleDiv = document.createElement("div");
        let infoDiv = document.createElement("div");
        let buttonDiv = document.createElement("div");
        let createdTitle = document.createElement("h3");
        let createdText_1 = document.createElement("p");
        let createdText_2 = document.createElement("p");
        let createdText_3 = document.createElement("p");
        let createdButton = document.createElement("button");
        let deleteButton = document.createElement("button");

        // Add text to elements
        createdTitle.textContent = "Title: " + book.title;
        createdText_1.textContent = "Author: " + book.author;
        createdText_2.textContent = "Genre: " + book.genre;
        createdText_3.textContent = "Has Read: " + book.hasRead;
        createdButton.textContent = "Read Now";
        deleteButton.textContent = "🗑️"; // Unicode for trash bin symbol

        // Append title, info, and button elements to their respective divs
        titleDiv.appendChild(createdTitle);
        titleDiv.appendChild(deleteButton);
        infoDiv.appendChild(createdText_1);
        infoDiv.appendChild(createdText_2);
        infoDiv.appendChild(createdText_3);
        buttonDiv.appendChild(createdButton);

        // Append title, info, and button divs to the main div
        createdDiv.appendChild(titleDiv);
        createdDiv.appendChild(infoDiv);
        createdDiv.appendChild(buttonDiv);

        // Add classes to divs for styling
        createdDiv.classList.add("book");
        createdDiv.classList.add(index);
        titleDiv.classList.add("book-title");
        infoDiv.classList.add("book-info");
        buttonDiv.classList.add("book-button");

        // Add classes to buttons for styling
        createdButton.classList.add("green-button");
        deleteButton.classList.add("delete-button");

        // Append the div to the bookcase
        bookcase.appendChild(createdDiv);

        // increse index
        index++;
    });
    
    const deleteButton = document.querySelectorAll(".delete-button");
    const readButton = document.querySelectorAll(".green-button");

    deleteButton.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            console.log("Delete button is clicked");
            // Remove book from library
            let parentELement1 = event.target.parentElement;
            console.log(parentELement1);
            parentELement2 = parentELement1.parentElement;
            console.log(parentELement2);
            // Remove book from bookcase
            parentELement2.remove();

            myLibrary.splice(parentELement2.classList[1], 1);

        });
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

