// TODO => EVENTS
// TODO => MOUSE EVENTS [CLICK, MOUSEDOWN, MOUSEUP, MOUSEMOVE, MOUSEOUT, MOUSEOVER]
// TODO => FORM EVENTS [CHANGE, FOCUS, BLUR, SUBMIT, RESET]
// TODO => KEYBOARD EVENTS [KEYDOWN, KEYUP, KEYPRESS, INPUT]
// TODO => DOM EVENTS [LOAD, UNLOAD, ABORT, ERROR, SELECT, RESIZE, SCROLL, HASHCHANGE, FORMCHANGE, MESSAGE]

const webPage = _getById('web-page')
const pagesDashboard = _getById('pages-dashboard')
const savePage = _getById('save-page')
// TODO => web page fields
const pageTitle = _getById('page-title')
const pageUrl = _getById('page-url')
let pages = []
//original project
// window.addEventListener('load', () => { })
window.addEventListener('DOMContentLoaded', () => {
    if(!localStorage.hasOwnProperty('pages')) {
        localStorage.setItem('pages', '[]')
    }
    pages = JSON.parse(localStorage.getItem('pages'))
    _render(pagesDashboard, pages.map((page) => $page(page)).join(''))
    _insertHtml(pagesDashboard, 'beforeend', $addWebPage({}))
    
})

webPage.addEventListener('submit', (e) => {
   e.preventDefault()
   const website = pageTitle.value 
   const url = pageUrl.value 
   const _page = {
    id: uid(),
    title: website,
    url: url 
   }
   pages.push(_page)
   localStorage.setItem('pages', JSON.stringify(pages))
   pagesDashboard.insertAdjacentHTML('afterbegin', $page(_page))
   document.getElementById('add-page-button').click()
   savePage.disabled = true 
   webPage.reset()
})

pageTitle.addEventListener('input', () => {
    toggleDisabledSaveButton()
})

pageUrl.addEventListener('input', () => {
    toggleDisabledSaveButton()
})

const editRow = document.getElementById('edit-row')
const editWebsite = document.getElementById('edit-input-website')
const editUrl = document.getElementById('edit-input-url')
const editSavePage = document.getElementById('edit-savepage')



editSavePage.addEventListener('click', (e) => {
    const _id = e.target.dataset.saveId
    const updated_page = {
        id: _id, 
        title: editWebsite.value,
        url: editUrl.value 
    }
    pages = pages.map((page) => {
        if(page.id === _id) return updated_page
        else return page 
    })
    localStorage.setItem('pages', JSON.stringify(pages))
    const old_page = document.getElementById(_id)
    old_page.classList.add('d-none')
    old_page.insertAdjacentHTML('afterend', $page(updated_page))
    old_page.remove()
    editRow.classList.add('d-none')
})