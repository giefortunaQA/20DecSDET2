'use strict'

let id = 4;
const p = document.createElement("p");
const pInfo = document.createTextNode(`Deleted car id:${id}, all good `);

// DELETE CAR
      fetch("http://localhost:9092/car/delete/"+id, {
          method: 'delete',
        })
        .then((data) => {
          console.log(`Deleted car all good ${data}`);
            p.appendChild(pInfo)
            document.body.appendChild(p)
        })
        .catch((error) => console.error(err),{
        });



