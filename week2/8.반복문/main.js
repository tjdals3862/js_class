let colors = ["red", "green", "blue"]; // 리터널 이용한 배열 선언 및 초기화

// 콜백함수 - 함수 호출할 때 인수(파라미터)로 함수가 들어가는 형태
// arr.forEach(callback(currentvalue[, index[, arry]][, thisArg]))
// ES5 - 반복처리기능만, 유사배열도 처리해줌, ES6 - 순수배열만
// 이전
// colors.forEach(function (color, index, itmes) {
//   console.log(color);
//   console.log(index);
//   console.log(itmes);
// });

// 이후 버전 - React 수업 - 데이터변하면 변하는 것만 렌더링 처리함
// colors.forEach((color, index, items) => {
//   console.log(color);
//   console.log(index);
//   console.log(items);
// });

colors.map((color, index, items) => {
  console.log(color);
  console.log(index);
  console.log(items);
});
