window.addEventListener("load", () => {

//CONVERT HTML ELEMENTS TO JAVASCRIPT VARIABLES
const mainText = document.getElementById("main-text")
const doorBell = document.getElementById("doorbell-button")
const erase = document.getElementById("erase-button")

//ADD FUNCTIONS FOR EVENTS
doorBell.addEventListener("click", ()=>{
    mainText.innerHTML += " you rang..."
})

erase.addEventListener("click", ()=>{
    mainText.innerHTML = "Ring the doorbell...if you dare!"
})

erase.addEventListener("mouseover", ()=>{
    erase.style.backgroundColor = "red"
})

erase.addEventListener("mouseleave", ()=>{
    erase.style.backgroundColor = ""
})

});









//git remote add origin https://github.com/Showard1793/testProject.git
//git branch -M main
//git push -u origin main