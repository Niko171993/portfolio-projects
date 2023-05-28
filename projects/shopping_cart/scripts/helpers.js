// TODO => DOM SHORTAGES
const _getById = (id) => document.getElementById(id)
const _qs = (selector) => document.querySelector(selector)
const _qsAll = (selector) => document.querySelectorAll(selector)
const _insertHtml = (element, location, template) => element.insertAdjacentHTML(location, template)
const _render = (element, content) => element.innerHTML = content
// TODO => Create Unique ID
const uid = () => Date.now().toString(36) + Math.random().toString(36).substr(2);

// TODO => storage Methods
const _insertDataIntoStorage = (table, data) => {
    if (localStorage.hasOwnProperty(table)) { 
        const tables = JSON.parse(localStorage.getItem(table))
        tables.push(data)
        localStorage.setItem(table, JSON.stringify(tables))
    }
}

const _checkStorageTable = (table, defaultValue) => {
    if(!localStorage.hasOwnProperty(table)){
        localStorage.setItem(table, JSON.stringify(defaultValue))
    } 
}

