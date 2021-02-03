'use strict'

let cars =["Audi", "BMW", "Merc", "Honda","Ford"];

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

// const [bill,bob, ben,,d] = cars;

console.log("--------------------");
// console.log(bill);
// console.log(bob);
// console.log(ben);
// console.log(d);

let myObj = {val1:"salt",val2:"pepper"};
// console.log(myObj.val2);

let {val1,val2} = myObj;
console.log(val1);// salt
console.log(val2);// pepper

//rename object
let{val1: item1, val2:item2}= myObj
console.log("item1",item1);
console.log("item1",item2);


const myBigArray = [1,2,3,4,5,6,7,8,9,7,53553,31,24,35,465,23,132,576,31,243,5,13,244,3,427,43,87]

// spread operator

const [a,b,c,d,e,,f,g,h,...rest] = myBigArray;
console.log(a);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(rest);

const person = {
    first: "chris", 
    middle: "p", 
    last: "bacon", 
    city: "manchester", 
    phone: "07456828278", 
    country: "UK",
    age: 25, 
    email: "chrisp.bacon@gmail.com", 
    dob:"12/12/1994",
    postcode: "M11", 
    occupation:"trainer", 
    gender: "female"
};

console.log(`my friend is called ${person.first} ${person.middle} ${person.last}`);
// let firstName = person.first
// let middle = person.middle
// let last = person.last
const {first,middle,last}= person;

console.log(`my friend is called ${first} ${middle} ${last}`);