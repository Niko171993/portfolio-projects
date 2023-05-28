import Config from './config.js'
import Storage from './storage.js'
import {addPageModal, editPageModal} from './modals.js'
import Component from './components.js'
import Helper from './helpers.js'
import {addPageButton, addPageForm, editPageForm, pagesList, search, filter} from './dom-elements.js'


window.addEventListener('DOMContentLoaded', () => {
    Storage.init(Config.tables)
    Helper.render(pagesList, Storage.getData('pages').map(page => Component.page(page)).join(''))
})

addPageButton.addEventListener('click', () => {
    addPageModal.show()
})

addPageForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const { title, url, category } = addPageForm
    const page = {
        id: Helper.uid(),
        title: title.value.trim(),
        url: url.value.trim(),
        category: category.value
    }
    Storage.addData('pages', page)
    Helper.insertHtml(pagesList, 'beforeend', Component.page(page))
    addPageForm.reset() 
    addPageModal.hide()
})

editPageForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const { id, title, url, category, rows } = editPageForm
    const updated = {
        id: id.value.trim(),
        title: title.value.trim(),
        url: url.value.trim(),
        category: category.value 
    }
    Storage.updateData(rows.value, id.value, updated)
    const old = Helper.getById(id.value)
    old.classList.add('d-none')
    Helper.insertHtml(old, 'afterend', Component.page(updated))
    old.remove()
    editPageForm.reset()
    editPageModal.hide()
})

search.addEventListener('input', (e) => {
    const input = e.target.value.trim()
    const search = Storage.getData('pages').filter(page => page.title.toLowerCase().includes(input.toLowerCase()))
    Helper.render(pagesList, search.map(item => Component.page(item)).join(''))
})

filter.addEventListener('change', (e) => {
    const input = e.target.value
    const pages = Storage.getData('pages')
    if (input !== 'all') {
        Helper.render(pagesList,
            pages.filter(page => page.category === input)
            .map(item => Component.page(item)).join(''))
    } else {
        // const search = Storage.getData('pages').filter(page => true)
        // Helper.render(pagesList, search.map(item => Component.page(item)).join(''))
        Helper.render(pagesList, pages.map(item => Component.page(item)).join(''))
    }
})