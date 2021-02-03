"use strict";

let car = new Object();
car["Make"] = "Audi";
car["Model"] = "A5";
car["Reg"] = "W8M8";

// console.log(car);
// console.log(car.Make);
// console.log(car.Model);
// console.log(car.Reg);

//Create a new property
car.numberOfDoors = 4;
// console.log(car);

let savsPet = {
//key    : value
  petName: "Doggo",
  petType: "Dog",
  petColour: "Blue",
  breed: "collie",
};

// console.log(savsPet);
// console.log(savsPet.petName);

let zoo = [
    {petName: "Doggo",petType: "Dog",petColour: "Blue",breed: "collie"},
    {petName: "dontBite",petType: "Tarantula",petColour: "Purple",breed: "a.purpurea"}
    // {petName: "Doggo",petType: "Dog",petColour: "Blue",breed: "collie"},
    // {petName: "dontBite",petType: "Tarantula",petColour: "Purple",breed: "a.purpurea"},
    // {petName: "Doggo",petType: "Dog",petColour: "Blue",breed: "collie"},
    // {petName: "dontBite",petType: "Tarantula",petColour: "Purple",breed: "a.purpurea"}
]

// console.log(zoo);
// console.log(zoo[0]);
// console.log(zoo[1]);

// for(let i=0; i<zoo.length;i++){
//     console.log("zoo",zoo[i]);
// }
// for(let i=0; i<zoo.length;i++){
//     console.log("zoo",zoo[i]);
//     for(let key in zoo[i]){
//         console.log(`${key}: ${zoo[i][key]}`);
//     }
// }


// for(let a in zoo){
//     console.log(`zooEle ${a}`); // index position
//     for(let key  in zoo[a]){
//         console.log(`${key}: ${zoo[a][key]}`);
//     }
// }

let jsonObj ={
    "tesco":[
        {productName:"coke",price:1.00},
        {productName:"7up",price:1.00}
    ],
    "zoo":[
        {petName: "Doggo",petType: "Dog",petColour: "Blue",breed: "collie"},
        {petName: "dontBite",petType: "Tarantula",petColour: "Purple",breed: "a.purpurea"},
    ]
};

// console.log(jsonObj);
let toAdd= {
    productName:"pepsi",
    price:0.99
};

jsonObj.tesco.push(toAdd);

// console.log(jsonObj.tesco);

//converting an object to to a string

console.log(savsPet);
let savsPet_toText = JSON.stringify(savsPet)
console.log(typeof savsPet);
console.log(typeof savsPet_toText);
console.log(savsPet_toText);


// Converting a String to an object
let ed = `{"name":"Ed","Age":90}`;
console.log(typeof ed);
let obj = JSON.parse(ed);
console.log(typeof obj);
console.log(obj);