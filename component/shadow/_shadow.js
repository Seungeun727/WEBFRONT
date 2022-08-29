// Shadow DOM 간략 정리 

// Shadow DOM
// 1. 외부에 노출되지 않는 DOM => 캡슐화 역할
// 2. 글로벌에 영향 받지 않는 독립적인 요소 생성시 사용함 => 모듈화
// 3. DOM 내 요소에 붙이며 DOM이 없다면 Shadow Dom도 존재하지 않음.
// 4. shadow host를 만나는 순간에 shadow DOM 렌더링된다.

// Shadow DOM 용어 
// 1) Shadow host: Shadow DOM이 부착된 DOM 노드
// 2) Shadow tree: Shadow DOM 내부 DOM 트리
// 3) Shadow boundary: Shadow DOM이 끝나고 통상적 DOM이 시작되는 장소
// 4) Shadow root: Shadow DOM 트리의 루트 노드(최상위 노드)


// Shadow DOM 사용

// 1. Shadow root의 시작점을 생성 
// Shadow dom의 host 접근하기 위해 attachShadow()를 사용한다.
// * shadow DOM host: shadow Root의 시작점 요소
const divEl = document.querySelector('.box1');


// attachShadow()는 어떤 요소에도 Shaodow root를 붙일 수 있다.
// + 옵션은 mode이고, open과 closed의 값을 지닌다.
// + 옵션값을 closed로 지정시 외부로부터 Shadow DOM 접근할 수 없다.
// divEl.attachShadow({mode: 'open'});
// divEl.attachShadow({mode: 'closed'});

// 2. Shadow DOM의 구조 내부를 생성
// 자식 태그인 <p>태그 새성
const pEl = document.createElement('p');

// <p>태그 내 텍스트 지정
pEl.innerText = '오늘 날씨는 흐립니다.';

// 3. 생성된 <p>태그 요소를 Shadow root로 붙인다.
divEl.attachShadow({mode: 'open'}).appendChild(pEl);

console.log(divEl);

/* 출력 결과 
<div class="box1">
  #shadow-root (open)git
    <p>오늘은 날씨가 흐립니다.</p>
  "Box"
</div>
*/

// 연습 
const divEl2 = document.querySelector('.box2');
const pEl2 = document.createElement('p');
pEl2.innerText = 'Shadow DOM 공부 시작한 시간은 4시부터 입니다.';
divEl2.attachShadow({mode: 'open'}).appendChild(pEl2);


// Shadow DOM에서 style 반영
const divEl3 = document.querySelector('.box3');
const spanEl = document.createElement('span');
spanEl.innerHTML = 
  `<style> 
    span { 
      background-color: blue;
      font-size: 50px;
      border-radius: 5px;
    }
    </style>
    <span>MANGO</span> `; 
divEl3.attachShadow({mode: 'open'}).appendChild(spanEl);  

// 캡슐화
const shadow = document.querySelector('#element');
const text4 = document.createElement('span');

text4.innerHTML = `
  <style>
    span {
      color: purple;
      font-size: 30px; 
      font-weight: bold;
    }
  </style>
  <span>shadow DOM 캡슐화 공부</span>
`;

shadow.attachShadow({mode: 'open'}).appendChild(text4);
console.log(shadow.shadowRoot);                                   // #shadow-root (open)
console.log(shadow.shadowRoot.querySelectorAll('span'));          // NodeList(2) [span, span]
console.log(shadow.shadowRoot.querySelectorAll('span').length);   // 2
