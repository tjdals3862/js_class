function Person() {}

Person.prototype.eyes = 2;
Person.prototype.nose = 1;
Person.prototype.see = function (pic) {
  console.log(pic);
};

const kim = new Person();
const park = new Person();

console.log(kim.eyes);
kim.see("사진");
console.log(park.nose);

/* 

*/
