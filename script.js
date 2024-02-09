//This variable will stock the score of the player
let score = 0

// This variable will stock the player's choice
let choixUtilisateur = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")


//While player hasn't choice the loup stills asking to choice
while (choixUtilisateur !== 'mots' && choixUtilisateur !== 'phrases') {
choixUtilisateur = prompt('Merci de bien choisir : "mots" ou "phrases"')
}

//If player's choice is 'mots' the game will dsiplay the list of words
if (choixUtilisateur === 'mots') {
    for (let i = 0; i < listeDeMots.length; i++) {
        let motUtilisateur = prompt('Entrez le mot : ' + listeDeMots[i] + '.')
        if (motUtilisateur === listeDeMots[i]) {
            score ++
        }
    }
    console.log("Votre score est de " + score + " sur" + listeDeMots.length)

//If player's choice is 'phrases' the game will dsiplay the list of phrases
} else {
        for (let i = 0; i < listeDePhrases.length; i++) {
            let motUtilisateur = prompt('Entrez la phrase : ' + listeDePhrases[i] + '.')
            if (motUtilisateur === listeDePhrases[i]) {
                score ++
            } 
        }
    console.log("Votre score est de " + score + " sur" + listeDePhrases.length)
    }
    
function displayScore(score, listOfProposition) {
    let scoreMessage = 'Votre score est ' + score + ' sur ' + listOfProposition
    return scoreMessage
}

function listChoice() {
    let choice = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
    return choice
}

