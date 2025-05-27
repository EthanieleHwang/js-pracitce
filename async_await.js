function fetchDataPromise(shouldSucceed) {
  return new Promise((resolve, reject) => {
    console.log("Promise:Fetching data...");
    setTimeout(() => {
      if (shouldSucceed) {
        resolve({
          data: "Sample Data fromo Promise",
          timestamp: Date.now(),
        });
      } else {
        reject(new Error("Promise:Failed to fetch data"));
      }
    }, 1000);
  });
}

//使用.then().catch()
function processDataWithThenCatch() {
  console.log("Use .then().catch() to process data");
  fetchDataPromise(true)
    .then((response) => {
      console.log("Data received:", response.data);
      //假设这里有进一步处理，也可能抛错
      if (response.data.includes("Error")) {
        throw new Error("Invalid data format in .then()");
      }
      return response.data.toUpperCase();
    })
    .then((upperCaseData) => {
      console.log("Uppercased data:", upperCaseData);
    })
    .catch((error) => {
      console.error("Error cauht:", error.message);
    })
    .finally(() => {
      console.log(".then().catch() processing finished.\n");
    });

  // fetchDataPromise(false)
  //   .then((response) => {
  //     console.log("Data received:", response.data);
  //   })
  //   .catch((error) => {
  //     console.error("Error caught:", error.message);
  //   })
  //   .finally(() => {
  //     console.log(".then().catch() processing for failure finished.\n");
  //   });
}

//使用async/await
async function processDataWithAsyncAwait() {
  console.log("Use async/await: to process data");

  //尝试成功
  console.log("Attempting successful fetch with async/await...");
  try {
    const response = await fetchDataPromise(true);
    console.log("Data received:", response.data);
    // 假设这里有进一步处理，也可能抛错
    if (response.data.includes("Error")) {
      throw new Error("Invalid data format in async function"); // 这个错误会被下面的 catch 捕获
    }
    const uppercasedData = response.data.toUpperCase();
    console.log("Uppercased data:", uppercasedData);
  } catch (error) {
    console.error("Error caught in async/await:", error.message);
  } finally {
    console.log("Async/await processing finished.\n");
  }
}
processDataWithAsyncAwait();
