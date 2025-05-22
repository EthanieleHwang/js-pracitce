const myBook = {
  title: "JavaScript 忍者秘籍",
  author: "John Resig",
  publicationYear: 2016,
  genres: ["编程", "JavaScript", "Web开发"],
  getSummary: function () {
    return `《${this.title}》by [${this.author}], published in [${this.publicationYear}]`;
  },
};

console.log(myBook.getSummary());

function createCar(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.displayInfo = function () {
    console.log(`[${this.year}][${this.model}]`);
  };
}
const myCar = new createCar("Toyota", "Camry", 2020);
const myCar2 = new createCar("Honda", "Civic", 2021);
myCar.displayInfo();
myCar2.displayInfo();
