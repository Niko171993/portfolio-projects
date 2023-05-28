import Storage from './storage.js'
import Helper from './helpers.js'
import {editPageModal} from './modals.js'
import {editPageForm} from './dom-elements.js'
const _delete_ = (e) => {
    if(confirm(`Do you want to delete this component? `)) {
        const {id, rows} = e.target.dataset
        Storage.removeData(rows, id)
        Helper.getById(id).remove() 
    }
    
}

const _edit_ = (e) => {
    const {id, rows} = e.target.dataset
    const data = Storage.getData(rows).find(item => item.id === id)
    const {title, url, category, rows: _rows, id: _id} = editPageForm 
    title.value = data.title 
    url.value = data.url 
    category.value = data.category 
    _id.value = data.id 
    _rows.value = rows
    editPageModal.show()
}



export {_delete_, _edit_}