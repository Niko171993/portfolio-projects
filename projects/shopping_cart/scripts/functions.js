// TODO => Pages FUNCTIONS

const logOut = () => {
    localStorage.removeItem('auth')
    window.location.reload()
}

const register = () => {
    registerModal.show()
}

const authorization = () => {
    authorizationModal.show()
}

const showItems = () => {
    let itemsSum = 0
    const itemsTable = items_modal.querySelector('.items-table')
    const auth = JSON.parse(localStorage.getItem("auth"))
    //if we want to get the items, we have to get the cart first.
    let itemsTemplate = []
    
    const items = JSON.parse(localStorage.getItem('items')).filter((item) => item.cart_id === auth.cart_id)
    
       
    if (items.length ) {
        itemsTemplate = items.map((item) => $item(item))
        itemsSum = items.reduce((acc, item) => acc + (item.quantity * item.price), 0)
        
        itemsTemplate.unshift($itemHeader({}))
        itemsTemplate.push($itemFooter({sum: itemsSum, cart_id: auth.cart_id}))
        
        _render(itemsTable, itemsTemplate.join(''))
    
        itemsModal.show()
        //if there are no items in the cart do not show the modal
    } else if (!items.length) {
        
        itemsTemplate = items.map((item) => $item(item))
        itemsSum = items.reduce((acc, item) => acc + (item.quantity * item.price), 0)
        
        itemsTemplate.unshift($itemHeader({}))
        itemsTemplate.push($itemFooter({sum: itemsSum, cart_id: auth.cart_id}))
    
        _render(itemsTable, itemsTemplate.join(''))
        
        if(document.querySelector('.toggle').clicked == true) {
            itemsModal.show()
        } else if (!items.length) {
            itemsModal.hide()
        }
       
    } 
    document.getElementById('close').addEventListener('click', (e) => {
        itemsModal.hide()
    })
}

const addProduct = (e) => {
    //each item has a product_id
    const {productId} = e.target.dataset
    const auth = JSON.parse(localStorage.getItem('auth'))
    const items = JSON.parse(localStorage.getItem('items'))
    // TODO => Find Product in Databases
    const {products} = database
    //product which we are currently adding
    const product = products.find((product) => product.id === productId)
    //we find which item it is with the productId in the cart ... item in the cart 
    const selectedProduct = items.find((item) => item.product_id === product.id)
    
        if (selectedProduct) {
            const updatedItemsList = items.map((item) => {
                if(item.product_id === product.id) return {...item, quantity: item.quantity + 1}
                return item
            })
            localStorage.setItem('items', JSON.stringify(updatedItemsList))
        } else {
            const  cartItem = {
                id: uid(),
                cart_id: auth.cart_id,
                product_id: product.id,
                title: product.title,
                price: product.price,
                icon: product.icon,
                quantity: 1
            }
            _insertDataIntoStorage('items', cartItem)
        }
    
        // TODO => UPDATE CART INFO ATTRIBUTES
        updateCartAttributes()
    } 

   


const removeProduct = (e) => {
    if (confirm(`Are you sure you want to Delete this product 📦`)) {
        //item's id. 
        const {id} = e.target.dataset
        const items = JSON.parse(localStorage.getItem('items')).filter(item => item.id !== id)
        localStorage.setItem('items', JSON.stringify(items))
        updateCartAttributes()
        showItems()
    }
} 

const updateProductQuantity = (e) => {
    const input = e.target 
    const {id} = input.dataset
    const value = +input.value // CONVERT STRING TO NUMBER
    input.disabled = true
    const items = JSON.parse(localStorage.getItem('items')).map(item => {
        if (item.id === id) return {...item, quantity: value}
        return item
    })
    localStorage.setItem('items', JSON.stringify(items))
    updateCartAttributes()
    showItems()
}

const emptyCart = (e) => {
    if (confirm(`Are you sure you want to Empty Cart 🛒`)) {
        const {cartId} = e.target.dataset
        console.log(cartId)
        const items = JSON.parse(localStorage.getItem('items')).filter((item) => item.cart_id !== cartId)
        localStorage.setItem('items', JSON.stringify(items))
        updateCartAttributes()
        
        itemsModal.hide()
    }
}

const updateCartAttributes = () => {
    const auth = JSON.parse(localStorage.getItem('auth'))
    const items = JSON.parse(localStorage.getItem('items')).filter((item) => item.cart_id === auth.cart_id)
    itemsCount = items.reduce((acc, item) => acc + item.quantity, 0)
    itemsPrice = items.reduce((acc, item) => acc + (item.quantity * item.price), 0)

    const cartInfo = document.querySelector('.cart-info')
    cartInfo.dataset.itemsCount = `${itemsCount} ცალი`
    cartInfo.dataset.itemsPrice = `${itemsPrice} ₾`
}

const updateDomComponent = (data, component) => {
    const {id} = data
    const old = _getById(id)
    old.classList.add('d-none')
    _insertHtml(old, 'beforebegin', component(data))
    old.remove()
}