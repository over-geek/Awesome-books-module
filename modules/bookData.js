export default class StoreBookData {
  static getBooksData = () => {
    let books;
    if (localStorage.getItem('data') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('data'));
    }
    return books;
  }

  static addBook = (book) => {
    const books = StoreBookData.getBooksData();
    books.push(book);
    localStorage.setItem('data', JSON.stringify(books));
  }
}