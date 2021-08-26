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