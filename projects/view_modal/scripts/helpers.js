const _insertHtml = (element, location, template) => element.insertAdjacentHTML(location, template)
const _render = (element, content) => element.innerHTML = content