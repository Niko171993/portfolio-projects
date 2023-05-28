const row = document.getElementById('data-row')
const viewModalBody = document.getElementById('view-modal-body')

const viewModal  = new bootstrap.Modal(document.getElementById('view-modal'), {
  keyboard: false
})

_render(row, db.users.map((user) => components.user(user)).join(''))
