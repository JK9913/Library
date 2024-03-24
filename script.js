const myLibrary = [{Title:"Harry Potter", Author:"J.K. Rowling",Genre:"Fantasy"},{Title: "LOTR", Author:"J.R.R. Tolkien", Genre: "Fantasy" },{Title: "Game of Thrones", Author: "George R.R. Martin", Genre: "Fantasy"}];
const bookcase = document.querySelector(".bookcase");



function displayBooks() {
    myLibrary.forEach(book => {
        // Create elements that go into the bookcase
        let createdDiv = document.createElement("div");
        let createdTitle = document.createElement("h2");
        let createdText_1 = document.createElement("p");
        let createdText_2 = document.createElement("p");

        // add text to elements
        createdTitle.textContent = "Title: " + book.Title;
        createdText_1.textContent = "Author: " + book.Author;
        createdText_2.textContent = "Genre: " + book.Genre;


        // append elements to div
        createdDiv.appendChild(createdTitle);
        createdDiv.appendChild(createdText_1);
        createdDiv.appendChild(createdText_2);

        createdDiv.classList.add("book");
        bookcase.appendChild(createdDiv);
    });
}

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

displayBooks();