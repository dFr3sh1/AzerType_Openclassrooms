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

//Function to execute the main loup of the game
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

