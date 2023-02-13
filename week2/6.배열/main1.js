// 배열 : Array Copy
// 얕은 복사(원본이 바뀜, 동기화됨)와 깊은 복사(복사본바뀜, 비동기)
// 연관된 값들을 하나의 그룹으로 묶어서 나열한 자료구조

const colors = ["red", "green", "blue"];
console.log(colors);

// arrow function에서[ES6]는 파라미터가 한개이면 괄호 생략 가능함
// arrow function에서는 실행문이 단일해이면 좌중괄호 우중괄호 생략가능
colors.forEach(function (color, index, colors) {
  console.log(color);
});

colors.forEach((color) => {
  console.log(color);
});
