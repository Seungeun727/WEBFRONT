// 한줄 주석
/* 
    여러 줄 주석
    : JavaScript 주석은 C, Java와 동일
*/
// 내장 객체 console
console.info("정보 메세지");  
console.debug("디버그 메시지");
console.warn("경고 메시지");
console.log("에러 메시지");

console.log("Hello, JavaScript!");
// js/01-basic.js를 node로 실행한다.

// 연속으로 데이터를 출력 -> , 로 구분
console.log("String", 2021, true);

// 현재 플랫폼 정보 출력
console.log("Process Version:", process.version);
console.log("Process platform:", process.platform);

// 객체의 속성 접근: .으로 접근
console.log(Math.PI); // Math 객체 속성인 PI
console.log(Math.max(1, 3, 2, 4, 9, 5))

// JavaScript는 컴파일 언어 x
//          : 인터프리터 언어(대화형 언어) o -> 실행하지않으면 Error(x)
//            -> 즉시 실행하기 때문에 작업시간이 단축된다.
//            -> 컴파일러는 목적 파일 생성 o , 인터프리터는 목적파일 생성 x 
//            -> 종류: 파이썬, Ruby 등이 있음

console.log("------------");

// var, let, const
var testVar = 10;   // 전통적 할당 방법 : 가급적 var 사용을 지양.

// let, const -> 변수의 스코프는 Block 단위
let testLet = "let";  // let -> 변경 가능
const TEST_CONST = "const";  //  const -> 변경 불가
// const는 변경 불가로 상수처럼 활용, 선언과 동시에 할당해야 한다.

console.log("testVar:", testVar);
console.log("testLet:", testLet);
console.log("TEST_CONST:", TEST_CONST);

// 값의 변경
testVar = "changed";
testLet = "changed";
// TEST_CONST = "changed";  // -> Error: 변경할 수 없다.

console.log("testVar:", testVar);
console.log("testLet:", testLet);
console.log("Test_CONST:", TEST_CONST);

console.log("----------");
// JavaScript는 동적 타입 언어
//     데이터 타입이 고정되지 않았고
//     데이터가 할당 되었을 때, 그 타입이 결정
let v = "This is String";
// 데이터 타입을 체크해야 한다.
console.log(v, "=>", typeof v);
// 다른 데이터 타입 할당
v = 2021;
console.log(v, "=>", typeof v);