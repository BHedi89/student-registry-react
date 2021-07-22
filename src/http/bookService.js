const FIREBASE_DOMAIN =
  "https://students-administration-67d7b-default-rtdb.europe-west1.firebasedatabase.app";

export class Book {
  constructor(
    isbn,
    title,
    subtitle,
    author,
    published,
    publisher,
    pages,
    description,
    website
  ) {
    this.isbn = isbn;
    this.title = title;
    this.subtitle = subtitle;
    this.author = author;
    this.published = published;
    this.publisher = publisher;
    this.pages = pages;
    this.description = description;
    this.website = website;
  }
}


export function addNewBook(studentId, book) {
    return fetch(`${FIREBASE_DOMAIN}/students/${studentId}/books.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isbn: book.isbn,
          title: book.title,
          subtitle: book.subtitle,
          author: book.author,
          published: book.published,
          publisher: book.publisher,
          pages: parseFloat(book.pages),
          description: book.description,
          website: book.website
        }),
      })
      .then(resp => resp.json());
}