let library = [];

function Book(name, author, genre, yearOfRelease, id) {
    this.name = name;
    this.author = author;
    this.genre = genre;
    this.yearOfRelease = yearOfRelease;
    this.id = id;
}

function addBookToLibrary(name, author, genre, yearOfRelease) {
    const id = crypto.randomUUID();
    const newBook = new Book(name, author, genre, yearOfRelease, id);
    library.push(newBook);
}