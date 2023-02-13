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

getWeather("seoul")
  .then(() => {
    console.log("서울날씨 가져오기");
    return getWeather("seoul");
  })
  .then(() => {
    console.log("부산날씨 가져오기");
    return getWeather("busan");
  })
  .then(() => {
    console.log("인천날씨 가져오기");
    return getWeather("incheon");
  });

/* getWeather("busan").then(() => {
  console.log("부산날씨 가져오기");
  return getWeather("busan");
});

getWeather("incheon").then(() => {
  console.log("인천날씨 가져오기");
  return getWeather("incheon");
}); */

/* getWeather("seoul").then(() => {
  console.log("서울날씨 가져오기");
  return getWeather("seoul");
});

getWeather("busan").then(() => {
  console.log("부산날씨 가져오기");
  return getWeather("busan");
});

getWeather("incheon").then(() => {
  console.log("인천날씨 가져오기");
  return getWeather("incheon");
}); */
