function Vehicle() {
  this.hasEngine = true;
}
Vehicle.prototype.wheels = 4; //all vehicles default have 4 wheels
Vehicle.prototype.start = function () {
  console.log("Engine started!");
};

const car = new Vehicle();
const motorcycle = new Vehicle();

console.log(car.wheels); // 4
console.log(motorcycle.wheels); // 4

//属性屏蔽：在实例上设置同名属性
motorcycle.wheels = 2; //设置摩托车的轮子数
console.log(motorcycle.wheels); // 2
console.log(Object.getPrototypeOf(motorcycle).wheels); // 4
console.log(car.wheels); // 4

car.start(); // "Engine started!"
motorcycle.start(); // "Engine started!"
motorcycle.start = function () {
  console.log("Motorcycle engine started!");
};
car.start(); // "Engine started!"
motorcycle.start(); // "Motorcycle engine started!"
console.log(car.start === motorcycle.start); // false
//如果在原型上修改
Vehicle.prototype.wheels = 6; //所有车辆默认有6个轮子
console.log(car.wheels); // 6
console.log(motorcycle.wheels); // 2
