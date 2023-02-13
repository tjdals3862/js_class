// 참 거짓
// 1) false
// 2) 0 - 0이 아닌건 다 거짓 {}:Object, []:Array참
// 3) null
// 4) undefined
// 5) NaN
// 6) "빈문자열"

if (500) {
  console.log("참");
}

if ("0") {
  console.log("참");
}

if (NaN) {
} else {
  console.log("Nan도 false");
}

if (null) {
} else {
  console.log("null도 false");
}

if (undefined) {
} else {
  console.log("undefined도 false");
}

if ("") {
} else {
  console.log("빈문자열도 false");
}
