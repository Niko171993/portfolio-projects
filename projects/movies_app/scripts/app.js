const api_key = `&api_key=03ae8d18728f51a099058a8cf7973902`
const baseUrl = `https://api.themoviedb.org/3`
// const api_url = `${baseUrl}/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`
const moviesInTheaters = `/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`
const api_url = `${baseUrl}${moviesInTheaters}${api_key}` 

const renderRow = document.getElementById('data-row')
const viewModalBody = document.getElementById('view-modal-body')
const view_modal = document.getElementById('view-modal')
const viewModal = new bootstrap.Modal(view_modal, {
    keyboard: false 
})

const api_img = `https://image.tmdb.org/t/p/w500/`

const adultOr = document.getElementById('adult')
const voteCount = document.getElementById('vote-count')
const startDate = document.getElementById('start-date')
const endDate = document.getElementById('end-date')
const filterButton = document.getElementById('filter')
const three = document.getElementById('three')
// daamate 1 xilaki da mand gamova ekranze shemtxvevit shercheuli 3 pilmi
filterButton.addEventListener('click', async(e) => {
    const response =  await fetch(`${baseUrl}${moviesInTheaters}${api_key}`)
    const data = await response.json()
    let {results} = data
    //repeat 30 times 
    results = results.map(item => {
        if (Math.random() > 0.5) return {...item, adult: true}
        return item 
    })

    let filtered = [] 
    if(adultOr.value !== 'none') {
        if(Boolean(Number(adultOr.value))) filtered = results.filter((item) => item.adult)
        else filtered = results.filter((item) => !item.adult) 
    }

    if(voteCount.value) {
        if(filtered.length) filtered = filtered.filter(item => item.vote_count >= Number(voteCount.value))
        else filtered = results.filter(item => item.vote_count >= Number(voteCount.value))
    }

    const start = startDate.value ? Number(startDate.value) : 0
    const end = endDate.value ? Number(endDate.value) : 3000

    if(filtered.length) {
        filtered = filtered.filter(item => {
            const year = Number(item.release_date.split('-')[0])
            return year >= start && year <= end 
        })
    } else {
        filtered = results.filter(item => {
            const year = Number(item.release_date.split('-')[0])
            return year >= start && year <= end 
        })
    }

   _render(renderRow, filtered.map(item => $movie(item)).join(''))

   
})
three.addEventListener('click', async(e) => {
    const response =  await fetch(`${baseUrl}${moviesInTheaters}${api_key}`)
    const data = await response.json()
    const {results} = data
    let answer = results.sort((a, b) => 0.5 - Math.random()).splice(0, 3)
    _render(renderRow, answer.map(info => $movie(info)).join(''))
    
})

