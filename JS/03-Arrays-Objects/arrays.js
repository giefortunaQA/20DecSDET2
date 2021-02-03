'use strict'

// 4 ways to create arrays!
let array = Array(); // empty array
let arrayWithSize = Array(10); // array with 10 
let arrayWithVals= Array(1,2,3,4,5,6);
// let numbas =[1,2,3,4,5,6];
let cars =["Audi", "BMW", "Merc", "Honda"];
let cars1 =[,1,,2,3,5];

console.log(array);
console.log(arrayWithSize);
console.log(arrayWithVals);
console.log(cars);
console.log(cars1);// 

//Arrays in JS can be accessed at anytime in any index
// Arrays can be partially filled
// Access something that does not exist and we will get undefined

let classRoom = [];
classRoom[0]= "Ed";
console.log(classRoom[1]);
classRoom[2]= "sav";
console.log(classRoom);

classRoom[0]= {name:"ed",age:90};
classRoom[2]= {name:"Sav",age:91};
console.log(classRoom);

let numbas =[1,2,3,4,5,6];
numbas[6]=100;
console.log(numbas);

// methods
// gets me the length
console.log(numbas.length);

numbas.push(1000);
console.log(numbas);

numbas.pop();
console.log(numbas);

numbas.unshift(1000000);
console.log(numbas);

numbas.shift();
console.log(numbas);

for (let i = 0; i < numbas.length; i++) {
    console.log(`key: ${i}: value:${numbas[i]}`);
}

for (const key in numbas) {
    console.log(`key: ${key}:value ${numbas[key]}`);
}