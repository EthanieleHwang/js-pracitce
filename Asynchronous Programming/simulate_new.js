function myNew(Constructor, ...args) {
  const newInstance = Object.create(Constructor.prototype);
  const result = Constructor.apply(newInstance, args);
  if (
    (typeof result === "object" && result !== null) ||
    typeof result === "function"
  ) {
    return result;
  } else {
    return newInstance;
  }
}

//测试
function Person(name, age) {
  this.name = name;
  this.age = age;
  // return {name: '小白', age: 18};
}
// TypeError: obj1.toString is not a function
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const person1 = myNew(Person, "小白", 18);
const person2 = myNew(Person, "小红", 20);

person1.sayHello(); // Hello, my name is 小白
person2.sayHello(); // Hello, my name is 小红
console.log(person1 instanceof Person); // true
console.log(person2 === Person); // true
