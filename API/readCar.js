'use strict';

const carToDisplay = document.querySelector("#displayBox")
const allCarsToDisplay = document.querySelector("#displayBoxAll")
const givenId = document.querySelector("#carId")

const printToScreen =(car) => {
    for (let info in car) {
        let actualText = document.createTextNode(
            `${info}: ${car[info]} `
            );
        console.log(info+":" +car[info]);
        carToDisplay.append(actualText)
    }
   
}

const printToScreenAll=(cars)=>{
    for (let car in cars){
        for (let info in cars){
            let actualText = document.createTextNode(
                `${info}: ${car[info]} `
                );
            console.log(info+":" +car[info]);
            allCarsToDisplay.append(actualText)
        }
    }
}




const readCarById = () => {
    carToDisplay.innerHTML="";
    const idVal = givenId.value;
    fetch("http://localhost:9092/car/read/" + idVal)
        .then((res) => {
            if (res.ok != true) {
                console.log("Status is not ok!");
            }
            res.json()
                .then((data) => {
                    console.log(data);
                    printToScreen(data)
                }).catch((err) => console.log(err))
        })
}

const readAllCars = () => {
    allCarsToDisplay.innerHTML = "";
    fetch("http://localhost:9092/car/read/")
        .then((res) => {
            if (res.ok != true) {
                console.log("Status is not ok!");
            }
            res.json()
                .then((data) => {
                    console.log(data);
                    for (let car in data){
                        printToScreenAll(car)
                    }
                }).catch((err) => console.log(err))
        })
}