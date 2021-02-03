'use strict';

const greeting = (firstName)=>{
    alert(`Hey ${firstName}`);
}

const getName = (callBack)=>{
    let username = prompt("Please enter your name");
    // console.log(username);
    callBack(username);
}

getName(greeting);

