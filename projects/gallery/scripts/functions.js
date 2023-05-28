import {imageModal} from './modals.js'
import {imageForm} from './dom-elements.js'
import Helper from './helpers.js'
import Storage from './storage.js'
import {$image} from './components.js'
const addImage = e => {
    imageModal.show()
    const {galleryId: id} = e.target.dataset 
    const {galleryId} = imageForm
    galleryId.value = id
}

const {image} = imageForm
    
image.addEventListener('change', (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (event) => {
            const str = `${reader.result}`
            const {src} = imageForm 
            src.value = str
    }
})

imageForm.addEventListener('submit', e => {
    e.preventDefault()
    const {src, galleryId} = imageForm
    const newImage = {
        id: Helper.uid(),
        src: src.value,
        gallery_id: galleryId.value 
    }
    Storage.addData('images', newImage)
    document.getElementById(galleryId.value).querySelector('.insert').insertAdjacentHTML('beforeend', $image(newImage))
    imageForm.reset() 
    imageModal.hide()

})
export {addImage}