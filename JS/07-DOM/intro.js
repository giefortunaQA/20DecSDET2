'use strict'


// document.getElementById(); we no longer use
// document.getElementsByClassName(); we no longer use it
// let paras = document.querySelector();
let paras = document.querySelectorAll('p');
console.log(paras);

for(let p of paras){
    p.style.color = 'blue';
    p.style.fontFamily="fantasy";
}
let divs = document.querySelectorAll('.div1');
console.log(divs);

for(let d of divs){
    d.style.color = 'blue';
    // d.style.fontFamily="fantasy";
    d.className ="alert alert-danger";
}

let heading = document.querySelector('#bigHeading');
heading.innerHTML="we are nearly done ";
// heading.remove();

let myDiv = document.querySelector("#newContent");
// create new elements
let aTag = document.createElement("a");
aTag.href = "https://www.google.com"
aTag.innerText ="click me"
aTag.className="btn btn-danger";
myDiv.appendChild(aTag);


// let myDiv = document.querySelector(".container");
// console.log(myDiv);
// let newElement = document.createElement("p");
// newElement.innerText ="I STILL WORK"
// myDiv.append(newElement);
