// TODO => DOM Helpers
const _getById = (id) => document.getElementById(id)
const _qs = (selector) => document.querySelector(selector)
const _qsAll = (selector) => document.querySelectorAll(selector)
const _insertHtml = (element, location, template) => element.insertAdjacentHTML(location, template)
const _render = (element, content) => element.innerHTML = content
// TODO => Create Unique ID
const uid = () => Date.now().toString(36) + Math.random().toString(36).substring(2);
// TODO Array Helpers
const _arrayShuffle = (arr) => arr.sort(() => Math.random() - 0.5)
const _randomItemsFromArray = (arr, items) => arr.sort(() => Math.random() - 0.5).splice(0,items)

