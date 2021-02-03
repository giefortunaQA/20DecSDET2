'use strict'

// cookies

// const hello  = name=> 
// hello("jim")
//  const setCookie=(nameOfCookie, cookievalue, exdays)=> {
//     let date = new Date();
//     date.setTime(date.getTime() + (exdays*24*60*60*1000));
//     let expires = "expires="+ date.toUTCString();
//     // document.cookie = nameOfCookie + "=" +"name:" + cookievalue + ";" + expires + ";path=/";
//     document.cookie =`${nameOfCookie}=name:${cookievalue};${expires};path=/`;
//   }


// setCookie("myYummyCookie","Donald Tramp", "2");


// web storage 
// sessionStorage.setItem("key","value");
// let data = sessionStorage.getItem("key");
// console.log(data);
// sessionStorage.clear();


const params = new URLSearchParams(window.location.search);
// console.log(param);
for(const param of params){
    console.log(param);
}
const fName = params.get("someFirstName");
const sName = params.get("someSecondName");

console.log(fName+" "+sName);
