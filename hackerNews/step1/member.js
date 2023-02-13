const requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch(
  "http://localhost:8080/member/jsonMemberBatisMemberList.jsp",
  requestOptions
)
  .then((response) => response.text())
  .then((result) => {
    const jsonDoc = JSON.parse(result);
    // console.log(jsonDoc.length);
    for (let i = 0; i < jsonDoc.length; i++) {
      document.write(
        `번호 : ${jsonDoc[i].MEM_NO} 아이디 : ${jsonDoc[i].MEM_ID}`
      );
    }
  })
  .catch((error) => console.log("error", error));
