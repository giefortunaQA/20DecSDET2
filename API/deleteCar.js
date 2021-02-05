'use strict'

const p = document.createElement("p");
const idV = document.querySelector('#getId')
// console.log(idValue);
//console.log(idV);

// DELETE CAR
function deleteCar(){
  const idValue = idV.value;
  fetch("http://localhost:9092/car/delete/"+idValue, {
          method: 'delete',//3
        })
        .then((data) => {
          console.log(`Car had been deleted ${data}`);
          document.write("Deleted car :) All good!!!");
        })
        .catch((error) => {
        });
      }
