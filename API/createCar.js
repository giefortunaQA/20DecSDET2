`use strict`

const carName = document.querySelector("#name")
console.log (carName)
const carMake = document.querySelector("#make")
const carModel = document.querySelector("#model")
const carDoors = document.querySelector("#doors")
const carColour = document.querySelector("#colour")
const carGarage = document.querySelector("#garage")

function createCar(){
  fetch("http://localhost:9092/car/create", { 
    method: 'post', 
    headers: {
      "Content-type": "application/json" 
    },
    body:JSON.stringify( 
      {
        "name":carName.value,
        "make":carMake.value,
        "model":carModel.value,
        "doors":carDoors.value,
        "colour":carColour.value,
        "garage":carGarage.value
      
      }
    )
  })

  .then(res => res.json())

  .then((data) => console.log(`Request succeeded with JSON response ${data}`))

  .catch((err) => console.log(err))
}
