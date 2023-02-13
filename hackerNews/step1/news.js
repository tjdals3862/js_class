const requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch("https://api.hnpwa.com/v0/news/1.json", requestOptions)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .then((result) => {
    // const newsFeed = result;
    // console.log(newsFeed);
    // ul태그를 js를 활용해서 생성하기
    const ul = document.createElement("ul"); //DOM API
    for (let i = 0; i < 5; i++) {
      // 반복문
      const li = document.createElement("li");
      li.innerHTML = result[i].title;
      ul.appendChild(li);
      //console.log(result[i].title);
    }
    //news.html문서의 body에 정의된 <div id=root><ul></ul>
    document.getElementById("root").appendChild(ul);
  })
  .catch((error) => console.log("error", error));
