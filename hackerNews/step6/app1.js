const xhr = new XMLHttpRequest();
const NEWS = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT = "https://api.hnpwa.com/v0/item/@id.json";
const container = document.querySelector("#title");
const divcontent = document.createElement("div"); //제목에 대한 상세내용
// 아래 함수의 사용처는 두 군데 임
// 요청 URL만 바뀜 나머지는 같음 - 그래서 파라미터를 url로 줌
function getData(url) {
  xhr.open("GET", url, false);
  xhr.send();
  return JSON.parse(xhr.responseText);
}

const news = getData(NEWS);
const ul = document.createElement("ul");

// 해시이벤트처리 추가
// 해시값이 변경되면 호출됨
window.addEventListener("hashchange", function () {
  const id = location.hash.substring(1);
  const newsContent = getData(CONTENT.replace("@id", id));
  const h1 = document.createElement("h1");
  container.innerHTML = `
    <h1>${newsContent.title}</h1>
    <div>
      <a href="http://127.0.0.1:5500/hackerNews/step6/index.html">목록으로</>
    </div>
  `;
}); // end of hashchange

for (let i = 0; i < 10; i++) {
  const div = document.createElement("div");
  div.innerHTML = `
    <li>
      <a href='#${news[i].id}'>
        ${news[i].title} (${news[i].comments_count})
        </a>
    </li>
  `;
  ul.appendChild(div.firstElementChild);
} //end of for

container.appendChild(ul);
container.appendChild(divcontent);
