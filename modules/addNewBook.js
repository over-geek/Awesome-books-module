import Book from './Book.js';
import StoreBookData from './bookData.js';
import Layout from './layout.js';

const title = document.getElementById('book-title');
const author = document.getElementById('book-author');
const bookForm = document.getElementById('addBook-form');
const dash = document.getElementById('dash');

// add book method
const addNewBook = () => {
  const bookCollection = StoreBookData.getBooksData();
  if (title.value !== '' && author.value !== '') {
    const id = bookCollection.length;
    const book = new Book(id, title.value, author.value);
    StoreBookData.addBook(book);
    Layout.bookTemplate(book);
    bookForm.reset();
    if (bookCollection.length > 0) {
      dash.style.display = 'block';
    }
  }
};

export default addNewBook;