function createMultiplier(factor) {
  return function (x) {
    return x * factor;
  };
}
const d1 = createMultiplier(2);
console.log(d1.toString()); // [Function]
console.log(d1(3));

console.log("-----------------");

function greet(name, formattingFunction) {
  return formattingFunction(name);
}

function upperCaseFormatter(text) {
  return text.toUpperCase();
}
function lowerCaseFormatter(text) {
  return text.toLowerCase();
}

console.log(greet("Alice", upperCaseFormatter)); // ALICE
console.log(greet("Bob", lowerCaseFormatter)); // bob

//高阶函数的应用实例
//1.forEach(callbackFn)方法
console.log("------------------------ ");
const fruits = ["apple", "banana", "cherry"];
fruits.forEach(function (fruit, index) {
  console.log(`Fruit at index ${index}: ${fruit.toUpperCase()}`);
});

//2.map(callbackFn)方法
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(function (num) {
  return num * num;
});
console.log(squaredNumbers); // [1, 4, 9, 16, 25]
console.log(numbers); // [1, 2, 3, 4, 5]

//3.filter(callbackFn)
const ages = [12, 18, 25, 10, 30];
const adults = ages.filter(function (age) {
  return age >= 18;
});
console.log(adults); //输出

//4.reduce

console.log("-----------------");
const scores = [80, 90, 72, 100, 60];
//使用reduce计算总分
const sum = scores.reduce(function (accumulator, currentValue) {
  console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
  return accumulator + currentValue;
}, 0);

console.log("sum:", sum); // 输出: sum: 402

//使用reduce计算平均分
//注意：如果数组为空，初始值将被返回
const average = scores.length > 0 ? sum / scores.length : 0;
console.log("average:", average); // 输出: average: 80.4

console.log("-----------------");
//5.find(callbackFn)
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
const firstAlice = users.find(function (user) {
  return user.name === "Alice";
});
console.log(firstAlice); // 输出: {id: 1, name: "Alice"}
