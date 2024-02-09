//Function to display the score    
function displayScore(score, wordsNumber) {
    //Display the score
    console.log('Votre score est ' + score + ' sur ' + wordsNumber)
}

function choice() {
    let choice = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
    //While player hasn't choice the loup stills asking to choice
    while (choice !== 'mots' && choice !== 'phrases') {
        choice = prompt('Merci de bien choisir : "mots" ou "phrases"')
    }
    return choice
}

function gameMainLoup (propositionLists) {
    let score = 0
    for (let i = 0; i < propositionLists.length; i++) {
        let choicedList = prompt('Entrez le mot : ' + propositionLists[i] + '.')
        if (choicedList === propositionLists[i]) {
            score ++
        }
    }
    return score
}

function playGame() {
    let playerChoice = choice()
    let score = 0
    let wordsNumber = 0

    if (playerChoice === 'mots') {
        score = gameMainLoup(listeDeMots)
        wordsNumber = listeDeMots.length
    } else {
        score =     gameMainLoup(listeDePhrases)
        wordsNumber = listeDePhrases.length
    }

    displayScore(score, wordsNumber)
}

