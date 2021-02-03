'use strict';

let x =1;
console.log(x++);//1 - we read x first and then we increment 
console.log(x);//2

let y = 1;
console.log(++y);// 2
console.log(y);//2

/**
 * for([variable];[condition];[increment]){
 *  what ever we want to  do
 * }
 */

for(let i=0;i<10;i++){
    console.log(i);
}
console.log("-------------");
for(let j=0;j<10;++j){
    console.log(j);
}
console.log("-------------");

for(let z=0;z<=5;){
    console.log(`z is${z++}`);
}

let myBool = false;
do{
    console.log("Whats going on friends!!!!");
}while(myBool)


let cars = 0;
let moreCars = true;
while(moreCars){
    console.log("i want a new car!!");
    cars++;
    if(cars>=5){
        moreCars=false;
    }
}

// switch case

let now = new Date();
console.log(now.getDate());

switch(now.getDate()){
    case 1:
        console.log("today is monday");
        break;
    case 2:
        console.log("today is tuesday");
        break;
    case 3:
        console.log("today is wednesday");
        break;
    case 4:
        console.log("today is thursday");
        break;

    default:
        console.log("no clue!!!");
}

console.log("hello",now.getHours());

if(now.getHours()>=17){
    console.log("Good evening");
}else{
    console.log("Good morning");
}

//ternary if?
// syntax: (condition)?  if true : if false 

let greeting = (now.getHours()>=17)?"evening":"morning";

console.log(`Good ${greeting}`);

