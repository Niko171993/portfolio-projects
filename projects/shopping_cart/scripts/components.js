const $alert = (_) => {
  const {status, message} = _
  return `<div class="alert alert-${status}" role="alert">
              ${message}
          </div>`
}

const $button = (_) => {
  const {type, text} = _
  return `<button type="button" class="btn btn-${type}">${text}</button>`
}

const $product = (_) => {
  const {id, title, price, icon} = _
  const addCartButton = `<button type="button" class="btn btn-primary float-end toggle" data-product-id="${id}" onclick="addProduct(event)">
                            <i class="fa-solid fa-cart-plus"></i>
                        </button>`

  return `<div class="col-lg-4 col-md-2 mb-4" id="${id}">
              <div class="card">
                    <div class="card-header">
                      <img src="images/products/${icon}" class="card-img-top" alt="..." />
                    </div>
                    <div class="card-body">
                      <h3 class="card-title">${title}</h3>
                    </div>
                    <div class="card-footer">
                      <div class="row align-items-center">
                        <div class="col-6">
                          <span class="fw-bold">${price}</span> ₾
                        </div>
                        <div class="col-6">
                          ${ localStorage.hasOwnProperty("auth") ? addCartButton : '' }
                        </div>
                      </div>
                    </div>
                  </div>
              </div>`
}

const $item = (_) => {
    const {id, title, price, icon, quantity } = _

    return `<tr id="${id}">
                <th>
                  <img src="images/products/${icon}" class="img-thumbnail w-50" alt="" />
                </th>
                <td class="w-50">
                  <span class="text-muted">${title}</span>
                </td>
                <td>
                  <input type="number" class="form-control" min="1" value="${quantity}" data-id="${id}" onchange="updateProductQuantity(event)" />
                </td>
                <td>
                  <span class="text-muted">${price}</span>
                </td>
                <td>
                  <span class="text-muted">${price * quantity} ₾</span>
                </td>
                <td>
                  <button type="button" class="btn btn-danger" data-id="${id}" onclick="removeProduct(event)">
                    <i class="fa-solid fa-trash-can"></i>
                  </button>
                </td>
          </tr>`
}

const $itemHeader = (_) => {

  return`<tr>
          <td>
            <span class="text-muted fw-bold">პოსტერი</span>
          </td>
          <td class="w-50">
            <span class="text-muted fw-bold">დასახელება</span>
          </td>
          <td>
            <span class="text-muted fw-bold">რაოდენობა</span>
          </td>
          <td>
            <span class="text-muted fw-bold">ფასი</span>
          </td>
          <td>
            <span class="text-muted d-block fw-bold">ჯამი</span>
          </td>
          <td>
            <span class="text-muted d-block fw-bold">მოდიფიკაცია</span><span ><button id="close" class="btn btn-danger">Close</button></span>
          </td>
      </tr>`

}

const $itemFooter = (_) => {
  const {sum, cart_id} = _
  return`<tr>
          <td class="w-75" colspan="3">
            <button type="button" class="btn btn-danger d-flex flex-nowrap align-items-center gap-2" data-cart-id="${cart_id}" onclick="emptyCart(event)">
              <i class="fa-solid fa-trash-can"></i>  
              <span class="text-white fw-bold empty-cart">კალათის გასუთავება</span>  
            </button>
          </td>
          <td class="w-25" colspan="3">
            <span class="text-muted d-block fw-bold">საერთო ჯამი: ${sum} ₾ </span>
          </td>
      </tr>`
}

const $authBlock = (_) => {
  let itemsCount = 0
  let itemsPrice = 0

  if (localStorage.hasOwnProperty("auth")) {
      const auth = JSON.parse(localStorage.getItem("auth"))
      const items = JSON.parse(localStorage.getItem('items')).filter((item) => item.cart_id === auth.cart_id)
      if (items.length) { 
        itemsCount = items.reduce((acc, item) => acc + item.quantity, 0)
        itemsPrice = items.reduce((acc, item) => acc + (item.quantity * item.price), 0)
      }
  }
  
  const authUser = `<div class="btn-group" role="group">
                      <button type="button" class="btn btn-danger" onclick="logOut()"> 
                        Log Out
                      </button>
                      <button type="button" class="btn btn-secondary d-flex align-items-center flex-nowrap gap-2 toggletwo" onclick="showItems()">
                        <i class="fa-solid fa-cart-shopping fa-lg"></i>
                        <span class="cart-info" data-items-count="${itemsCount} ცალი" data-items-price="${itemsPrice} ₾"></span>
                      </button>
                    </div>`

  const guest = `<div class="btn-group" role="group">
                    <button type="button" class="btn btn-primary" onclick="register()"> Register </button>
                    <button type="button" class="btn btn-warning" onclick="authorization()"> Authorization </button>
                  </div>`
  
  return `<div class="col-md-4">
            ${ localStorage.hasOwnProperty("auth") ? authUser : guest }
          </div>`
}