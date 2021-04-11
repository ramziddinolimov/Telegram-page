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
    menuElement.classList.add('menu-hidden')
    shadowElement.classList.add('shadow-hidden')
    menuElement.style.transform = 'translateX(-100%)'
})

// Setting button

let settingBtnElement = document.querySelector('.setting-btn')
let settingElement = document.querySelector('.settings')

settingBtnElement.addEventListener ('click', () => {
    settingElement.classList.remove('modal-settings')
    shadowElement.classList.remove('shadow-hidden')
    settingElement.style.transform = 'translate(0%)'
})

shadowElement.addEventListener ('click', () => {
    settingElement.classList.add('modal-settings')
    shadowElement.classList.add('shadow-hidden')
    settingElement.style.transform = 'translate(100%)'
})


