//基类 Vehicle
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    console.log(`Vehicle created: ${this.make} ${this.model} (${this.year})`);
  }

  //父类的方法
  getDetails() {
    return `${this.year} ${this.make} ${this.model}`;
  }

  startEngine() {
    return `$(this.make) ${this.model} engine started!`;
  }
}

// 派生类 Car 继承自Vehicle
class Car extends Vehicle {
  constructor(make, model, year, numDoors, fuelType) {
    //1.在子类构造函数中调用父类构造函数
    super(make, model, year); //必须先调用父类构造函数
    this.numDoors = numDoors;
    this.fuelType = fuelType;
    console.log(
      `Car specific properties initialized: ${this.numDoors} doors, ${this.fuelType} fuel.`
    );

    //
  }
  // Car特有的方法
  honk() {
    return `${this.make} ${this.model} says:Beep beep!`;
  }

  // 重写父类的方法
  getDetails() {
    const vehicleDetails = super.getDetails(); //调用父类方法
    return `${vehicleDetails},Doors:${this.numDoors},Fuel Type:${this.fuelType}`;
  }

  //调用父类的其他方法
  startAndGo() {
    const starMessage = super.startEngine(); //调用父类方法的startEngine
    return `${starMessage} And it's ready to go!`;
  }
}

//创建Car实例
const myCar = new Car("Toyota", "Camry", 2020, 4, "Gasoline");
console.log(myCar.getDetails()); // 2020 Toyota Camry,Doors:4,Fuel Type:Gasoline
console.log(myCar.honk()); // Toyota Camry says:Beep beep!
console.log(myCar.startAndGo()); // Toyota Camry engine started! And it's ready to go!

//父类实例
const genericVehicle = new Vehicle("Generic", "Model", 2021);
console.log(genericVehicle.getDetails()); // 2021 Generic Model
