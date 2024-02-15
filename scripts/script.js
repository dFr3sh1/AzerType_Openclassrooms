//Function to display the score    
function displayScore(score, wordsNumber) {
    //Create new variables for displaying the socre in the html
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
    let wordsNumber = 0
    let validationBtn = document.getElementById('validation-btn')
    let inputEcriture = document.getElementById('inputEcriture')
    let i = 0

    validationBtn.addEventListener('click', () => {
        console.log(inputEcriture.value)
        i++
        displayProposition(listeDeMots[i])
    })

    displayScore(score, wordsNumber)
}



