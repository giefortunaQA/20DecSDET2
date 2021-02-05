`use strict`

const carName = document.querySelector("#car_name")
const carMake = document.querySelector("#make")
const carModel = document.querySelector("#model")
const carDoors = document.querySelector("#doors")
const carColour = document.querySelector("#colour")
const carGarage = document.querySelector("#garage")

function createCar(){
let data = {
  name : carName.value,
  make : carMake.value,
  model : carModel.value,
  doors : carDoors.value,
  colour : carColour.value,
  garage : {id:carGarage.value}
}
console.log (data)

  fetch("http://localhost:9092/car/create", { 
    method: 'post', 
    headers: {
      "Content-type": "application/json" 
    },
    body:JSON.stringify(data) 
  })

  .then(res => res.json())

  .then((data) => console.log(`Request succeeded with JSON response ${data}`))

  .catch((err) => console.log(err))
}
