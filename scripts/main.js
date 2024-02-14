//Call tue function
playGame();



let radioInputList = document.querySelectorAll(".zoneChoix input");

for (let i = 0; i < radioInputList.length; i++) {
    console.log(radioInputList[i]);
}

let inputPlayer = document.getElementById("zoneSaisie")

let inputValidationBtn = document.getElementById("validation-btn")


let baliseZoneProposition = document.querySelector("zoneProposition")


let displayScoreZone = document.querySelector("scoreZone")

console.log(displayScoreZone)

