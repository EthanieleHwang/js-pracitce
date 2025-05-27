function Vehicle() {}
console.log(Vehicle.prototype.constructor === Vehicle);

const v = new Vehicle();
console.log(v.constructor === Vehicle); // true
const v2 = new v.constructor();
console.log(v2 instanceof Vehicle); // true

console.log("---------------------------- ------------------");

function Book(title, author) {
  this.title = title;
  this.author = author;
}
Book.prototype.getSummary = function () {
  return `《${this.title}》by [${this.author}]`;
};
const myBook = new Book("JavaScript 忍者秘籍", "John Resig");
const myBook2 = new Book("JavaScript 高级程序设计", "Nicholas C. Zakas");
console.log(myBook.getSummary());
console.log(myBook2.getSummary());

console.log(myBook.getSummary === myBook2.getSummary); // true
