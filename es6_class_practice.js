class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
  displayInfo() {
    return `${this.title} by ${this.author}, ${this.pages} pages`;
  }
  static compareBooks(bookA, bookB) {
    if (!(bookA instanceof Book) || !(bookB instanceof Book)) {
      throw new Error("Both arguments must be instances of the Book class");
    }
    if (bookA.pages > bookB.pages) {
      return `${bookA.title} is longer than ${bookB.title}`;
    } else if (bookA.pages < bookB.pages) {
      return `${bookA.title} is shorter than ${bookB.title}`;
    } else {
      return `${bookA.title} and ${bookB.title} have the same number of pages`;
    }
  }
}
const book1 = new Book("the power of now", "Eckhart Tolle", 200);
const book2 = new Book("the alchemist", "Paulo Coelho", 300);
console.log(book1.displayInfo()); // the power of now by Eckhart Tolle, 200 pages
console.log(book2.displayInfo()); // the alchemist by Paulo Coelho, 300 pages
// 通过静态方法比较两本书
console.log(Book.compareBooks(book1, book2)); // the power of now is shorter than the alchemist
class Ebook extends Book {
  constructor(title, author, pages) {
    super(title, author, pages); //调用父类构造函数
    this.fileFormat = "EPUB"; //默认文件格式
  }
  displayInfo() {
    return `${super.displayInfo()}, Format: ${this.fileFormat}`;
  }
}
const ebook1 = new Ebook("computer science", "John Doe", 500);
ebook1.fileFormat = "PDF";
console.log(ebook1.displayInfo()); // computer science by John Doe, 500 pages, Format: PDF
