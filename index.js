const email = document.querySelector("#email")
const password = document.querySelector("#senha")
const form = document.querySelector("#formulario")

const email_verified = "rodrigosms103042r6@gmail.com"
const password_verified = "123456"

function sendDATA(event){
    event.preventDefault();
    if(email.value === email_verified && password.value === password_verified){
        alert("login efetuado")
    }else{
        alert("Email ou senha incorreto")
    }
    console.log(event);
    console.log(email.value)
    console.log(password.value)
}

form.addEventListener("submit", sendDATA)