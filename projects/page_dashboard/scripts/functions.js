// TODO => Pages FUNCTIONS

const openDashboard = (e) => {
 const _id = e.target.dataset.id 
 document.getElementById(_id).querySelector('.page__dashboard').classList.add('d-flex')
}

const closeDashboard = (e) => {
    const _id = e.target.dataset.id 
    document.getElementById(_id).querySelector('.page__dashboard').classList.remove('d-flex')
}

const toggleDisabledSaveButton = () => {
  if(pageTitle.value.trim().length >= 3 && pageUrl.value.trim().length >=3) {
    savePage.disabled = false 
  } else {
    savePage.disabled = true
  }
}

const updateDomComponent = (data, component) => {
   
}


const deleteComponent = (e) => {
  const id = e.target.dataset.delete 
  pages = pages.filter((page) => page.id !== id)
  localStorage.setItem('pages', JSON.stringify(pages))
  document.getElementById(id).remove()
}

const editComponent = (e) => {
 const id = e.target.dataset.edit 
 const search = pages.find((page) => page.id === id)
 editWebsite.value = search.title 
 editUrl.value = search.url 
 editRow.classList.remove('d-none')
 editSavePage.dataset.saveId = id
}