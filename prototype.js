function Vehicle() {}
console.log(Vehicle.prototype.constructor === Vehicle);

const v = new Vehicle();
console.log(v.constructor === Vehicle); // true
const v2 = new v.constructor();
console.log(v2 instanceof Vehicle); // true
