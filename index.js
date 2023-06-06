import addNewBook from './modules/addNewBook.js';
import removeBook from './modules/removeBook.js';
import dateTime from './modules/date.js';

const addBtn = document.getElementById('add-btn');
const sectionBookList = document.getElementById('book-list');
const sectionNewBook = document.getElementById('new-book');
const contactSection = document.getElementById('Contact-section');
const listLink = document.querySelector('.list-link');
const newLink = document.querySelector('.new-link');
const contactLink = document.querySelector('.contact-link');

addBtn.addEventListener('click', addNewBook);
document.addEventListener('click', removeBook);

listLink.addEventListener('click', () => {
  sectionBookList.classList.remove('display-none');
  sectionNewBook.classList.add('display-none');
  contactSection.classList.add('display-none');
});

newLink.addEventListener('click', () => {
  sectionNewBook.classList.remove('display-none');
  sectionBookList.classList.add('display-none');
  contactSection.classList.add('display-none');
});

contactLink.addEventListener('click', () => {
  contactSection.classList.remove('display-none');
  sectionBookList.classList.add('display-none');
  sectionNewBook.classList.add('display-none');
});

window.addEventListener('load', () => {
  dateTime();
});