if (true) {
  console.log(this);
}

for (let i = 0; i < 5; i++) {
  console.log(this);
}

setTimeout(() => {
  console.log(object), 2000;
});

// const btn = document.querySelector("button");

// btn.addEventListener("click", (e) => {
//   console.log(this);
// });
