const loginButton = document.querySelector(".loginbuttonlabel")
const signup = document.querySelector(".signupbuttonlabel")

const loginContainer = document.querySelector(".login")
const signupContainer = document.querySelector(".signup")

const closeButton = document.querySelector("#closePopup")

function login(){
    window.location.href = "Homepage.html"
}

loginButton.addEventListener("click",()=>{
    loginContainer.style.display = "block"
    signupContainer.style.display = "none"
})

signup.addEventListener("click",()=>{
    loginContainer.style.display = "none"
    signupContainer.style.display = "block"
})

closeButton.addEventListener("click",()=>{
    signupContainer.style.display = "none"
    loginContainer.style.display = "none"
    console.log("Closed")
})