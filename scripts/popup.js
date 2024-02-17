//Create functions to display the popupBackground



function displayPopup() {
    let popupBackground = document.querySelector('.popupBackground')
    //Add the class active because it has display none as default value
    popupBackground.classList.add('active')
}

function hidePopup() {
    let popupBackground = document.querySelector('.popupBackground')
    popupBackground.classList.remove('active')
}

function initAddEventListenerPopup() {
    // On écoute le click sur le bouton "partager"
    let btnPartage = document.querySelector(".zonePartage button")
    let popupBackground = document.querySelector(".popupBackground")
    btnPartage.addEventListener("click", () => {
        // Quand on a cliqué sur le bouton partagé, on affiche la popup
        displayPopup()
    })

    // On écoute le click sur la div "popupBackground"
    popupBackground.addEventListener("click", (event) => {
        // Si on a cliqué précisément sur la popupBackground 
        // (et pas un autre élément qui se trouve dedant)
        if (event.target === popupBackground) {
            // Alors on cache la popup
            hidePopup()
        }
    })
}

