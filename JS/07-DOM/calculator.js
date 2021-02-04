'use strict'
// block the code from running 
alert("Dont go anywhere!!")
// console.log("hey hey ");
const number1 = document.querySelector("#firstNumber");
const number2 = document.querySelector("#secondNumber");
const result =document.querySelector("#result");
const history =document.querySelector(".history");
const substractButton  = document.querySelector("#sub");
const clearValue  = document.querySelector("#clearValues");
const clearHistory  = document.querySelector("#clearHistory");
const dontClickBtn = document.querySelector("#dontClick");

const getValues =()=>{
    return [Number.parseFloat(number1.value), Number.parseFloat(number2.value)]
}

const printValues = (newResult)=>{
    result.value =newResult;
}

const addToHistory= (result,num1, num2 , operator)=>{
    const p = document.createElement("p");
    const info = document.createTextNode(`${num1}${operator}${num2}= ${result}`)
    p.appendChild(info)
    history.appendChild(p);
}

const add =()=>{
    const [num1 , num2] =getValues();
    let newVal = num1 +num2;
    printValues(newVal);
    addToHistory(newVal,num1,num2,"+")
}

const subtract =()=>{
    const [num1 , num2] =getValues();
    let newVal = num1 -num2;
    printValues(newVal);
    addToHistory(newVal,num1,num2,"-")
}

const multiply =()=>{
    const [num1 , num2] =getValues();
    let newVal = num1 *num2;
    printValues(newVal);
    addToHistory(newVal,num1,num2,"*")
}
const divide =()=>{
    const [num1 , num2] =getValues();
    let newVal = num1 /num2;
    printValues(newVal);
    addToHistory(newVal,num1,num2,"/")
}

clearValue.addEventListener("click",()=>{
    number1.value="";
    number2.value="";
    result.value="";
})

const sayHello =()=>{
    console.log("hello");
    dontClickBtn.className="btn btn-danger btn-lg"
}

const noMoreHistory = ()=>{
    history.innerHTML ="";
}

substractButton.addEventListener("click",subtract)
clearHistory.addEventListener("click", noMoreHistory)

// dontClickBtn.addEventListener("mouseover", ()=>{
//     dontClickBtn.className="btn btn-danger btn-lg"
// })
// dontClickBtn.addEventListener("mouseover",sayHello );

// let newbtn = document.querySelector("#dontClick2");

// newbtn.style =
// setTimeout(function () {
//    newbtn.style.visibility="";
//   }, 3000); // milliseconds