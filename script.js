let library = [];

function Book(name, author, genre, yearOfRelease, id) {
    this.name = name;
    this.author = author;
    this.genre = genre;
    this.yearOfRelease = yearOfRelease;
    this.id = id;
}

function addBookToLibrary(name, author="Unknown", genre="NIL", yearOfRelease="NIL") {
    const id = crypto.randomUUID();
    const newBook = new Book(name, author, genre, yearOfRelease, id);
    library.push(newBook);
}

function createBookCard(book) {
    const card = document.createElement("div");
    card.classList.add("book-card");

    card.innerHTML = `
        <h2>${book.name}</h2>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Genre:</strong> ${book.genre}</p>
        <p><strong>Released:</strong> ${book.yearOfRelease}</p>
        <p><strong>ID:</strong> ${book.id}</p>
    `;

    return card;
}

function displayBook(books) {
    const container = document.querySelector("#library");

    for(const book of books) {
        const card = createBookCard(book);
        container.appendChild(card);
    }
}

function openDialog(openButton, dialog) {
    openButton.addEventListener("click", () => {
        dialog.showModal();
    });
}

function closeDialog(closeButton, dialog) {
    closeButton.addEventListener("click", () => {
        dialog.close();
    })
}

function openNewBookDialog() {
    const openButton = document.querySelector("#new-book-button");
    const dialog = document.querySelector(".add-new-book");

    openDialog(openButton, dialog);
}
openNewBookDialog();

function closeNewBookDialog() {
    const closeButton = document.querySelector("#close-dialog-button");
    const dialog = document.querySelector(".add-new-book");

    closeDialog(closeButton, dialog);
}
closeNewBookDialog();