import number from "./module.js";
import { insa, names, hap, Sonata } from "./module.js";

console.log(number);
console.log(insa);
console.log(names);
console.log(hap);


const myCar = new Sonata();
console.log(myCar.speed);
console.log(myCar.wheelNum);
myCar.speedUp();
console.log(myCar.speed);
