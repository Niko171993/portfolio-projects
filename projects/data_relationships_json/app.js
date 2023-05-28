window.addEventListener('DOMContentLoaded', (e) => {
   getData(`${baseUrl}/${relationship('posts', 'comments')}`)
   .then(posts => {
    _render(postsList, posts.map(item => post(item)).join(''))
   })
 })

addPost.addEventListener('click', (e) => {
    postModal.show()
})

postForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const {title, description} = postForm 
    const newpost = {
        id: uid(),
        title: title.value,
        description: description.value
    }
    addData(`${baseUrl}/posts`, newpost)
    postsList.insertAdjacentHTML('beforeend', post(newpost))
})








// getData(`${baseUrl}/${relationship('posts', 'comments', id)}`)
// .then(response => {
//     deleteData(`${baseUrl}/posts/${id}`)
//     .then(response => {
//         const {comments} = response
//         comments.forEach(item => {
//             document.getElementById
//         })
//         document.getElementById(id).remove()
//     })
    
// })