console.log("--- Basic Async Callback Example ---");

// 主函数，模拟一个耗时的异步操作
function fetchDataFromServer(query, callback) {
  console.log(`Fetching data for query: "${query}"...`);

  // 使用 setTimeout 模拟网络延迟
  setTimeout(function () {
    // 模拟成功获取数据
    const data = { id: 123, content: `Data related to "${query}"` };
    const error = null; // 表示没有错误

    // 模拟随机失败的情况
    // if (Math.random() > 0.7) {
    //   error = new Error("Network request failed!");
    //   data = null;
    // }

    // 异步操作完成，调用回调函数，并传递结果
    // 遵循错误优先的约定 (虽然这里简单模拟，实际中更重要)
    if (callback && typeof callback === "function") {
      callback(error, data);
    }
  }, 1500); // 模拟1.5秒延迟
}

// 定义回调函数来处理获取到的数据
function handleData(err, receivedData) {
  if (err) {
    console.error("Error fetching data:", err.message);
    return;
  }
  console.log("Data received successfully!");
  console.log("ID:", receivedData.id);
  console.log("Content:", receivedData.content);
}

// 调用主函数，并传入回调
console.log("Requesting data...");
fetchDataFromServer("userProfile", handleData);
fetchDataFromServer("productDetails", function (error, data) {
  // 也可以使用匿名回调
  if (error) {
    console.error("Product fetch error:", error.message);
    return;
  }
  console.log("Product data:", data);
});

console.log(
  "Request sent. Waiting for response... (This line executes before callbacks)"
);
