// 연습 문제 1
// 2단 부터 9단 까지
// (for문, while문)

/* 제공 답안 */
console.log("==== for 구구단");
for (let dan = 2; dan <= 9; dan++) {
    // 단루프
    console.log(dan + "단");
    for (let num = 1; num <= 9; num++){
        console.log(`${dan} * ${num} ${dan * num}`);
    }
    console.log();
}

/* 내가 풀은 문제 */
for(var i=2; i< 10; i++){
    for (var j=1; j <= i; j++) {
        console.log(i +" * " + j +" = " +(i*j));
    }
   
}

/* 구현하지 못함 */
console.log("==== while 구구단");
let dan = 2;
while(dan <= 9){
    // 단 루프
    let num = 1;
    console.log(dan + "단");
    while(num <= 9){
        console.log(`${dan} * ${num} ${dan * num}`);
        num++;
    }
    console.log();
    dan++;  /* dan++: 무한루프 방지 */
}
    

// 연습문제 
// *****
// ****
// ***
//**
//*
// (for문, while문)

/* for문 별문제 -> 다시 해보기 */
console.log("==== for star");
for(let count = 5; count >= 1; count--){
    let stars = "";
    for (let col = 1; col <= count; col++){
        stars += "*";
    }
    console.log(stars);
}

console.log("====while star");
let count = 5;
while ( count > 0){
    let stars = "";
    let col = 1;
    while (col <= count) {
        stars += "*";
        col++;
    }
    console.log(stars);
    count--;
}

// ES6 : for ... in
//       객체의 속성(프로퍼티)를 순회
// E6 : for ... of
let obj = {
    name: "홍길동",
    age: 28,
    job: "도적",
    gender: "남성"
}
console.log("==== for ... in");

for(let key in obj) {
    // for ... in : 객체의 속성을 순회
    console.log(key, "->", obj[key]);
}

const arr = [5, 1, 4, 3, 2, 9, 8, 9,];
for (let key in arr) {
    console.log(key);
}

console.log("==== for ... of");
for(let value of arr) {
    // for ... of : 반복 가능 객체에서 요소를 하나씩
    console.log(value);
}

// for... of 는 순회 객체(배열 등)에서만 사용
// for (let value of obj){
    // console.log(value);
// } -> Error: obj는 순회 객체 아님

// 주의 : for ...in 과 for ... of를 구분해서 사용