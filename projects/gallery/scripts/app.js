import Storage from './storage.js'
import Config from './config.js'
import Helper from './helpers.js'
import {galleryList, addGalleryButton, galleryForm} from './dom-elements.js'
import {$gallery} from './components.js'
import {galleryModal} from './modals.js'
window.addEventListener('DOMContentLoaded', (e) => {
    Storage.init(Config.tables)
    const galleries = Storage.getData('galleries')
    const images = Storage.getData('images')
    const galleryImages = galleries.map(gallery => {
        const _images = images.filter(image => image.gallery_id === gallery.id)
        return {...gallery, images: _images}
    })
    Helper.render(galleryList, galleryImages.map(item => $gallery(item)).join(''))
})

addGalleryButton.addEventListener('click', e => {
    galleryModal.show()
})

galleryForm.addEventListener('submit', e => {
    e.preventDefault()
    const {title} = galleryForm 
    const newGallery = {
        id: Helper.uid(),
        title: title.value.trim(),
        images: []
    }
    Storage.addData('galleries', newGallery) 
    Helper.insertHtml(galleryList, 'beforeend', $gallery(newGallery))
    galleryForm.reset()
    galleryModal.hide() 
})

