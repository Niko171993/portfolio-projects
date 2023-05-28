let productsStorage = null
window.addEventListener('DOMContentLoaded', async(e) => {
    if(!localStorage.hasOwnProperty('cart')) {
        localStorage.setItem('cart', '[]')
    }
    
    let response = null 
    try {
        productsStorage = await getData(`https://dummyjson.com/products?limit=10`)
    }catch(err) {
        console.log(err)
    }
    const allProducts = productsStorage.products 
    _render(productsRow, allProducts.map(item => $product(item)).join(''))
    productsCategories() 
})

searchButton.addEventListener('click', async(e) => {
    const input = searchForm.value 
    let response = null 

    try {
        response = await getData(`https://dummyjson.com/products`)
    } catch(err) {
        console.log(err)
    }
    
    const products = productsStorage.products 
    const filteredProducts = products.filter(item => item.title.toLowerCase().includes(input.toLowerCase()))
    console.log(filteredProducts)
    _render(productsRow, filteredProducts.map(item => $product(item)).join(''))
})

select.addEventListener('change', async(e) => {
    // console.log(e.target.selectedOptions[0].getAttribute("name"));
    const input = e.target.value
    
    let response = null
    
    try {
        response = await getData(`https://dummyjson.com/products/category/${input}`)
    }catch(err) {
        console.log(err)
    }
    console.log(response, 'response')
    const products = response.products
    if(input !== 'none') {
        _render(productsRow, products.map(item => $product(item)).join(''))
    } else {
        return
    }
   
    
})

