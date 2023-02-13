const xhr = new XMLHttpRequest();
const NEWS = "https://api.hnpwa.com/v0/news/1.json";
xhr.open("GET", NEWS, false);
xhr.send();

const news = JSON.parse(xhr.responseText);
console.log(news[0].comments_count);
console.log(news);
//console.log(news.);
const ul = document.createElement("ul");
for (let i = 0; i < 10; i++) {
  // 8번에서 생성한 ul태그 안에 li태그를 배열의 length만큼 반복
  const li = document.createElement("li");
  // 제목을 클릭하면 상세페이지 이동하기 위한 링크 추가
  const a = document.createElement("a");
  a.href = "#";
  a.innerHTML = `${news[i].title}  (${news[i].comments_count})`;
  // 11번에서 만들어진 li는 ul태그 하위태그 붙임 - appendChild
  li.appendChild(a);
  ul.appendChild(li);
} //end of for
//console.log(ul);
document.querySelector("#title").appendChild(ul);

//document.write(xhr.responseText);
//document는 index.html 전체를 받는 객체이므로 js에서 사용불가
//div HTMLElement받기
//const title = document.querySelector("#title");
//요청으로 반환되는 타입은 이미 text 즉 문자열 이므로
// JSON.stringify는 사용할 필요가 없음
// 이미 문자열 이니깐 JSON.parse사용해서 구조를 본해함
//title.innerText = xhr.responseText;

//console.log(title);
