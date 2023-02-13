(function () {
  const a = 1;
  const b = 2;
  console.log(a + b);
})();

/*
자기자신을 정의하자 마자 바로 자신을 호출함
괄호가 2개 들어감
첫번째 괄호는 함수의 선언부
두번째 괄호는 함수의 호출하는 부분
*/

function func1() {
  // 이름이 있는 함수임
  console.log("func1");
  func2(func1);
}

func1();

function func2(func1) {
  console.log(func1);
}
