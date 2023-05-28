const authRow = document.getElementById('auth-row')
const registrationForm = document.getElementById('register-form')
const questionInput = document.getElementById('question-input')
const choicesInput = document.getElementById('choices-input')
const voteButton = document.getElementById('vote-button')
const voteButtonInput = document.getElementById('vote-button-input')
const registerModal = new bootstrap.Modal(_getById('register-modal'), {
    keyboard: false
})

const authorizationModal = new bootstrap.Modal(_getById('authorization-modal'), {
    keyboard: false
})


window.addEventListener('DOMContentLoaded', (e) => {
    if(!localStorage.hasOwnProperty('users')) {
        localStorage.setItem('users', '[]')
    }
    if(!localStorage.hasOwnProperty('votes')) {
        localStorage.setItem('votes', '[]')
    }
    if(!localStorage.hasOwnProperty('usersVoted')) {
        localStorage.setItem('usersVoted', '[]')
    }
    if(!localStorage.hasOwnProperty('programsSum')) {
        localStorage.setItem('programsSum', '[]')
    }
    if(!localStorage.hasOwnProperty('myArray')) {
        localStorage.setItem('myArray', '[]')
    }

    const {choices} = database 
    _render(authRow, $authBlock({}))
    _render(questionInput, $questionInput({}))
    _render(choicesInput, choices.map((choice) => $choicesInput(choice)).join(''))
    _render(voteButtonInput, $voteButtonInput({}))
})

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = registrationForm.register_email.value.trim()
    const password = registrationForm.register_password.value.trim()
    const repeatPassword = registrationForm.register_repeat_password.value.trim()
    if(password !== repeatPassword) {
        alert("Password's do not match")
    } else {
        const userId = uid()
        const user = {
            id: userId,
            email: email,
            password: password 
        }
        const users = JSON.parse(localStorage.getItem('users'))
        users.push(user)
        localStorage.setItem('users', JSON.stringify(users))
        delete user.password 
        localStorage.setItem('auth', JSON.stringify(user))
        registrationForm.reset()
        registerModal.hide()
        window.location.reload()
    }
})

