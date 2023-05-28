const $productCategory = _ => {
    const {title} = _
    return `<option value="${title}">${title}</option>`
}

const $product = _ => {
    const {id, title, category, thumbnail, price} = _
    return `<div class="col-lg-3" id="${id}">
                <div class="card" style="width: 18rem;">
                    <img src="${thumbnail}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${price} / ${category}</p>
                    <button href="#" class="btn btn-outline-success" data-id="${id}" onclick="viewProductModal(event)">View More</button>
                    <button class="btn btn-success" data-id="${id}" onclick="addToCart(event)">Add To Cart</button>
                    </div>
                </div>
            </div>`
}

const $viewProduct = _ => {
    const {id, title, category, thumbnail, price, stock, rating, discountPercentage, description, brand} = _
    return `<div class="col-lg-3" id="${id}">
                <div class="card" style="width: 18rem;">
                    <img src="${thumbnail}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${price} / ${category} / stock:${stock} / rating: ${rating} /${discountPercentage} / description: ${description} / brand: ${brand}</p>
                    </div>
                </div>
            </div>`
}