const viewMore = (id) => {
    const view = db.users.find((user) => id === user.id)
    console.log(view)
    const template =  components.userView(view)
    console.log(template, '++')
    _render(viewModalBody, template)
    viewModal.show()
  }
  
  const closeModal = () => {
    viewModal.hide()
  }
