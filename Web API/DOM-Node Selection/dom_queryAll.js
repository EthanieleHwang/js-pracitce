console.log("\n--- querySelectorAll Examples ---");

// 1. 选择所有 class 为 'item' 的 li 元素
const allListItems = document.querySelectorAll("li.item");
console.log("All List Items (NodeList):", allListItems); // NodeList 包含3个 <li>
console.log("Number of items:", allListItems.length); // 3

// 遍历 NodeList (可以使用 forEach)
allListItems.forEach((item, index) => {
  console.log(`Item ${index + 1} text:`, item.textContent);
});

// 2. 选择所有 class 为 'highlight' 的 p 元素
const allHighlightParagraphs = document.querySelectorAll("p.highlight");
console.log("All Highlight Paragraphs:", allHighlightParagraphs); // NodeList 包含2个 <p>

// 3. 使用更复杂的CSS选择器：选择 id 为 'container' 下的所有 p 元素 或 所有 li 元素
const paragraphsAndListItemsInContainer = document.querySelectorAll(
  "#container p, #container li"
);
console.log(
  "Paragraphs and List Items in Container:",
  paragraphsAndListItemsInContainer
); // NodeList 包含 2个<p>和3个<li>

// 4. 如果选择器匹配不到任何元素
const noMatches = document.querySelectorAll(".this-class-does-not-exist");
console.log("No Matches (NodeList):", noMatches); // 空的 NodeList
console.log("Length of noMatches:", noMatches.length); // 0
