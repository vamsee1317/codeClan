// regex patterns :

const userNamePattern = /^[A-Za-z0-9]{1,10}$/;
const mobileNumberPattern = /^[6-9][0-9]{9}$/;
const passwordPattern = /^[0-9]{10}$/


const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", (e)=>{

    e.preventDefault();
    
    let userName = document.getElementById("userName").value;
    let mobileNumber = document.getElementById("mobileNumber").value;
    let password = document.getElementById("password").value;


    if(!userNamePattern.test(userName)){
        console.log(`Invalid UserName`);
    }else{
        console.log(`ValidData`);
    }

    if(!mobileNumberPattern.test(mobileNumber)){
        console.log(`Invalid Mobile Number`);
    }

    if(!passwordPattern.test(password)){
        console.log(`Password is Invalid`);
    }

    if(password == confirmPassword){
        console.log(`Passwords do not match`);
    }

    return `FormDataValidated`;

})


// function registrationFormValidation(){

//     let userName = document.getElementById("userName").value;
//     let mobileNumber = document.getElementById("mobileNumber").value;
//     let password = document.getElementById("password").value;



//     console.log(userName, mobileNumber, password);

// }