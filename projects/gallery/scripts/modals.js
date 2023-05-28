import Helper from './helpers.js'
const galleryModal = new bootstrap.Modal(Helper.getById('gallery-modal'), {
    keyboard: false
})

const imageModal = new bootstrap.Modal(Helper.getById('image-modal'), {
    keyboard: false 
})
export {galleryModal, imageModal}