const ajax = new XMLHttpRequest();
const key = "AIzaSyDFVMROiBLv4LE1farjDjQbQyT-835347o";

const search = (query) => {
  if (query === "") {
    return;
  }
  const videoList = [];
  const SEARCH_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${key}`;
  ajax.open("GET", SEARCH_URL, false);
  ajax.send(null);
  const most = JSON.parse(ajax.response);
  const items = most.items;
  videoList.push(`<ul class="videos">`);

  if (query !== "") {
    console.log("test");
    for (let i = 0; i < items.length; i++) {
      videoList.push(`<li class="container">`);
      videoList.push(`<div class="video">`);
      videoList.push(
        `<img class="thumbnail" src='${items[i].snippet.thumbnails.medium.url}'/>`
      );
      videoList.push(`<div>`);
      videoList.push(`<p class="title">${items[i].snippet.title}</p>`);
      videoList.push(
        `<p class="channelTitle">${items[i].snippet.channelTitle}</p>`
      );
      videoList.push(`</div>`);
      videoList.push(`</div>`);
      videoList.push(`</li>`);
    }
  }

  videoList.push(`</ul>`);
  document.querySelector("#root").innerHTML = videoList.join("");
};

const keyword = document.querySelector("#keyword");

keyword.addEventListener("keypress", (event) => {
  handleSearch();
});

const handleSearch = () => {
  const user = document.querySelector("#keyword").value;

  search(user);
};
