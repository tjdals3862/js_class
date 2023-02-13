const ajax = new XMLHttpRequest();
let content = "";
const key = "AIzaSyDFVMROiBLv4LE1farjDjQbQyT-835347o";
const MOST_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${key}`;

ajax.open("GET", MOST_URL, false);
ajax.send(null);

const most = JSON.parse(ajax.response);
const items = most.items;
content += `<ul class="videos">`;

for (let i = 0; i < items.length; i++) {
  content += `<li class="container">`;
  content += `<div class="video">`;
  content += `<img class="thumbnail" src='${items[i].snippet.thumbnails.medium.url}'/>`;
  content += `<div>`;
  content += `<p class="title">${items[i].snippet.title}</p>`;
  content += `<p class="channelTitle">${items[i].snippet.channelTitle}</p>`;
  content += `</div>`;
  content += `</div>`;
  content += `</li>`;
}
content += `</ul>`;
document.querySelector("#root").innerHTML = content;
