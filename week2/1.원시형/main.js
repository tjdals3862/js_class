function checkType(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}

const checkType2 = (data) => {
  // ES6, ECMAScript(2016) - arrow function
  return Object.prototype.toString.call(data).slice(8, -1);
};

console.log(checkType(null));
console.log(checkType(undefined));
console.log(checkType("강감찬"));
