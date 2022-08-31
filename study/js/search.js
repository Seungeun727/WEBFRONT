// 참고: 자바스크립트 프로젝트 가이드 예제 clone
// 1. 해당 예제는 JQuery를 사용하였지만 자바스크립트로 변환해본다.
// 2. CSS 배치와 서버 API 이해한다. 

// 패스트 푸드점명 탐색
let search = function() {
  const searchBtn = document.querySelector('.btn-search');
  searchBtn.onclick = (() => {
    console.log('패스트 푸드점 데이터를 조회합니다.')
  });
}

search();