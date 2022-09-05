// 참고: 자바스크립트 프로젝트 가이드 예제 clone
// 1. 해당 예제는 JQuery를 사용하였지만 자바스크립트로 변환해본다.
// 2. CSS 배치와 서버 API 이해한다. 

const API_URL='';
 
// 패스트 푸드점명 탐색
const searchBtn = document.querySelector('.btn-search');

function searchFunction(callback) {
  searchBtn.addEventListener('click', () => {
    console.log("패스트 푸드점 데이터를 조회합니다.");
    const inputEl = document.queryCommandValue('#txt-search');
    if(inputEl !== '') {

      // XMLHttpRequest는 서버와 상호작용, 데이터 검색 시 사용된다.
      httpRequest = new XMLHttpRequest();
      httpRequest.onreadystatechange = function() {
        // 데이터 완료 시 요청 텍스트 출력(httpRequest.readyState는 0-4로 구성)
        if(httpRequest.readyState === XMLHttpRequest.DONE) {
          if(httpRequest.status === 200) {
            callback(httpRequest.responseText);
          }
        }
      };

      // 새로 생성된 요청 초기화 혹은 기존 요청 재초기화
      // http 요청 메서드, 요청 URL, async, 식별 user, 식별 password로 구성된다.
      httpRequest.open('GET', API_URL, true); 
      httpRequest.send();
    }
    alert("검색어를 입력해주세요.");
    return false;
  });
}
searchFunction(selectItems);


// 검색 목록 조회 함수
function selectItems(result) {
  const data = JSON.parse(result);
  const list = data.list;
  const totalLength = data.total; 

  const totalEl = document.querySelector('.total')
    .innerHTML='총' + totalLength + '개의 패스트푸드점을 찾았습니다.';
    
  const listEl = document.querySelector('.list');
  const templateList = document.querySelector('#item-template');

  for(let i = 0; i < list.length; i++) {
    let item = list[i];
    templateList.cloneNode(true);
    listEl.appendChild(templateList);
    templateList.removeAttribute('id');
    templateList.querySelector('.item-no').innerText = i + 1;
    templateList.querySelector('.item-name').innerHTML = item.name;
    templateList.querySelector('.item-addr').innerHTML = item.addr;
  }
  listEl.append(templateList);
};