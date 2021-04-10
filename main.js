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

