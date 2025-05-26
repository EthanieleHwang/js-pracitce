function TraditionalTimer() {
  this.seconds = 0;
  this.message = "传统函数计时器";

  //使用传统函数作为setTimeout的回调
  setTimeout(function () {
    console.log("传统setTimeout this:", this); // this指向全局对象或undefined（在严格模式下）
    console.log("传统setTimeout this.message:", this.message);
  }, 100);
}

function ArrowTimer() {
  this.seconds = 0;
  this.message = "箭头函数计时器";

  //使用箭头函数作为setTimeout的回调
  setTimeout(() => {
    // 箭头函数不会创建自己的this，它会捕获外部函数的this
    // 因此这里的this指向ArrowTimer实例
    console.log("箭头函数setTimeout this:", this); // this指向ArrowTimer实例
    console.log("箭头函数setTimeout this.message:", this.message);
  }, 200);
}

const traditionalTimerInstance = new TraditionalTimer();
const arrowTimerInstance = new ArrowTimer();
