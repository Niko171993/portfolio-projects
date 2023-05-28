const post = (_) => {
    const {id, title, description, comments} = _
    const _comments = comments.map(item => $comment(item)).join('')
    return `<div class="col-lg-6 mb-4" id="${id}">
                <div class="card text-center">
                    <div class="card-header">
                        <h3 class="card-title">
                            ${title}
                            <button class="btn btn-danger" data-id="${id}" onclick="deletePost(event)">Delete</button>
                        </h3>
                    </div>
                    <div class="card-body">
                    <p class="card-text">${description}</p>
                    </div>
                    <div class="card-footer text-muted">
                        <h5 class="card-title"> Comments </h5>
                        <ul class="list-group list-group-flush insert"> 
                            ${_comments}
                        </ul>
                        <button class="btn btn-primary" data-post-id="${id}" onclick="addComment(event)"> add Comment </button>
                    </div>
                </div>
            </div>`
}

const $comment = (_) => {
    const {id, comment} = _
    return `
    <li class="list-group-item" id="${id}">
    ${comment}
    <button class="btn btn-danger" data-id="${id}" onclick="deleteComment(event)">delete</button>
    </li>`
}