const authRow = _getById('auth-row');
const productsRow = _getById('products');

const registerForm = _getById('register-form');
const authorizationForm = _getById('authorization-form');

// TODO => Make Bootstrap Modal

const registerModal = new bootstrap.Modal(_getById('register-modal'), {
    keyboard: false
})
const authorizationModal = new bootstrap.Modal(_getById('authorization-modal'), {
    keyboard: false
})

const items_modal = _getById('items-modal');
const itemsModal = new bootstrap.Modal(items_modal, {
    keyboard: false
})

window.addEventListener('DOMContentLoaded', () => {
    const {products} = database
    _render(authRow, $authBlock({}))
    _render(productsRow, products.map((product) => $product(product)).join(''))
    _checkStorageTable('users', [])
    _checkStorageTable('carts', [])
    _checkStorageTable('items', [])
})

registerForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = registerForm.register_email.value.trim()
    const password = registerForm.register_password.value.trim()
    const repeatPassword = registerForm.register_repeat_password.value.trim()

    if (password !== repeatPassword) {
        alert('password is not matches')
    } else {
        // TODO: Create new user account
        const userID = uid() // b431cdb8-3a6f-4fde-8701-c64cbb783713
        const cartID = uid() // 2e54070a-493a-4380-b4b5-c54864a0fcd7
        
        const user = {
            id: userID, // b431cdb8-3a6f-4fde-8701-c64cbb783713
            email: email,
            password: password,
            cart_id: cartID // 2e54070a-493a-4380-b4b5-c54864a0fcd7
        }

        const cart = {
            id: cartID, // 2e54070a-493a-4380-b4b5-c54864a0fcd7
            user_id: userID // b431cdb8-3a6f-4fde-8701-c64cbb783713
        }

        // TODO => insert User into Storage
        _insertDataIntoStorage('users', user)

        // TODO => insert Cart  into Storage
        _insertDataIntoStorage('carts', cart)
        
        // TODO => set User Authentication
        delete user.password
        localStorage.setItem('auth', JSON.stringify(user))

        // TODO => Clear form && Close Modal
        registerForm.reset()
        registerModal.hide()

        // TODO => Reload Page
        window.location.reload()
    }
})

authorizationForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = authorizationForm.authorization_email.value.trim()
    const password = authorizationForm.authorization_password.value.trim()

    const users = JSON.parse(localStorage.getItem('users'))
    const authUser = users.find((user) => user.email === email && user.password === password)
    
    if (authUser) {
        delete authUser.password
        localStorage.setItem('auth', JSON.stringify(authUser))

        // TODO => Clear form && Close Modal
        authorizationForm.reset()
        authorizationModal.hide()

        // TODO => Reload Page
        window.location.reload()
    }

})