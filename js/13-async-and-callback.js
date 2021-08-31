function logicA() {
  console.log("begin logicA");

  setTimeout(() => {  // {} : callback 수행
    console.log("callbackA called");
    console.log("begin")
    setTimeout(() => {  // {}: callback 수행
      console.log("callbackB called");
    }, 2000);
    console.log("end logicB");
  }, 2000);   // 2초 후에 콜백 함수 시행
  console.log("end logicA");
}
// logicA();


// 비동기(Promise)
// * 객체로써 언제가 완료될 일을 나타냄
// * 콜백지옥을 벗어나서 비동기코드를 동기 코드처럼 실행할 수 있는 방법.

function logicPromise() {
    console.log("begin logicPromise");

    // 비동기 처리를 위한 Promise 객체 생성
    return new Promise((resolve, reject) => {
      // resolve: 성공했을 때 값을 전달
      // reject: 실패했을 때 사유를 전달
      setTimeout(() => {
        resolve("Success");   // 비동기 처리에 성공하면 resolve 함수를 실행한다.
      }, 2000);
      console.log("end logicPromise");
    });
}

function testLogicPromise() {
  console.log("Test Logic Promise");
  logicPromise()  // : 비동기 수행 결과
    .then(value =>{  // : 콜백으로 전달
      // 성공했을 때
      console.log("PROMISE SUCCESS:", value);
    }) 
    .catch(reason => {
      // 실패했을 때
      console.error("PROMISE FAILED:", reason);
    })
}
// testLogicPromise();

// async/await는 Promise를 좀 더 쉽게 다룰 수 있게 해줌
async function asyncFunc() {
    console.log("async function");
    return "SUCCESS";
}

// async 함수는 항상 Promise를 리턴함
asyncFunc() 
.then(value => {
  console.log(value);
});