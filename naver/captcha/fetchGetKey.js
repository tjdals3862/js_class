const myHeaders = new Headers();
myHeaders.append("X-Naver-Client-Id", "B81fDOZrQsT6oRUETnq3");
myHeaders.append("X-Naver-Client-Secret", "OdaWI0I7fx");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

fetch("https://openapi.naver.com/v1/captcha/nkey?code=0", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    const imsi = JSON.stringify(result);
    console.log(imsi);
    console.log(result.key);
  })
  .catch((error) => console.log("error", error));
