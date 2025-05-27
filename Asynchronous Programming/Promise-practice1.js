function getUserDataPromise(userId) {
  return new Promise((resolve, reject) => {
    function getUserData(userId, callback) {
      setTimeout(() => {
        if (userId === 1) {
          callback(null, { id: 1, name: "Alice" });
        } else {
          callback(new Error("User not found"), null);
        }
      }, 1000);
    }
    getUserData(userId, (error, user) => {
      if (error) {
        reject(error);
      } else {
        resolve(user);
      }
    });
  });
}
getUserDataPromise(1)
  .then((user) => {
    console.log("User data:", user);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
getUserDataPromise(2)
  .then((user) => {
    console.log("User data:", user);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
