// 함수 선언식
function sum(a, b) {    // 매개변수 a, b를 입력받음
    return a + b; 
    // return 함수 종료, 출력 데이터를 반환할 수 있음
    // return이 있다면 함수의 실행 결과를 반환함.

}

// 함수 호출
console.log("SUM:", sum(10,20));

// 함수 표현식: 이름이 없는 함수 -> 익명함수
// 그 자체로 독립된 객체 
//       - 변수에 할당될 수 있다.
//       - 다른 함수의 매개변수로 전달될 수 있다.

const asum = function(a,b){
    return a + b;
}
console.log(typeof asum, asum(10,2));

// * 다시 한번 이해하기!!
// 익명 함수의 활용 1. 즉시 실행 함수 
let initText;
(function(number) {
     // 초기화
    // -> 만든 임시변수들 사용
    // -> 초기화 끝나면 필요없는 변수들
    let textList = ["홀수", "짝수"];  
    // 초기화에만 사용될 임시변수
   
    if( number % 2 == 0) {
        initText = textList[1];
    } else {
        initText = textList[0];
    }
    console.log(`인수 ${number}를 이용하여 즉시 실행하였습니다.`);
})(5);
console.log(initText);
// console.log(textList); -> Error: 스코프 종료

console.log("====arguments");
// 함수의 매개변수
// JavaScript는 선언부의 매개 변수 갯수와 상관없이
// 모든 매개변수가 arguments라는 이름의 배열로 전달

// 매개변수를 선언하지 않더라도 선언된 매개변수가 자동으로 arguments에 할당됨
function getNumberTotal() {     // 매개변수를 선언하지 않음
    // console.log(arguments, arguments.length);
    // 모든 매개변수가 arguments로 전달된다.
    let result = 0;
    for (let i = 0;  i < arguments.length; i++) {
        if (typeof arguments[i] == "number") {
            result += arguments[i];
        }
      
    }
    return result;
}

console.log(getNumberTotal());  // 매개변수 없음
console.log(getNumberTotal(1, 2, 3, 4, 5));     // 매개 변수 5개
console.log(getNumberTotal(1, 2, "3", 4, 5)); 
// 52줄 코드가 없다면 출력은? 
// 3 + "3" -> "33" + 4 -> "334" + 5 -> "33345" 
// 52줄 코드가 있다면 출력은?
// 12


console.log("===== Callback");
// 함수는 문법적 기능이 아니라, 독립된 객체

function usingCallback(val1, val2, func) {   // -> 로직 미정 상태
    // 기능을 미정 상태로 두고
    // 함수 호출시 외부로부터 실행 로직을 전달
    // 거꾸로 호출 : Callback 함수
    if (typeof func == "function") {   // ->  매개변수 = func
        // 매개변수는 func이다.
        func(val1, val2); // -
    }
}

usingCallback(7, 5, function(v1,v2) {  // -> 매개 변수를 함수 자체로 전달함
     console.log(v1 + v2);  // 실행 로직을 주입
});

usingCallback(7, 5, function(v1,v2) {
    console.log(v1 * v2);  // 실행 로직을 호출시 주입
});

//  화살표 함수:  =>
// 매개 변수 없는 경우
const f1 = function() { return "hello"}; //  스코프 this 다르다
const f1Arrow = () => "hello";   // 스코프 this 다르다   // 매개 변수가 없을 시 ()로 해준다.
// 독자 스코프 (x)

console.log(f1(), typeof f1);
console.log(f1Arrow(), typeof f1Arrow);

// 매개변수가 단일인 경우
const f2 = function(name) { return "hello" + name};
const f2Arrow = name => "Hello" + name;   // 매개 변수가 있는 경우 ()안해도 된다.

console.log(f2("홍길동"));
console.log(f2Arrow("홍길동"));

// 매개 변수가 여러 개인 경우
const f3 = function(a,b) { return a + b };
const f3Arrow =  (a,b) => a + b;

console.log(f3(7,5));
console.log(f3Arrow(7,5));

// 콜백함수를 전달할 때 활용
usingCallback(10, 20, (v1, v2) => { console.log(v1 + v2) });