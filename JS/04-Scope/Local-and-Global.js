// 'use strict'

function someFunc(){
    let val ="jim bob joe"; // local scope 
    console.log("from function",val);
    return val;

}
someFunc();
console.log(someFunc());
// console.log(val);// ! error

let check = false;// global scope
function changeCheck (){
    check= true;
}
console.log(check);// ? false
changeCheck();
console.log(check);// true?

// var flag
function test(){
   let flag = true;
    console.log(flag); // ? true
    test1(); // we call a function
    console.log(flag); // false
}

function test1(){
    flag = false;
    return;
}
// test()


//bank 

let myBalance = 40;


function deposit(toAdd){
    return myBalance + toAdd;
}
function withdraw(toMinus){
    return myBalance - toMinus;
}

myBalance = 100000000000

