// 배열 내장 함수
//

const colors = ["red", "green", "blue"];

// forEach
colors.forEach((value) => {
  console.log(value);
});

//toString() : 배열을 문자로 변환
let result = colors.toString();
console.log(typeof result);

// join() : 구분자를 활용해 문자열로 이어붙이기
const result2 = colors.join("+");
console.log(result2);

// pop(): 배열의 마지막 요소 제거(리턴값으로 잘라낸 요소 반환)
result = colors.pop();
console.log(result);

//push() : 배열의 끝부분에 새로운 요소 추가(리턴값으로 배열긔 길이 반환)
result = colors.push("yellow");
console.log(result);

//shift() : 배열의 첫 부분 요소 제거(리턴값으로 잘라낸 요소 반환)
result = colors.shift();
console.log(result);

//unshift() : 배열의 첫 부분에 새로운 요소 추가(리턴값으로 길이 반환)
result = colors.unshift();
console.log(result);

// splice(삽입 위치, 잘라낼 갯수, 추가할 내용)
result = colors.splice(1, 0, "black");
console.log(colors);

// concat() : 두 개 배열을 합치기
const color2 = ["cyan", "brown"];
result = colors.concat(color2);
console.log(result);

// slice() : 배열 잘라내기 - 새로운 배열을 만들어서 잘라내기(리액트 CRUD처리시)
result = colors.slice(1, -1);
console.log(result);
result = colors.slice(1, -1);
console.log(result);

colors.reverse();
console.log(colors);

colors.sort();
console.log(colors);
