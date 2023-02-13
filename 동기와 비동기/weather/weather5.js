import { weatherKey } from "./apiKEY.js";

const getWeather = (local, callback) => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?appid=${weatherKey}&q=${local}&units=metric`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        resolve();
      });
  });
};

//insert here
//promise가 반환하는 함수에서만 await을 붙여야 한다.
//console.log에는 await을 붙이지 않는다.
//async와 await함께 사용된다
const runTest = async () => {
  await getWeather("seoul");
  console.log("서울날씨 가져오기");
  await getWeather("busan");
  console.log("부산날씨 가져오기");
  await getWeather("incheon");
  console.log("인천날씨 가져오기");
};

runTest();
/*
  날씨 제공하는 서버에 다녀오는(request와 response) 시간이 걸리므로
  어느 지역이 먼저 처리 될지 알 수 없다
  순서가 다를 수 있다 - 실행할 대 마다
  호출하는 순서가 처리 순서를 의미하지않는다

  문제제기
  만일 순서를 보장하고 싶다면 어떻게 하면 될까?
  서울 2초
  부산 3초
  인천 1초

  콜백메소드 반복 작성
  들여쓰기와 arrow function이 반복해서 나온다
  이러면 depth가 깊어진다- 소스분석이 어렵다

  자바스크립트는 기본적으로 순서대로 처리 된다 - 동기 - 서로 맞춘다

  순서가 맞지 않는것 - 비동기
*/
