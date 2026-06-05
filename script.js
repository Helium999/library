let library = [];

function Book(name, author, genre, yearOfRelease, id, read) {
    this.name = name;
    this.author = author;
    this.genre = genre;
    this.yearOfRelease = yearOfRelease;
    this.id = id;
    this.read = read;
}

function addBookToLibrary(name, author, genre, yearOfRelease) {
    const id = crypto.randomUUID();
    const read = false;
    const newBook = new Book(name, author, genre, yearOfRelease, id, read);
    library.push(newBook);
}

function removeBook(removeButton) {
    removeButton.addEventListener("click", (e) => {
        library = library.filter(book => book.id !== e.target.dataset.bookId);
        const cardToBeRemoved = document.querySelector(`div[data-book-id="${e.target.dataset.bookId}"]`);
        cardToBeRemoved.remove();
    })
}

function addRemoveButtonInsideCard(card) {
    const removeButton = document.createElement("button");

    removeButton.dataset.bookId = card.dataset.bookId;
    removeButton.innerText = "Remove Book";

    card.appendChild(removeButton);

    removeBook(removeButton);
}

function markAsRead(readStatusButton) {
    readStatusButton.addEventListener("click", () => {
        if(readStatusButton.checked) {
            for(let book of library) {
                if(book.id === readStatusButton.dataset.bookId) {
                    book.read = true;
                }
                else {
                    book.read = false;
                }
            }
        }
    })
}

function addReadStatusButtonInsideCard(card) {
    const readStatusButtonLabel = document.createElement("label");
    const readStatusButton = document.createElement("input");
    
    readStatusButtonLabel.for = "readStatus";
    readStatusButtonLabel.innerText = "Mark as read";

    readStatusButton.type = "checkbox";
    readStatusButton.id = "readStatus";
    readStatusButton.name = "readStatus";
    readStatusButton.dataset.bookId = card.dataset.bookId;

    card.appendChild(readStatusButtonLabel)
    card.appendChild(readStatusButton)

    markAsRead(readStatusButton);
}

function createBookCard(book) {
    const card = document.createElement("div");
    card.classList.add("book-card");

    card.dataset.bookId = book.id;

    card.innerHTML = `
        <h2>${book.name}</h2>
        <p><strong>Author:</strong> ${book.author || "Not Specified"}</p>
        <p><strong>Genre:</strong> ${book.genre || "Not Specified"}</p>
        <p><strong>Released:</strong> ${book.yearOfRelease || "Not Specified"}</p>
        <p><strong>ID:</strong> ${book.id}</p>
    `;

    addRemoveButtonInsideCard(card);
    addReadStatusButtonInsideCard(card);

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

function displayNewBook(book) {
    const container = document.querySelector("#library");
    const card = createBookCard(book);

    container.appendChild(card);
}

function addNewBookToLibrary() {
    let name = document.querySelector("#name").value;
    if (!name.trim()) {
    alert("Book name is required");
    return;
    }
    let author = document.querySelector("#author").value;
    let genre = document.querySelector("#genre").value;
    let yearOfRelease = document.querySelector("#yearOfRelease").value;

    addBookToLibrary(name, author, genre, yearOfRelease);

    const newBook = library[library.length - 1];

    displayNewBook(newBook);
}

function submitNewBookDetails() {
    const submitButton = document.querySelector("#submit-book-details");

    submitButton.addEventListener("click", () => {
        addNewBookToLibrary()
        const dialog = document.querySelector(".add-new-book");
        dialog.close();

        document.querySelector("#name").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#genre").value = "";
        document.querySelector("#yearOfRelease").value = "";
    })
}
submitNewBookDetails();
