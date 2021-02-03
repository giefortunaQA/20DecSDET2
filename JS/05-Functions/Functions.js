'use strict'
//IIFE
// (function() {
//     console.log("check for adblock");
// })();

toAdd(1000,2000)//3000

function toAdd(a,b){
    console.log(a+b);
}
//hello();// we cant call it 
// function expression
const hello  = function(){
    console.log("Welcomme my friends");
}
// hello();
// arrow function 
// const friends = ()=>{
//     console.log("hello this is new");
// } 
// friends();
const friends = ()=>console.log("hello this is new");
friends();

// New ES6 spec
const arrowToAdd = (num1,num2)=>{
    console.log(num1+num2);
}
arrowToAdd(10,20);
