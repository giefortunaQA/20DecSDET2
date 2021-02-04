'use strict'

  //! C - create - POST
  //! R - read - GET
  //! U - update - PUT/PATCH
  //! D - delete - DELETE
  // ? Read  by id! - for update
// fetch("http://jsonplaceholder.typicode.com/postsdfklwekdwekedfwew")
// .then(res => res.json())
// .then(myjson =>console.log(myjson))
// .catch(err => console.error(err));

// ? Fetch - GET
// fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
//   .then((response) => {
//     if (response.status !== 200) {
//       console.error(`status ${response.status}`);
//       return;
//     }
//     response.json().then((data) => console.info(data));
//   })
//   .catch((err) => console.error(err));

// ? Fetch - GET - get by id
const params = new URLSearchParams(window.location.search);
// console.log(param);
// for(const param of params){
//     // console.log(param);
// }
let id = params.get("id");
// console.log(`the id is ${id}`);
// fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
//   .then((response) => {
//     if (response.status !== 200) {
//       console.error(`status ${response.status}`);
//       return;
//     }
//     response.json().then((data) => console.info(data));
//   })
//   .catch((err) => console.error(err));

// ? Fetch - POST
const myObj ={
    "userId": 100,
    "title": "this is a test",
    "body": "this is some text to show how post work via postman!"
}

// fetch(`http://jsonplaceholder.typicode.com/posts`,{
//     method:`POST`,
//     headers:{
//         "Content-type":"application/json"
//     },
//     body: JSON.stringify(myObj)
// })
// .then((res)=>res.json())
// .then((data)=>console.info(`Request was all good with json response ${data}`))
// .catch((err)=> console.error(err));

// //? Fetch - DELETE
// fetch(`http://jsonplaceholder.typicode.com/posts/1`,{
//     method:"delete"
// })
// .then((data)=>console.info(`Request was all good with json response ${data}`))
// .catch((err)=> console.error(err));


