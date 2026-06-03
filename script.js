let library = [];

function book(name, author, genre, yearOfRelease) {
    this.name = name;
    this.author = author;
    this.genre = genre;
    this.yearOfRelease = yearOfRelease;
}

function addBookToLibrary(name, author, genre, yearOfRelease) {
    newBook = new book(name, author, genre, yearOfRelease)
    library.push(newBook);
}