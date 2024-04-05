const form = document.querySelector("#form");
const age = document.querySelector("#age")
const frase = document.querySelector("#frase")

function applyData(event){
    event.preventDefault()
    const new_element = document.createElement("p")
    new_element.textContent = age.value
    frase.appendChild(new_element)
    age.value = ""
    age.focus()
    frase.classList.add("vermelho")
}

form.addEventListener("submit" , applyData)