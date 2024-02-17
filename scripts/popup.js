//Create functions for sahering the score throught the popup
/**/
/* Function to display popup window
*/
function displayPopup() {
    let popupBackground = document.querySelector(".popupBackground")
    //popupBackground is display:none in css we must change the class by active
    popupBackground.classList.add("active")

}

/**/
/*Function to hide the popup 
 */
function hidePopup() {
    let popupBackground = document.querySelector(".popupBackground")
    //To change the visibility of the popup we delete the class active
    popupBackground.classList.remove("active")
}

/**/
/*Functions to add event listener to the popup
 */
function initAddEventListenerPopup() {
    let shareBtn = document.querySelector(".zonePartage button")
    let popupBackground = document.querySelector(".popupBackground")
    shareBtn.addEventListener("click", () => {
        //Display the popup with click
        displayPopup()
    });

    //To listen the click on the popupBackground element
    popupBackground.addEventListener("click", (event) => {
        //If user click only on the popupBackground
        if (event.target == popupBackground) {
            hidePopup()
        }
    })
}

