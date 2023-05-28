// TODO Select All elements 

const todoInput = document.getElementById('todo-input')
const addButton = document.getElementById('add-button')
const ulList = document.getElementById('ul-list')
const deleteAllButton = document.getElementById('delete-all-button')
const checkAllButton = document.getElementById('check-all-button')
const changeInput = document.getElementById('todo-input-change')
const changeButton = document.getElementById('change-button')
const editRow = document.getElementById('edit-row')

let todos = []



window.addEventListener('load', (e) => {
    if(!localStorage.hasOwnProperty('todos')) {
        localStorage.setItem('todos', '[]')
    }
    todos = JSON.parse(localStorage.getItem('todos'))
    ulList.innerHTML = todos.map((todo) => $displayInput(todo)).join('')
})
   



addButton.addEventListener('click', (e) => {
    if (todoInput.value.length >= 3) {
        const newTodo = {
            id: uid(),
            text: todoInput.value 
        }
        todos.push(newTodo)
        localStorage.setItem('todos', JSON.stringify(todos))
        ulList.insertAdjacentHTML('beforeend', $displayInput(newTodo))
        todoInput.value = ''
    }
})

deleteAllButton.addEventListener('click', (e) => {
    let deletedIdList = []
    document.querySelectorAll('.check-checkbox:checked').forEach(item => {
        deletedIdList.push(item.value)
    })
    todos = todos.filter(item => !deletedIdList.includes(item.id))
    localStorage.setItem('todos', JSON.stringify(todos))
    deletedIdList.forEach(id => {
        document.getElementById(id).remove()
    })
    deleteAllButtonToggle()
})


checkAllButton.addEventListener('click', (e) => {
    document.querySelectorAll('.check-checkbox').forEach(item => {
        if(!item.checked) {
            item.checked = true 
        } else {
            item.checked = false
        }
    })
    deleteAllButtonToggle()
})

changeButton.addEventListener('click', (e) => {
    const id = e.target.dataset.saveId 
    const updatedTodo = {
        id: id,
        text: changeInput.value,
    }
    todos = todos.map(item => {
        if (item.id === id) return updatedTodo
        else return item 
    })
    localStorage.setItem('todos', JSON.stringify(todos))
    const old = document.getElementById(id)
    old.classList.add('d-none')
    old.insertAdjacentHTML('afterend', $displayInput(updatedTodo))
    old.remove()
    changeInput.value = ''
    editRow.classList.add('d-none')
})