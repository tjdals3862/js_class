const fruits = ["🍅", "🥝", "🍇"];
const fruits2 = ["🍉", "🍊", "🍒"];

const fruits3 = ["🍈", ...fruits2];

fruits3.forEach((fruit, index) => {
  //console.log(`${index}-${fruit}`);
});

const fruits4 = [...fruits, ...fruits2];

fruits4.forEach(function (fruit, index) {
  //console.log(`${index}-${fruit}`);
});

const dept = {
  deptno: 30,
  dname: "개발부",
  loc: "제주",
};

const emp = {
  empno: 7566,
  ename: "SCOTT",
  sal: 2500,
};

const deptnemp = { ...dept, ...emp };
console.log(deptnemp);

const emp2 = { ...emp, empno: 7499, ename: "TIGET", sal: 3000 };

console.log(emp);
console.log(emp2);

let items = [
  { id: 1, name: "벤치프레스", count: 10 },
  { id: 2, name: "랫풀다운", count: 12 },
  { id: 3, name: "스쿼트", count: 30 },
];

items.push({ id: 3, name: "데드리프트", count: 33 });
console.log(items);
//console.log(itmes);
