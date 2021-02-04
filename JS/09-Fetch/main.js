'use strict';

const dataToShow = document.querySelector("#myDataToShow");
const uName = document.querySelector("#name");
const job = document.querySelector("#job");
const alert = document.querySelector("#onsuccess");


const printToScreen =(email,userName,photo)=>{
    // let user = document.createElement("div");
    // user.className="alert alert-success";
    // let text =document.createTextNode(`Email: ${email}`);
    // let para = document.createElement("p");
    // let paraText = document.createTextNode(`Username: ${userName}`)
    // user.append(text);
    // para.append(paraText)
    // dataToShow.append(user,para);
    // // dataToShow.appendChild(para);

    let newImg = document.createElement("img");
    newImg.src =photo;
    newImg.alt= "somePhoto";
    dataToShow.append(newImg)
}


const getData=()=>{
    fetch("https://reqres.in/api/users")
        .then((response)=>{
            if(response.status !==200){
                throw new Error("i dont have a status of 200");
                return;
            }
            // console.log(`status was 200 hence ${response}`);
            response.json()
            .then((infoFromServer)=>{
                // console.log(infoFromServer);
                // console.log(infoFromServer.data);
                for(let users of infoFromServer.data){
                    console.log(users.id);
                    console.log(users.email);
                    console.log(users.first_name);
                    console.log(users.last_name);
                    console.log(users.avatar);
                    printToScreen(users.email,users.first_name,users.avatar)
                }
            })
        }).catch((err)=>{
            console.error(err);
        })
}

const createUser =()=>{
    const userVal = uName.value;
    const jobVal = job.value;

let data = {
    name:userVal,
    job:jobVal
}
console.log(data)

    fetch("https://reqres.in/api/usersefdsefdgrhgyj",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    
    .then(response=>response.json().then((info)=>{
        console.log(info);
        alert.setAttribute("class", "alert alert-success")
        alert.innerHTML ="User have been created";
        setTimeout(()=>{
            alert.removeAttribute("class");
            alert.innerHTML ="";
        },5000)
        
            }))
    
    .catch((err)=>{
        console.error(err);
    })

}