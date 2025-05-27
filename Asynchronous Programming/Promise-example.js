console.log("\n--- Promise.all() Example ---");
function fetchUserProfile() {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ id: 1, name: "Alice" }), 800)
  );
}
function fetchUserPosts() {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          { postId: 101, title: "Post 1" },
          { postId: 102, title: "Post 2" },
        ]),
      1200
    )
  );
}
function fetchUserSettings() {
  //模拟一个可能失败的请求
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        resolve({ theme: "dark", notifications: true }); //成功返回设置
      } else {
        reject(new Error("Failed to load user settinsgs")); //模拟失败
      }
    });
  }, 500);
}

Promise.all([fetchUserProfile(), fetchUserPosts(), fetchUserSettings()])
  .then(([profile, posts, settings]) => {
    //使用数组解构获取结果
    console.log("All data fetched successfully:");
    console.log("Profile:", profile);
    console.log("Posts:", posts);
    console.log("Settings:", settings);
    //在这里可以渲染用户主页。
  })
  .catch((error) => {
    console.error("Error fetching data:", error.message);
    //在这里可以显示错误信息或执行其他错误处理逻辑。
  });
