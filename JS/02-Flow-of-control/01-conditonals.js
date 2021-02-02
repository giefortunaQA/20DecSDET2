"use strict";

// datatypes
//String
//number
//boolean
//null
//bigInt
//object
//undefined

let myObj = {
  //  key  : value
  fName: "Vinesh",
  myNum: 16,
  year: 2021,
  myGrades: [],
};

// console.log(myObj)

let bool1 = true; //1
let bool2 = false; //0

// check for equality
//  when we use == we only check the value - WE DONT CARE ABOUT THE TYPE
console.log(bool1 == bool2);//false
console.log(1=="1");//true?
console.log([1]=="1");//true
console.log(bool1==1);//true

//Strict equality
// when we use === it check the value and the type
console.log(1==="1");// false
console.log(1===1);//true

//inequality
console.log(1=="1");//true
console.log(1!="1");// false
console.log(1!=="1");// true!!!
console.log([10]!="10");// false
console.log([10]!=="10");// true


console.log(typeof myObj );