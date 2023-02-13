const xhr = new XMLHttpRequest();
const NEWS = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT = "https://api.hnpwa.com/v0/item/@id.json";
const container = document.querySelector("#title");
const divcontent = document.createElement("div"); //제목에 대한 상세내용
//페이징 처리 - 1step
const store = {
  currentPage: 1,
};

// 아래 함수의 사용처는 두 군데 임
// 요청 URL만 바뀜 나머지는 같음 - 그래서 파라미터를 url로 줌
function getData(url) {
  xhr.open("GET", url, false);
  xhr.send();
  return JSON.parse(xhr.responseText);
}
// 뉴스목록 가져 오기
function newsList() {
  const news = getData(NEWS);
  // li태그를 담을 배열 선언하기
  const getList = [];
  //li태그 담기전에 ul 태그 먼저 담기
  getList.push("<ul>");
  for (let i = (store.currentPage - 1) * 10; i < store.currentPage * 10; i++) {
    const div = document.createElement("div");
    getList.push(`
    <li>
      <a href='#/show/${news[i].id}'>
        ${news[i].title} (${news[i].comments_count})
      </a>
    </li>
    `);
  } //end of for
  const PreviousPage = store.currentPage > 1 ? store.currentPage - 1 : 1;
  const nextPage = store.currentPage + 1;
  getList.push("</ul>");
  getList.push("<div>");
  getList.push(`<a href='#/page/${PreviousPage}'>이전페이지</a>`);
  getList.push("&nbsp;&nbsp"); //링크사이 띄어쓰기
  getList.push(`<a href='#/page/${nextPage}'>다음페이지</a>`);
  getList.push("</div>");
  //빈문자열 주면 구분 없는 하나의 합쳐진 HTML문자열을 얻음
  container.innerHTML = getList.join("");
} // end of newsList

// 뉴스 상세 내용 보기
function newsDetail() {
  console.log(this);
  const id = location.hash.substring(7);
  const newsContent = getData(CONTENT.replace("@id", id));
  container.innerHTML = `
      <h1>${newsContent.title}</h1>
      <div>
        <a href="#/page/${store.currentPage}">목록으로</>
      </div>
    `;
}

// 라우터에서 화면 전환하기
function router() {
  // 글 목록의 링크는 #. 그러면 location.href에 #이 들어왔을 텐데
  // 왜 이게 참일까? location.href에 #만 들어오면 빈값을 반환
  // 그래서 이 코드가 작동하는 것임
  const routePath = location.hash;
  //첫 진입 일때는 newsList를 호출한다
  if (routePath === "") {
    newsList();
  } else if (routePath.indexOf("#/page/") >= 0) {
    //해시값 중에서 숫자값만 추출하기
    //#을 제거하고 문자열 길이를 계산 후 문자열을 숫자로 바꾸어야 함
    store.currentPage = Number(routePath.substring(7));
    newsList();
  } else {
    newsDetail();
  }
}

// 해시이벤트처리 추가
// 해시값이 변경되면 호출됨
window.addEventListener("hashchange", router); // end of hashchange
router();
