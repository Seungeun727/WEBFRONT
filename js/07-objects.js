// 객체의 생성
const person = new Object();    // 빈 객체
// 필요할 때 동적으로 속성 추가
person.name = "노승은";     // Property: 객체가 관리하는 정보
person.age = 50;           // Property
person.showInfo = function() {
    // 일반적으로 this는 객체 자신을 가리킨다.
    let message = `Name: ${this.name}, Age: ${this.age}`;
    console.log(message);
}   // 메서드

person.showInfo();  // 속성에 접근시 .으로 구분한다.


// JSON(Java Script Object Notation) - 중요!!
// 키: 값
// 속성은 ,로 구분 
const person2 = { 
    name: "홍길동",
    age: 28,
    showInfo: function() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

person2.showInfo();

// prototype 상속
const Member = function(name, position) {
    // 함수를 생성자로 활용
    this.name = name;
    this.position = position;
}

let m1 = new Member("강백호", "PF");
let m2 = new Member("서태웅", "SF");

console.log("m1:", m1);
console.log("m2:", m2);

// JavaScript는 동적으로 속성과 메서드를 추가할 수 있다.
m1.sayHi = function() {
    console.log(`${this.name}님이 당신을 부릅니다.`);
}
m1.sayHi();
// m2.sayHi(); -> Error 발생
// : 동적 추가된 속성, 메서드는 해당 객체에서만 활용되기 때문이다.

console.log("m1:", m1);
console.log("m2:", m2);

// 원래 객체의 prototype(고유 영역)을 이용하면 
// 해당 객체를 new한 모든 객체들이 속성을 공유할 수 있다.
// OOP의 상속 개념을 구현이 가능하다.

console.log("m1:",m1.constructor);
console.log("m2:",m2.constructor);
console.log("Member prototype:", Member.prototype); // 공유하는 속성 영역


// !! 다시 이해하기 
// prototypedp 영역에 속성을 추가할 수 있다.
// 해당 객체를 이용 new한 모든 객체가 공유할 수 있다.
Member.prototype.introduce = function() {
    console.log(`Name: ${this.name}, Age: ${this.position}`);
}
m1.introduce();
m2.introduce();
console.log("Member prototype:", Member.prototype); // 공유하는 속성 영역
// 나중에 속성이 추가되더라도 공유 영역을 이용할 수 있다.

// 기존 객체들에도 동적으로 속성을 추가할 수 있다.
String.prototype.sayHello = function() {
    return "Hello, " + this;
}

console.log("둘리".sayHello());


console.log("========== This Binding");

const testFunc = function(location) {   // : 인자값 서울이 매개변수의 값으로 들어감
    console.log(`나는 ${location}에 사는 ${this.name} 입니다.`);   // : global 영역에 name이 없어서 undefined 출력
    console.log("this는 global? ", this === global);
}

testFunc("서울");

const obj = { name: '홍길동' }   // 객체 생성
testFunc.call(obj, "서울");     // 함수 호출 시 함수 내부에 this를 obj와 연결한다.
// : this 값은 obj -> false 출력

testFunc.apply(obj, ["서울"]);  // 함수 내부의 this를 obj와 연결, 인자를 배열로 전달함


const boundTestFunc = testFunc.bind(obj);
// bind()는 함수 호출하지 않고 this가 새 객체로 연결된 새 함수를 반환
boundTestFunc("서울");
