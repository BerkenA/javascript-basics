const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        available: true
    },
    {
        title: "1984",
        author: "George Orwell",
        available: false
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        available: true
    }
];

const bookContainer = document.querySelector(".book-container");
console.log(bookContainer);

const totalBooks = books.length;
console.log(totalBooks);

let html = "";

for (let i = 0; i < totalBooks; i++) {
    html += `
        <div>
            <p>
                ${books[i].author}
            </p>
            <p>
                ${books[i].title}
            </p>
            <p>
                Available: ${books[i].available ? "Yes" : "No"}
            </p>
        </div>
    `
}

bookContainer.innerHTML = html;

// for () {

// }