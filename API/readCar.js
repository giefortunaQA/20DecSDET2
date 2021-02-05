'use strict';

const carToDisplay = document.querySelector("#displayBox")
const givenId = document.querySelector("#carId")
const carBlock = document.querySelector("#carPara")

const printToScreen = (car) => {
    for (let info in car) {
        carToDisplay.append("\n");
        let actualText = document.createTextNode(
            `${info}: ${car[info]}, `);
        console.log(info);
        console.log(car[info]);
        carBlock.append(actualText)
        carToDisplay.appendChild(carBlock)
    }
   
}




const readCarById = () => {
    carBlock.innerHTML = "";
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