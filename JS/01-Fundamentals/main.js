
'use strict'
// alert("hello");

// 3 ways we can declare variables
let a = "vinesh"; //a variable that will change over time
const b ="Ed"; //something that we do not want to change!
var c ="Savannah"; //Don't used this very baddd
let d = "Jordan"; //a variable that will change over time
// a= 10;
// console.log(a);


//Print to the console
// console.log(a);
// console.info(b);
// console.warn(c);
// console.error(d);

//datatypes in JS
const fName ="String";
const year =20; // we dont have int,double,float....
const bigNumber = 904567665546576867563n; // Bigint
const bool =true;// boolean
const sName=null; // object - stating explicitly that it will be empty (no data type)
const undef = undefined;
const obj ={fName:"vinesh",sName:"ghela"};
const myNum = 24.01;

// console.log(typeof fName);// String
// console.log(typeof year);// number
// console.log(typeof bigNumber);// bigint?
// console.log(typeof bool);// boolean?
// console.log(typeof sName);// string? object!
// console.log(typeof undef);// undefined
// console.log(typeof obj);// object
// console.log(typeof myNum);// number

// let newYear = null;
// let Ed;
// console.log( newYear);//object?
// console.log( Ed); //err!!!
// console.log(typeof newYear);//object?
// console.log(typeof Ed); //err!!!

// String concat
const greeting="Hello";
const myName ='Vin';

console.log('The message is'+greeting+myName+'!!!!');
//Template literal!
console.log(`The message is ${greeting} ${myName}!!!!!`);

// escape characters
console.log("quotes:'here is my quote'");
console.log("quotes:\'\"here is my quote''");


//datatypes - we can keep changing them
// compiler doesnt know what the value is untill it reads it.
// dynamic

let str2 = "";
str2=12345678;
console.log(str2);

//Why var is bad - DONT USE IT;
var myVar= 12;
console.log(`the value of myVar is ${myVar} and the value of your var is ${yourVar}`);
var yourVar =100;
// myVar= 12
//yourVar =undefined

let x=100;
let y =5;
console.log(`the value of x is ${x} and the value of y is ${y}`);


//functions
// we say its function 
// we give a name 
//pass any values as parameters
// we add curly braces - Block 
function addTwo(salary){
   let bankBalance = 100;
   return bankBalance+salary;
}

console.log(addTwo);
// console.log(addTwo(1.50));// 101.50
addTwo(1.50);


// ASI - Automatic semi colon Insertion
//1. add a ; when two lines are separated by a line break
//2. when two statement are separated by a curly brace ("}")
//3. line terminal followed by a BREAK, CONTINUE,RETURN or throws

let foo//when there is a line was here
// bar;

//JS reads it as 
// let foo;bar;
console.log(foo);// undefined
// console.log(bar);

let james
hammond
    =3;

    console.log(james);//undefined
    console.log(hammond);// error? or maybe 3

