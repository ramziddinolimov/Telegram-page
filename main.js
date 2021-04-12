//menu button

let menuBtnElement = document.querySelector('.hamburger-btn')
let menuElement = document.querySelector('.menu')
let shadowElement = document.querySelector('.shadow')


menuBtnElement.addEventListener ('click', () => {
    menuElement.classList.remove('menu-hidden')
    shadowElement.classList.remove('shadow-hidden')
    menuElement.style.transform = 'translateX(0%)'
}) 

shadowElement.addEventListener ('click', () => {
    shadowElement.classList.add('shadow-hidden')
    settingElement.classList.add('modal-settings')
    menuElement.style.transform = 'translateX(-100%)'
})

// Setting button

let settingBtnElement = document.querySelector('.setting-btn')
let settingElement = document.querySelector('.settings')
let settingExitElement = document.querySelector('.setting-exit')


settingBtnElement.addEventListener ('click', () => {
    settingElement.classList.remove('modal-settings')
    menuElement.style.transform = 'translateX(-100%)'

})

settingExitElement.addEventListener('click', () => {
    settingElement.style.display = 'none'
    shadowElement.classList.add('shadow-hidden  ')
})


// Chat Write
        
let formElement = document.querySelector('.form')
let inputElement = document.querySelector('.chat-input2')
let listElement = document.querySelector('.chat-list')
let buttonElement = document.querySelector('.button')


formElement.onsubmit = function (event){
    event.preventDefault()
    let newLiElement = document.createElement('li')
    newLiElement.classList.add('chat-itemnew')
    if (inputElement.value == false){
        return false
    }  else {newLiElement.textContent = newLiElement.value
    listElement.appendChild (newLiElement)}
    formElement.reset()
}
