function Animal(name) {
  this.name = name;
}
Animal.prototype.species = "未知物种";
Animal.prototype.eat = function () {
  console.log(this.name + "正在吃东西");
};

const lion = new Animal("辛巴");

//访问自身属性
console.log(lion.name); // "辛巴"
//访问原型属性
console.log(lion.species); // "未知物种"
//调用原型方法
lion.eat(); // "辛巴正在吃东西"
//访问不存在的属性
console.log(lion.age); // undefined

console.log("------------------");

const myObj = {}; //一个普通的空对象
//myObj自身没有toString方法，但可以调用它
console.log(myObj.toString()); // "[object Object]"
console.log(myObj.hasOwnProperty("name")); // false
console.log("-------------------");

//验证原型链
console.log(Object.getPrototypeOf(myObj) === Object.prototype); // true
console.log(Object.getPrototypeOf(Object.prototype)); //null

console.log("------------------");
//干净的对象
const pureObj = Object.create(null); //一个没有原型的对象
pureObj.name = "小白";
console.log(pureObj.name); // "小白"
// console.log(pureObj.toString()); // TypeError: pureObj.toString is not a function
// console.log(pureObj.hasOwnProperty("name")); // TypeError: pureObj.hasOwnProperty is not a function
console.log(Object.getPrototypeOf(pureObj)); // null

console.log("------------------");
function Gadget(name, price) {
  this.name = name;
  this.price = price;
  this.getInfo = function () {
    return `${this.name}的价格是${this.price}`;
  };
  console.log("Gadget constructor's this:", this);
}

const phone = new Gadget("手机", 6999);
const watch = new Gadget("手表", 1999);
console.log(phone.getInfo()); // "手机的价格是6999"

console.log("------------------");

//不返回或返回原始类型
function Box(value) {
  this.value = value;
  return 42; //返回原始类型
}
const b1 = new Box(1);
console.log(b1 instanceof Box); // true
console.log(b1.value); // 1

//返回对象
const myCustomObject = { custom: true };
function SpeciesBox(value) {
  this.value = value;
  return myCustomObject; //返回对象
}
const b2 = new SpeciesBox(1);
console.log(b2 === myCustomObject); // true
console.log(b2.value); // undefined
console.log(b2 instanceof SpeciesBox); // false

console.log("------------------");
//instanceof运算符
function A() {}
function B() {}

B.prototype = Object.create(A.prototype); //设置B的原型为A的实例
B.prototype.constructor = B; //修正B的构造函数指向
const bInstance = new B(); //创建B的实例
console.log(Object.getPrototypeOf(B.prototype) === A.prototype); // true
console.log(bInstance instanceof B); // true
console.log(bInstance instanceof A); // true
console.log(bInstance instanceof Object); // true

const aInstance = new A(); //创建A的实例
console.log(aInstance instanceof B); // false

const obj = {};
console.log(obj instanceof Object); // true
