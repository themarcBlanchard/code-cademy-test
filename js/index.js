// Error Handling 

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const name = document.querySelector("#name");

let user = {};

user.name = name.value;
user.email = email.value;
user.password = password.value;


// try catch block
try{
    if(!user.name){
        throw new Error("Name is required");
    }else if(!user.email){
        throw new Error("Email is required");
    }else if(!user.password){
        throw new Error("Password is required");
    }
}catch(e){
    console.log(e);
    console.log("Failed to save the object.")
}