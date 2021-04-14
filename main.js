//menu button

let menuBtnElement = document.querySelector('.hamburger-btn')
let menuElement = document.querySelector('.menu')
let shadowElement = document.querySelector('.shadow')
let headerElement = document.querySelector('.modal-header')
let headerNavbarElement = document.querySelector('.chat-navbar')


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

headerNavbarElement.addEventListener ('click', () => {
    headerElement.classList.remove('header')
    shadowElement.classList.remove('shadow-hidden')
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
    shadowElement.classList.add('shadow-hidden')
})


// Chat Write
        
let formElement = document.querySelector('.form')
let inputElement = document.querySelector('.chat-input2')
let listElement = document.querySelector('.chat-list')
let buttonElement = document.querySelector('.button')


formElement.onsubmit = function (event){
    event.preventDefault()
    let newLiElement = document.createElement('li')
    newLiElement.textContent = inputElement.value
    newLiElement.classList.add('chat-itemnew')
   listElement.appendChild(newLiElement)

   formElement.reset()
}

buttonElement.onclick = function (event){
    event.preventDefault()
    let newLiElement = document.createElement('li')
    newLiElement.textContent = inputElement.value
    newLiElement.classList.add('chat-itemnew')
   listElement.appendChild(newLiElement)

   formElement.reset()
}





// Chat Name


const DATA = [
    {
        id: 1,
        name: "Ramziddin Olimov",
        photo: "./images/01.jpg",
        phone: "+998900002820",
        messages: [
            {
                body: "Salom qalaysan",
                isMine: true
            },
            {
                body: "Yaxshi raxmat",
                isMine: false
            }
        ]
    },


    {
        id: 2,
        name: "Mehriddin Rajabov",
        photo: "./images/02.jpg",
        phone: "+998900002820",
        messages: [
            {
                body: "Salom qalaysan",
                isMine: true
            },
            {
                body: "Yaxshi raxmat",
                isMine: false
            }
        ]
    },

    {
        id: 3,
        name: "Shaxruz Shomurodov",
        photo: "./images/03.jpg",
        phone: "+998900002820",
        messages: [
            {
                body: "Salom qalaysan",
                isMine: true
            },
            {
                body: "Yaxshi raxmat",
                isMine: false
            }
        ]
    },

    {
        id: 4,
        name: "Og'abek Olimov",
        photo: "./images/04.jpg",
        phone: "+998900002820",
        messages: [
            {
                body: "Salom qalaysan",
                isMine: true
            },
            {
                body: "Yaxshi raxmat",
                isMine: false
            }
        ]
    },

    {
        id: 5,
        name: "Hamroev Jamol",
        photo: "./images/05.jpg",
        phone: "+998900002820",
        messages: [
            {
                body: "Salom qalaysan",
                isMine: true
            },
            {
                body: "Yaxshi raxmat",
                isMine: false
            }
        ]
    },

    {
        id: 6,
        name: "Odil Otamurodov",
        photo: "./images/06.jpg",
        phone: "+998900002820",
        messages: [
            {
                body: "Salom qalaysan",
                isMine: true
            },
            {
                body: "Yaxshi raxmat",
                isMine: false
            }
        ]
    },

    {
        id: 7,
        name: "Jahongir Orziev",
        photo: "./images/07.jpg",
        phone: "+998900002820",
        messages: [
            {
                body: "Salom qalaysan",
                isMine: true
            },
            {
                body: "Yaxshi raxmat",
                isMine: false
            }
        ]
    },

    {
        id: 8,
        name: "Jasur Hamidov",
        photo: "./images/08.jpg",
        phone: "+998900002820",
        messages: [
            {
                body: "Salom qalaysan",
                isMine: true
            },
            {
                body: "Yaxshi raxmat",
                isMine: false
            }
        ]
    },

    {
        id: 9,
        name: "Faxriddin Yusupov",
        photo: "./images/09.jpg",
        phone: "+998900002820",
        messages: [
            {
                body: "Salom qalaysan",
                isMine: true
            },
            {
                body: "Yaxshi raxmat",
                isMine: false
            }
        ]
    },

    {
        id: 10,
        name: "Shaxzod Ibroximov",
        photo: "./images/10.jpg",
        phone: "+998900002820",
        messages: [
            {
                body: "Salom qalaysan",
                isMine: true
            },
            {
                body: "Yaxshi raxmat",
                isMine: false
            }
        ]
    }
]

let messagesListElement = document.querySelector('.messages-list')
let chatUlElement = document.querySelector('.chat-list')
currentChat = 1

inputElement.addEventListener('keyup', event =>{
    if(event.keyCode == 13){
        let messageBody = event.target.value
        let userData = DATA.find(user => user.id == currentChat)
        userData.messages.push({
            body: messageBody,
            isMine: true
        })
        renderMessages(chatUlElement, userData.messages)
        event.target.value = ""
    }
})


renderUsers (messagesListElement, DATA)

function renderUsers(parentElement, data){
    for(let user of data){
        let newLiElement = document.createElement("li")
        let newImgElement = document.createElement("img")
        let nameElement = document.createElement("p")
        newLiElement.classList.add("messages-item")
        newImgElement.classList.add("messages-img")
        nameElement.classList.add("messages-name")
        newImgElement.src = user.photo
        newLiElement.addEventListener('click', () =>{
            renderMessages(chatUlElement, user.messages)
            currentChat = user.id
            inputElement.disabled = false
        })
        nameElement.textContent = user.name
        newLiElement.appendChild(newImgElement)
        newLiElement.appendChild(nameElement)
        parentElement.appendChild(newLiElement)
    }
        
}


function renderMessages(parentElement, data){
    parentElement.textContent = ""
    for(let message of data){
        let newLiElement = document.createElement('li')
        newLiElement.textContent = message.body
        parentElement.appendChild(newLiElement)
    }
}
