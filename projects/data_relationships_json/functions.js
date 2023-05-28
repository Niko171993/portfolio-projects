const deleteComment = (e) => {
    if (confirm(`do you want to delete comment?`)) {
        const id = e.target.dataset.id 
        deleteData(`${baseUrl}/comments/${id}`)
        .then(response => {
            document.getElementById(id).remove()
        })
    }
}

const deletePost = (e) => {
    if(confirm(`Do you want to delete Post?`)) {
        const {id} = e.target.dataset 
        deleteData(`${baseUrl}/posts/${id}`)
        .then((response) => {
            getData(`${baseUrl}/${relationship('posts', 'comments', id)}`)
            .then(response => {
                const {comments} = response
                comments.forEach(item => {
                    deleteData(`${baseUrl}/comments/${item.id}`)
                })
                document.getElementById(id).remove()
            })
        })
    }
}

const addComment = (e) => {
    _addComment.show()
    const {postId} = e.target.dataset
    addCommentButton.dataset.postId = postId
}
addCommentButton.addEventListener('click', (e) => {
    const {postId} = e.target.dataset
    const {comment} = commentForm
    const _comment = {
        id: uid(),
        comment: comment.value.trim(),
        postId: postId 
    }
    addData(`${baseUrl}/comments`, _comment)
    // postsList.insertAdjacentHTML('beforeend', $comment(_comment))
    document.getElementById(postId)
    .querySelector('.insert')
    .insertAdjacentHTML('beforeend', $comment(_comment))
})

