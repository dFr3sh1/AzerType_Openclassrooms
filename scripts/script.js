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
}

//Main function to launch the game
function playGame() {
    let score = 0
    let validationBtn = document.getElementById('validation-btn')
    let inputEcriture = document.getElementById('inputEcriture')
    let i = 0

//Displaies the table listeDeMots

    displayProposition(listeDeMots[i])
    validationBtn.addEventListener('click', () => {
        console.log(inputEcriture.value)

        //If the value is the same than inputEcriture the score increases
        if (inputEcriture.value === listeDeMots[i]) {
            score++
        }
        i++
        displayScore(score, i)
        inputEcriture.value = ''

        //If the value of listeDeMots is undefined the gameis over
        if (listeDeMots[i] === undefined) {
            displayProposition("Le jeu est fini")
            validationBtn.disabled = true
            
        } else {
            //To clean the fill of proposition
            displayProposition(listeDeMots[i])
        }

    });
//To validate the word pressing the Enter key
    inputEcriture.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            validationBtn.click()
        }
    })

    displayScore(score, i)
}



