'use strict'

// Pending - Hasn't been fulfilled or rejected yet
// Fulfilled/ Success - The action relating to the promise succeeded
// Rejected/ Failed - The action relating to the promise failed

//We either will get some data now , some time in the future or never at all!
// pt1
// let mypromise = new Promise((resolve,reject)=>{
//     // do something when i request information 
//     let a = 1+1;
//     if(a==1){
//         resolve("yaaaay it worked!")
//     }else{
//         reject("Oh noooo it didnt work :(");
//     }
// });

// // => is function 
// // pt2
// mypromise.then((msg)=>{
//     console.log(`The status of the message is ${msg}`);
// }).catch((msg)=>{
//     console.log(`The status of the message is ${msg}`);
// }).then(()=>{
//     console.log("No matter what happened before i still run :D");
// })



let anotherPromise = new Promise((res, rej)=>{
    console.log("initial state");
    res();
    rej();//unreachable code - we never get here
}).then(()=>{
    console.log("do this");
}).then(()=>{
    console.log("this will also happen");
}).catch(()=>{
    console.error("Oh noooooooo");
});


// let newPromise = new Promise( (resolve, reject) => {
//     // complicated logic
//     console.log(`initial`);
//     resolve();
//     reject(); // unreachable code
// }).then( () => {
//     console.log(`Do this`);
// }).then( () => {
//     // throw new Error("Something has failed");
//     console.log(`Straight after`);
// }).catch( () => {
//     console.error(`oh no`);
// });
