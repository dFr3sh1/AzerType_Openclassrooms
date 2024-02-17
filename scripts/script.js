//Function to display the score    
function displayScore(score, wordsNumber) {
    //Create new variables for displaying the score in the html
    let scoreSpan = document.querySelector(".zoneScore span")

    let newDisplayScore = `${score} / ${wordsNumber}`

    //Add the values of the new variales in the document
    scoreSpan.innerText = newDisplayScore

    //Display the score
    console.log('Votre score est ' + score + ' sur ' + wordsNumber)
}

function displayProposition(proposition) {
    let zoneProposition = document.querySelector('.zoneProposition')
    zoneProposition.innerText = proposition
};

function displayEmail(name, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${name} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}

//Main function to launch the game
function playGame() {
    initAddEventListenerPopup()
    let score = 0
    let validationBtn = document.getElementById('validation-btn')
    let inputEcriture = document.getElementById('inputEcriture')
    let i = 0
    let choicedList = listeDeMots

//Displaies the table listeDeMots
    displayProposition(choicedList[i])
    validationBtn.addEventListener('click', () => {
        console.log(inputEcriture.value)

        //If the value is the same than inputEcriture the score increases
        if (inputEcriture.value === choicedList[i]) {
            score++
        }
        i++
        displayScore(score, i)
        inputEcriture.value = ''

        //If the value of listeDeMots is undefined the gameis over
        if (choicedList[i] === undefined) {
            displayProposition("Le jeu est fini")
            validationBtn.disabled = true
            
        } else {
        //To update the list of proposition justa after validating
            displayProposition(choicedList[i])
        }

    });

//Create a new function to pick Motsor Phrases
let choice = document.querySelectorAll('.optionSource input')
for (let index = 0; index< choice.length; index++) {
    choice[index].addEventListener("change", (event) => {
        console.log(event.target.value)
        if (event.target.value === "1") {
            choicedList = listeDeMots
        } else {
            choicedList = listeDePhrases
        }
        //To update the list of proposition justafterthe choice
        displayProposition(choicedList[i])
    })
};

//To validate the word pressing the Enter key
    inputEcriture.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            validationBtn.click()
        }
    });

    let form = document.querySelector("form")
    form.addEventListener("submit", (event) => {
        event.preventDefault()
    
    let tagName = document.getElementById("nom")
    let name = tagName.value

    let tagEmail = document.getElementById("email")
    let email = tagEmail.value

    let tagScore = `${score} / ${i}`

    displayEmail(name, email, tagScore)

    })



    displayScore(score, i)
};


