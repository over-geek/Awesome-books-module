import StoreBookData from './bookData.js';

const removeBook = (e) => {
  const dash = document.getElementById('dash');
  const bookCollection = StoreBookData.getBooksData();
  if (e.target.className === 'remove-btn') {
    const btnId = Number(e.target.id);
    const newArray = bookCollection.filter((book, index) => index !== btnId);
    if (bookCollection.length === 0) {
      dash.style.display = 'none';
    }
    e.target.parentNode.parentNode.remove();
    localStorage.setItem('data', JSON.stringify(newArray));
  }
}

export default removeBook;