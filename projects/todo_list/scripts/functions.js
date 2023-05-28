const deleteButton = (e) => {
    const {deleteId} = e.target.dataset 
    console.log(deleteId)
    todos = todos.filter(item => item.id !== deleteId)
    localStorage.setItem('todos', JSON.stringify(todos))
    document.getElementById(deleteId).remove() 
    deleteAllButtonToggle() 
}

const changeBackground = (e) => {
 if(e.target.checked) {
    document.getElementById(e.target.value).classList.add('bg-success', 'text-white')
 } else {
    document.getElementById(e.target.value).classList.remove('bg-success', 'text-white')
 }
 deleteAllButtonToggle()
}

const editButton = (e) => {
    const {edit} = e.target.dataset 
    const _todo = todos.find(item => item.id === edit)
    changeInput.value = _todo.text
    changeButton.dataset.saveId = edit 
    editRow.classList.remove('d-none')



}


const deleteAllButtonToggle = (e) => {
 if(document.querySelectorAll('.check-checkbox:checked').length) {
    deleteAllButton.disabled = false 
 } else {
    deleteAllButton.disabled = true 
 }
}
