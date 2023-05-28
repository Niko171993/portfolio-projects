import Helper from './helpers.js'
const addPageModal = new bootstrap.Modal(Helper.getById('add-page-modal'), {
    keyboard: false
})

const editPageModal = new bootstrap.Modal(Helper.getById('edit-page-modal'), {
    keyboard: false
})

export {addPageModal, editPageModal}
