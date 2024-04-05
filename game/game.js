const health = document.querySelector("#saude")
const Energy = document.querySelector("#energia")

const play = document.querySelector("#brincar")
const jump = document.querySelector("#pular")
const eat = document.querySelector("#comer")
const sleep = document.querySelector("#dormir")
const smoke = document.querySelector("#fumar")

play.addEventListener("click" , () => {
    console.log(Energy.textContent)
    Energy.textContent = Number(Energy.textContent) - 10
});

smoke.addEventListener("click" , () => {
    health.textContent = Number(health.textContent) - 10
    console.log("estou morrendo por favor me ajude!")
    if(Number(health.textContent) == 30){
        alert("por favor pare")
    }else if(Number(health.textContent) == 10){
        alert("voce sofrerá as consequências de seus atos")
    }else if(Number(health.textContent) == 0){
        while(true){
            i = 0
            i++
            console.log(i)
            alert("virus do tamagotchi");
        }
    }

});