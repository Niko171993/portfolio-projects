// const $user = (user) => {
//   const {avatar, first_name, id} = user
//   return `<div class="col-lg-4 col-md-6 mb-4">
//                 <div class="card">
//                     <img src="${avatar}" class="card-img-top" alt="...">
//                     <div class="card-body">
//                       <h5 class="card-title">${first_name}</h5>
//                       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                       <button type="button" class="btn btn-primary" onclick="viewMore(${id})">
//                         View More
//                       </button>
//                   </div>
//                 </div>
//               </div>`
// }


// const $userView = (user) => {
//   const {avatar, first_name, id} = user
//   return `<div class="card">
//                     <img src="${avatar}" class="card-img-top" alt="...">
//                     <div class="card-body">
//                       <h5 class="card-title">${first_name}</h5>
//                       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                   </div>
//                 </div>`
// }


const components = {
  
  user(user) {
    const {avatar, first_name, id} = user
    return `<div class="col-lg-4 col-md-6 mb-4">
            <div class="card">
                <img src="${avatar}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title text-center">${first_name}</h5>
                  <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button type="button" class="btn btn-primary" onclick="viewMore(${id})">
                    View More
                  </button>
              </div>
            </div>
          </div>`
  },

  userView(user) {
    const {avatar, first_name, id} = user
    return `<div class="card">
                    <img src="${avatar}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${first_name}</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>`
  }
}
