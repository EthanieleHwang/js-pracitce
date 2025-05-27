function fetchDataPromise(shouldSucceed) {
  return new Promise((resolve, reject) => {
    console.log("Promise:Fetching data...");
    setTimeout(() => {
      if (shouldSucceed) {
        resolve({
          data: "Sample Data fromo Promise",
          timestamp: DataTransfer.now(),
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
processDataWithThenCatch();
