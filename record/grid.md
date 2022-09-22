## Grid 개념 재정의
- 페이지를 영역 구분한다.
- 세로 열과 가로행을 기준으로 요소를 정렬한다.

<br />

## Grid Container 속성

### 🔎 display 속성 
- grid를 정의한다.
```css 
.grid-container {
  display: grid;
}
```

<br />

### 🔎 flex container 주요 속성 

<br />

| 속성 | 의미 |
| --- | --- |
| grid-template-rows | 행의 크기를 정의한다. |
| grid-template-columns  | 열의 크기를 정의한다. |
| row-gap | 행 간격을 정의한다. |
| column-gap | 열 간격을 정의한다. |
| align-content | 그리드 내용을 수직 정렬 |
| justify-content | 그리드 내용을 수평 정렬 |
| align-items | 그리드 아이템을 수직 정렬 |
| justify-items | 그리드 아이템을 수평 정렬 |


<br />


### 🔎 grid-container-item 주요 속성 

<br />

| 속성 | 의미 |
| --- | --- |
| grid-row-start | 그리드 아이템 행 시작 위치를 정한다.
| grid-row-end | 그리드 아이템 행 끝 위치를 정한다.
| grid-column-start | 그리드 아이템 열 시작 위치를 정한다.
| grid-column-end | 그리드 아이템 열 끝 위치를 정한다.
| align-self | 각 아이템을 수직 정렬 |
| justify-self | 각 아이템을 수평 정렬 |
| column-gap | 열 간격을 정의한다. |
| order | 그리드 아이템 방향 순서을 정한다. |
| z-index | 그리드 아이템을 쌓이는 순서를 정한다. |

<br />

## 📌 참고
- 패스트 캠퍼스 인강 grid 설명