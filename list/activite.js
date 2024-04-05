const activite = document.querySelector("#atividade")
const form = document.querySelector("#form")
const list = document.querySelector("#list")

function cadastrarAtividade(event){
    event.preventDefault()
    const new_element = document.createElement("li")
    new_element.textContent = activite.value
    list.appendChild(new_element)
    activite.value = ""
    activite.focus()
}

form.addEventListener("submit", cadastrarAtividade )