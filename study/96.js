// filter

//const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter()는 인자로 대입된 callback 함수를 통해 
// 배열 내부를 순환하고 특정 조건을 만족함

// 즉 filte()는 주어진 함수의 조건을 만족하는 모든 요소를 모아
// 새로운 배열로 반환한다.

// 1.
/*
const filterTwo = arr.filter( a => {  
  console.log(`현재의 위치의 값은 ${a} 입니다.`);
  return a % 2 == 0;  // 해당 조건을 확인하여 true/false를 반환
});
console.log(filterTwo);

// 2.
const filterThree = arr.filter(a => a % 2 == 0);
console.log(filterThree);

const data = [1, 2, 3, 4, 5]

// 3.
const oddNumber = data.filter(val => {
    return val % 2 != 0
});
console.log(oddNumber);

// 4.
const words = ['banana','apple', 'watermelon', 'pear', 'cherry', 'strawberry'];
const result = words.filter(word => word.length > 6);
console.log(result);
*/
// map

const arr1 = [
  {id: 0, name: '혜림', age: 6},
  {id: 1, name: '현일', age: 3},
  {id: 2, name: '현아', age: 5},
  {id: 3, name: '우림', age: 2}
];

const arr2 = arr1.map( el => { // map()를 통해 arr1의 배열의 요소가 el로 전해짐
    el.age += 1;
    return el;  // callback 함수 el값에 따라 반환되는 배열 값이 바뀐다.
  
});

const arr3 = arr1.map(el => el.name);  // name속성만 반환함

console.log(arr2);
console.log(arr3);

// 배열에 담긴 숫자에 2를 곱한 값을 출력하시오.
const nums = [1,2,3];
const newNums = nums.map(x => 2 * x); 
console.log(newNums);



const sites = [
  {id: 1, name: 'web'},
  {id: 2, name: 'is'},
  {id: 3, name: 'free'}
];

const newSites = sites.map(site => site['id'] + '-' + site['name']);
console.log(newSites);

const newSites2 = sites.map(site => site.id); 
console.log(newSites2);