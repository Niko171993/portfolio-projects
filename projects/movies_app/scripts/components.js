const $movie = (_) => {
    const {id, title, overview, poster_path, original_language, vote_average, vote_count} = _
   
    return `
            <div class="col-lg-4 my-5" id=${id}>
                <div class="card" style="width: 18rem;">
                    <img src="${api_img}${poster_path}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">Original Language: ${original_language}</p>
                    <p class="card-text">Vote Average:${vote_average}</p>
                    <p class="card-text">Vote Count: ${vote_count}</p>
                    <button class='btn btn-outline-success' onclick='viewMore(${id})'>View More</button>
                    </div>
                </div>
            </div>`
}
const $modalMovie = (_) => {
    const {id, title, overview, poster_path, original_language, vote_average, vote_count, genre_ids} = _

    return `<div class="col-lg-4" id=${id}>
                <div class="card" style="width: 18rem;">
                    <img src="${api_img}${poster_path}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <h5 class="card-title">Genre Id's ${genre_ids.join(' / ')}</h5>
                    <p class="card-text">${overview}</p>
                    </div>
                </div>
            </div>`
}