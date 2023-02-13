const btns = document.querySelectorAll(".list li");
let isFlag = 1;

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (e) => {
    if (isFlag) {
      btns[i].setAttribute("class", "on");
      --isFlag;
    } else {
      btns[i].setAttribute("class", "off");
      ++isFlag;
    }

    console.log(e.target);
  });
}
