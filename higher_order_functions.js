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
