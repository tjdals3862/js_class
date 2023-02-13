console.log(1);
setTimeout(() => {
  console.log(2);
}, 2000);
console.log(hap(1, 3)); // import문이 뒤에 있음에도 4가 출력됨 - 왜냐 호이스팅이 발생
import { hap } from "./module.js";
/* import문도 호이스팅이 일어남 */
console.log(3);
