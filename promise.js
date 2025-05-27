const myFirstPromise = new Promise(function (resolve, reject) {
  console.log("Promise executor function is running..."); //这行是同步执行的。
  setTimeout(() => {
    const success = Math.random() > 0.5; //模拟成功或失败
    if (success) {
      resolve("Operation was successful! data received."); //状态变为fulfilled
    } else {
      reject(new Error("Operation failed!")); //状态变为rejected
    }
  }, 1000); //模拟异步操作
});

myFirstPromise
  .then((result) => {
    console.log("Success:", result); //如果状态变为fulfilled，执行这个回调
  })
  .catch((error) => {
    console.error("Error:", error.message); //如果状态变为rejected，执行这个回调
  });
