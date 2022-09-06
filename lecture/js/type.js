// 출처:  Alice Javascript 강의 실습 문제
// 변수 선언 초기화
var fruit = "apple";
var box = "banana";

console.log(fruit);
console.log(box);

// 데이터 변경
fruit="tomato";
console.log(fruit);

// 변수 타입 에러
var und; 
console.log("print undefined", und);  // undefined 출력

// 데이터 타입 
// string, number, function, array, object, undefined, null, boolean 


// string(문자열)
var str1 = "Hello World!";
var str2 = "Nice to meet you";
var str3 = "She's a girl";

console.log("data type string(1)", str1);
console.log("data type string(2)", str2);
console.log("data type string(3)", str3);

// number(숫자)
var num1 = 10;
var num2 = 3.14;
console.log("addNumber", num1 + num2);  // 13.14

// function(함수)

// 1. 함수 표현식
var sum = function(num1, num2) {
  return num1 + num2;
}

var result = sum(10, 20);
console.log("addNumber result", result);   // 30

// 2. 함수 선언식 
function mul(num3, num4) {
  return num3 * num4;
}

console.log(mul(3, 4));   // 12

// 배열(array) 
var fruit = ["Apple", "Banana"];  // [ 'Apple', 'Banana' ]
console.log(fruit);               // 배열의 전체 데이터
console.log(fruit[0]);            // 배열의 첫번째 데이터: Apple

// 배열의 데이터 변경 
fruit[0] = "Tomato";  


// 객체(object)
var student = {
  name: "Elice",
  age: 20,
  skils: ["Java", "HTML", "CSS", "Javascript"],
  sum: function(num1, num2) {
    return num1 + num2;
  }
};

// 객체 프로퍼티의 데이터 변경 
student.name = "Mike";
console.log("학생 이름: ", student.name);   // Mike

// 객체 메서드 데이터 출력
student.sum(10, 30);
console.log(student.sum(10, 30));  // 40


// undefined, null 
// undefined: 변수를 선언했지만 값이 할당되지 않은 상태
// null: 변수 안에 빈 데이터를 삽입한 상태
var str4; 
var str5 = null;
console.log("str4:undefined", str4, typeof(str4));  // undefiend, type: undeifned
console.log("str5:null", str5, typeof(str5));       // null, type: object


// boolean: 참과 거짓을 판별할 수 있는 상태
var agree = true;
var disagree = false;

console.log(agree, disagree);                 // true, false
console.log(typeof agree, typeof disagree);  // boolean, boolean

// 미션 
// 2차원 배열 데이터 접근해서 3000 값 출력
var arrTest = [
  [100, 200, 300],
  [1000, 2000, 3000],
  [1111, 2222, 3333]
];

console.log(arrTest[1][2]);   // 3000