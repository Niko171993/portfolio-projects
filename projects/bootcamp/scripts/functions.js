const productsCategories = async(e) => {
    let categories = null
    
    try {
        categories= await getData(`https://dummyjson.com/products/categories`) 
    }catch(err) {
        console.log(err)
   }
   
   const template = `<option selected value='none'>Please Select From Menu</option>`
   
   _render(select, categories.map(category => $productCategory({title: category})).join(''))
   _insertHtml(select,'afterbegin', template)
}

const searchCategory = async(e) => {
    // const {id} = e.target.dataset 
    // let response = null
   
    // try {
    //     response = await getData(`https://dummyjson.com/products/category/${id}`)
    // }catch(err) {
    //     console.log(err)
    // }
   
    // const products = response.products
    
    // _render(productsRow, products.map(item => $product(item)).join(''))

}

const viewProductModal = async(e) => {
    const {id} = e.target.dataset 
    let response = null 
    
    try {
        response = await getData(`https://dummyjson.com/products/${id}`)
    } catch(err) {
        console.log(err)
    }
    
    _render(productModalBody, $viewProduct(response))
    productModal.show()
}

paginationForm.addEventListener('click', async(e) => {
    e.preventDefault()
    console.log(e.target)
    let result = null 
    
    try {
        result = await getData(`https://dummyjson.com/products${e.target.dataset.id}`)
    } catch (err) {
        console.log(err)
    }
    
    const products = result.products 
    _render(productsRow, products.map(item => $product(item)).join(''))
})

const addToCart = async(e) => {
    const {id} = e.target.dataset 
    let products = Storage.getData('cart')
    const selectedProduct = products.find(item => item.id === Number(id))
    if (selectedProduct) {
        Storage.updateData('cart', id, {...selectedProduct, quantity: selectedProduct.quantity + 1})
        // products = products.map(item => {
        //     if (item.id === id) return {...item, quantity: item.quantity + 1}
        //     return item 
        // })
        // localStorage.setItem('cart', JSON.stringify(products))
    } else {
        try {
            let product = await getData(`https://dummyjson.com/products/${id}`)
                Storage.addData('cart', {...product, quantity: 1})
                // product = {...product, quantity: 1}
                // products.push(product)
                // localStorage.setItem('cart', JSON.stringify(products))
        } catch (err) {
            console.log(err)
        }   
    }


    // const cart = JSON.parse(localStorage.getItem('cart'))

    // const checkedCarts = cart.map(item => {
    //     if(item.id === id) return {...item, quantity: item.quantity + 1}
    //     return item 
    // })
    // Storage.addData('cart', response)
}