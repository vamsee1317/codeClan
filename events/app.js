// Event : 
    // Events are nothing but actions which will help us to trigger functions and functions will help us to perform a specific task.
    // Event is something that happens in the browser. 
    // Events make website interactive.

// OneLiner : Events are actions performed by the user or browser that Javascript can respond to.

// Examples : 
    // User clicks a button 
    // User types inside an input box
    // Page load
    // Key press

// Types of Events :
    // Mouse Based Events : click, dblClick, mouseover...etc
    // Keyboard based Events : keyUp, keyDown...etc
    // Form Based Events : focus, blur, change, submit....etc
    // Window Based Events : reload, resize...etc


// Why do we events : 

    // Websites would be static
    // No clicks
    // No typing
    // No interactivity

// Formula : Element + Event  + Function. 


// Implementation of Events : 

// Inline :
// Property Based  :

const loginBtn = document.getElementById("loginBtn");
// console.log(loginBtn);

function login(){
    console.log("Login Successful");
}

loginBtn.onclick = login;

loginBtn.ondblclick = function(){
    console.log("Button is double clicked");
}



// AddEventListenerMethod : 

    const registerBtn = document.getElementById("registerBtn");

    // console.log(registerBtn);

    registerBtn.addEventListener('click', ()=>{
        console.log(`Account is Registered`);
    });

    registerBtn.addEventListener('dblclick', ()=>{
        console.log(`Button is double clicked - using addEventListener method`);
    });

// Event Object :

// Event Object is automatically passed to the event handler as an argument. It contains useful information about the event that occurred.

const subscribeBtn = document.getElementById("subscribeBtn");

subscribeBtn.addEventListener('click', (e)=>{
    console.log(e);
    console.log(`Event Type : ${e.type}`);
    console.log(`Event Target : ${e.target.innerText}`);
});    


// const inputFields = document.querySelectorAll('input');

// console.log(inputFields);

// inputFields.forEach((inputField)=>{


//     inputField.addEventListener('keypress', (e)=>{
//         console.log(e.target.value);
//     })


// });


// Prevent Default Behaviour :

const form = document.getElementById("form");

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log("Please fill all the fields correctly");
});

// Event Bubbling and Capturing :

// Event Bubbling : The event is first captured and handled by the innermost element and then propagated to outer elements.

// Event Capturing : The event is first captured by the outermost element and propagated to the inner elements.



const grandParent = document.getElementById("grandParent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");
const container = document.getElementById("container");

// Event Bubbling Example :

child.addEventListener('click', (e)=>{
    console.log("Child Clicked");
});

parent.addEventListener('click', (e)=>{
    console.log("Parent Clicked");
});

grandParent.addEventListener('click', (e)=>{
    console.log("GrandParent Clicked");
});


container.addEventListener('click', (e)=>{
    console.log("Container Clicked");
});

// Event Capturing Example :

    child.addEventListener('click', (e)=>{
        console.log("Child Clicked - Capturing");
    }, true);

    parent.addEventListener('click', (e)=>{
        console.log("Parent Clicked - Capturing");
    }, true);
    
    grandParent.addEventListener('click', (e)=>{
        console.log("GrandParent Clicked - Capturing");
    }, true);