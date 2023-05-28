
const display = async(e) => {
    const response =  await fetch(`${baseUrl}${moviesInTheaters}${api_key}`)
    const data = await response.json()
    const information = data.results
    console.log(information)
    _render(renderRow, information.map(info => $movie(info)).join(''))
    
    
}
display()
//information ar gaeshveba manamde sanam await ar daamtavrebs ?
const viewMore = async(id) => {
    const _id = id 
    const response =  await fetch(`${baseUrl}${moviesInTheaters}${api_key}`)
    const data = await response.json()
    const information = data.results
    const searched = information.find(info => info.id === _id)
    _render(viewModalBody, $modalMovie(searched))
    viewModal.show()
    
}
const hideModal = (e) => {
    viewModal.hide()
}