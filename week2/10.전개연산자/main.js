const fruits = ["π", "π₯", "π"];
const fruits2 = ["π", "π", "π"];

const fruits3 = ["π", ...fruits2];

fruits3.forEach((fruit, index) => {
  //console.log(`${index}-${fruit}`);
});

const fruits4 = [...fruits, ...fruits2];

fruits4.forEach(function (fruit, index) {
  //console.log(`${index}-${fruit}`);
});

const dept = {
  deptno: 30,
  dname: "κ°λ°λΆ",
  loc: "μ μ£Ό",
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
  { id: 1, name: "λ²€μΉνλ μ€", count: 10 },
  { id: 2, name: "λ«νλ€μ΄", count: 12 },
  { id: 3, name: "μ€μΏΌνΈ", count: 30 },
];

items.push({ id: 3, name: "λ°λλ¦¬ννΈ", count: 33 });
console.log(items);
//console.log(itmes);
