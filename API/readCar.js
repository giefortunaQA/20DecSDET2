'use strict';
const carToDisplay=document.querySelector("#displayBox")
const givenId=document.getElementById("#carId")

const printToScreen=(car)=>{
    for (let info of car){
        let actualText=document.createTextNode(info);
        carToDisplay.append(actualText);
    }
}
    



const readCarById=()=>{
    carToDisplay.innerHTML="";
    fetch("http://localhost:9092/car/read/"+givenId)
    .then((res)=>{ 
        if(res.ok!=true){
            console.log("Status is not ok!");
        }res.json()
    }).then((data)=>{
        console.log(data);
        printToScreen(data)
    }).catch((err)=>console.log(err))
}