let items = [
  { id: 1, name: "벤치프레스", count: 0 },
  { id: 2, name: "랫풀다운", count: 0 },
  { id: 3, name: "스쿼드", count: 0 },
];

// 운동 제목 추가하기 - ES6(ECMAScript2016)
const handleAdd = (name) => {
  const workouts = [...items, { id: items.length + 1, name: name, count: 0 }];
  console.log(workouts);
  console.log(items);
};

const handleDelete = (id) => {
  const workouts = items.filter((item) => item.id != id);
  console.log(workouts);
};

//handleDelete(3);
handleAdd("하이");

// console.log(items);
// items = handleDelete(3);
// console.log(items);
