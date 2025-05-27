function Grandparent() {}
Grandparent.prototype.sayHelloGrandparent = function () {
  console.log("Hello from Grandparent");
};

function Parent() {}
Parent.prototype = Object.create(Grandparent.prototype);
Parent.prototype.constructor = Parent;
Parent.prototype.sayHelloParent = function () {
  console.log("Hello from Parent");
};

function Child() {}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
Child.prototype.sayHelloChild = function () {
  console.log("Hello from Child");
};

const myChild = new Child();
myChild.sayHelloChild(); // "Hello from Child"
myChild.sayHelloParent(); // "Hello from Parent"
myChild.sayHelloGrandparent(); // "Hello from Grandparent"
myChild.toString(); // "[object Object]"

//**使用 `Object.getPrototypeOf()` 逐步打印原型链：**
Object.getPrototypeOf(myChild); // Child.prototype
Object.getPrototypeOf(Object.getPrototypeOf(myChild)); // Parent.prototype
Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(myChild))); // Grandparent.prototype
Object.getPrototypeOf(
  Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(myChild)))
); // null

//**使用 `instanceof` 检查原型链：**
console.log(myChild instanceof Child); // true
console.log(myChild instanceof Parent); // true
console.log(myChild instanceof Grandparent); // true
console.log(myChild instanceof Object); // true
console.log(myChild instanceof Array); // false

//实践new操作符
function myNew(constructor, ...args) {
  // 1. 创建一个新对象
  const obj = Object.create(constructor.prototype);

  // 2. 调用构造函数，绑定this到新对象
  const result = constructor.apply(obj, args);

  // 3. 如果构造函数返回一个对象，则返回该对象，否则返回新创建的对象
  return typeof result === "object" && result !== null ? result : obj;
}

// 实践Object.create(null)
const obj1 = Object.create(null);
// obj1.toString; // TypeError: obj1.toString is not a function
// obj1.hasOwnProperty; // TypeError: obj1.hasOwnProperty is not a
obj1.name = "小白";
obj1.age = 18;
obj1.gender = "男";
for (let key in obj1) {
  console.log(`${key}: ${obj1[key]}`);
}
