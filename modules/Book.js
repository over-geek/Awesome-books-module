export const libraryCollection = document.getElementById('library');

// Book Class
export default class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
}