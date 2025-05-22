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
