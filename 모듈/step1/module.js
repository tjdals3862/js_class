export default 1;

export const insa = "hello";
export const names = ["apple", "kiwi", "tomato"];
export const hap = (i, j) => {
  return i + j;
};

/*
  호이스팅 이슈(맨 위로 끌어올려져 전역변수화 되는 현상)
  1) var i
  2) head태그안에 선언한 함수
  3) import문(ES6, 브라우저지원)

  함수 선언
  1) 선언형 함수
  2) 익명 함수 - 콜백함수 -> 나중에 실행 : callback
  전제 조건 : 자바스크립트에서는 함수도 객체이다
  3) 대입 함수 - 일급함수
  -> 고차함수[리덕스(리액트에서 상태 관리 구현한 것) 만드는데 결정적 역할] -> 리액트
  const func = () => {}
  4) 즉시 실행함수 ()() - ES6 이전에는 호이스팅 이슈 해결하는 방법으로 사용되었다.
*/
