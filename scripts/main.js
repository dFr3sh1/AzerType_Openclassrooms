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