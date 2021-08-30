// 배열 생성: Array 객체로 생성
const v1 = new Array(10);   // 10개짜리 빈 배열
const v2 = new Array();     // 빈 배열
const v3 = new Array(2021, "String", true);   // 어떤 객체든 담을 수 있다.

// .length 속성 : 요소의 갯수
console.log("v1:", v1, v1.length);
console.log("v2:", v2, v2.length);
console.log("v3:", v3, v3.length);

// 리터럴 생성 (추천)
const v4 = [];
const v5 = [2021, "String", true];

// 배열 타입 확인시 typeof 사용하면 안된다.
// console.log("v4:", v4, typeof v4);
// console.log("v5:", v5, typeof v5);

// 배열 타입 확인: Array.isArray() 
console.log("v4:", Array.isArray(v4));    // v4가 Array인가?
console.log("v5:", Array.isArray(v5));    // v5가 Array인가?

// 기본 값으로 채우기: fill()
const v6 = new Array(10).fill(1);    /// 10개짜리 1개로 채워진 배열
console.log("v6:", v6);
v6.fill("defualt");   // v6를 default로 채움
console.log("v6:", v6);

// C, Java의 배열보다 다양한 용도로 활용
const person = {
  name: "홍길동",
  age: 28
}  // 객체의 속성 -> 배열처럼 접근 가능
console.log(person.name, person['name']);
console.log(person.age, person['age']);

// JS는 인덱스를 엄격히 체크하지 않는다.
const arr = []; // 빈 배열
console.log(arr, arr.length);

// 인덱스 범위 벗어난 접근  -> OK
arr[10] = 2021;
console.log(arr, arr.length); // 값이 정의 안됨

console.log("==== 배열의 메서드");
const veges = ["배추", "무", "쪽파"];
const sources = ["소금", "고춧가루", "새우젓"];

console.log(veges, sources);

// 배열 합치기 : concat
const items = veges.concat(sources);
console.log("CONCAT:", items);

// 배열 요소 합치기 : Join
console.log("JOIN:", items.join(","));  // 요소를 ,로 합치기