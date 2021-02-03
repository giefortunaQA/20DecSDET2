function deposit(incremenet){
     bankBalance = 100;
    let balance = bankBalance + incremenet;
    return `${balance}`; 
}
console.log(deposit(10));// 110
console.log(bankBalance); // ? what will this return 100?

var x = 10;
console.log(x+" "+y); // 10 undefined
var y =12;
console.log(x+" "+y); // 10 12

let x1 = 1000;
console.log(x1+" "+y1); // 
let y1 =1200;// not in scope when called before