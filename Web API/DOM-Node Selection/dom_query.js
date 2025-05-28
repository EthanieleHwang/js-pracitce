//1. 引入jsdom
const { JSDOM } = require("jsdom");
const htmlContent = `<div id="container">
  <p class="highlight important">First paragraph.</p>
  <p class="highlight">Second paragraph.</p>
  <ul>
    <li class="item">Item 1</li>
    <li class="item special">Item 2 (Special)</li>
    <li class="item">Item 3</li>
  </ul>
  <a href="#" id="mainLink">Click Me</a>
  <input type="text" name="username" placeholder="Username">
</div>`;

console.log("---querySelector Example---");

const dom = new JSDOM(htmlContent);
const document = dom.window.document;
const containerDiv = document.querySelector("#container");
console.log("Container Div:", containerDiv);

//2.选择第一个class为“highlight”的元素
const firstHighlight = document.querySelector(".highlight");
console.log("First Highlight Element:", firstHighlight);

// 3. 选择第一个 li 元素
const firstLi = document.querySelector("li");
console.log("First Li:", firstLi); // <li class="item">Item 1</li>

// 4.containerDiv 中选择第一个 class 为 "item" 的元素
const specialItemInContainer = document.querySelector("#container li.special");
console.log("Special Item in Container:", specialItemInContainer); // <li class="item special">Special Item</li>

// 5. 选择属性选择器：第一个 type 为 "text" 的 input 元素
const textInput = document.querySelector('input[type="text"]');
console.log("Text Input:", textInput); // <input type="text" ...>

// 6. 如果选择器匹配不到任何元素
const nonExistent = document.querySelector(".non-existent-class");
console.log("Non Existent:", nonExistent); // null
