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

let baliseZoneProposition = document.querySelector("#zoneProposition span");

console.log(baliseZoneProposition);

let radioInputList = document.querySelectorAll(".zoneChoix input");
console.log(radioInputList)

for (let i = 0; i < radioInputList.length; i++) {
    console.log(radioInputList[i]);
}

//Main function to launch the game
function playGame() {
    //To stock the player choice from choice()
    let playerChoice = choice()
    let score = 0
    let wordsNumber = 0

    if (playerChoice === 'mots') {
        //gameMainLoup function stocks the score that is why is defined in local variable 
        score = gameMainLoup(listeDeMots)
        // This variable get the numbers of elements from the lists to become the required argument 
        //of the function displayScore
        wordsNumber = listeDeMots.length
    } else {
        score = gameMainLoup(listeDePhrases)
        wordsNumber = listeDePhrases.length
    }

    displayScore(score, wordsNumber)
}



