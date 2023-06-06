/* eslint-disable class-methods-use-this */
import StoreBookData from './bookData.js';

export default class Layout {
  static displayBooks() {
    const storedBooks = StoreBookData.getBooksData();
    storedBooks.map((book) => Layout.bookTemplate(book));
  }

  static bookTemplate(book) {
    const libraryCollection = document.getElementById('library');
    libraryCollection.innerHTML += `
      <div class="added-books-container">
        <div>
          <p>"${book.title}" by ${book.author}</p>
        </div>
        <div>
          <button id="${book.id}" type="button" class="remove-btn">Remove</button>
        </div>
      </div>
    `;
  }
}

document.addEventListener('DOMContentLoaded', Layout.displayBooks);