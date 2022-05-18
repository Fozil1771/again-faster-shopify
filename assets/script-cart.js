let addToCartBtn = document.getElementById('AddToCartForm')

let cartBtn = document.getElementById('cart-btn')
let cartDrawer = document.getElementById('cart-drawer')
let cartClose = document.getElementById('cart-close')

let cartContainer = document.querySelector('.cart-content')

addToCartBtn.addEventListener("submit", (e) => {
    e.preventDefault();
    let cartDrawer = document.getElementById('cart-drawer')
    let addToCartForm = document.querySelector('form[action$="/cart/add"]');
    let formData = new FormData(addToCartForm);
    console.log('clicked')

    fetch(window.Shopify.routes.root + 'cart/add.js', {
        method: 'POST',
        body: formData
    })
        .then(() => {
            return fetch(window.Shopify.routes.root + 'cart.js')
                .then(response => {
                    console.log(response)
                    return response.json()
                })
                .then(products => {
                    cartContainer.innerHTML = '';
                    products.items.forEach(product => {
                        cartContainer.insertAdjacentHTML('beforeend',
                            `<h2>${product.title}</h2>`
                        )
                    });

                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    cartDrawer.style.right = 0 + '%'
})




cartBtn.addEventListener('click', (e) => {
    e.preventDefault()
    cartDrawer.style.right = 0 + '%'
    cartDrawer.classList.add('cart-open')

    fetch(window.Shopify.routes.root + 'cart.js')
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(products => {
            cartContainer.innerHTML = '';
            products.items.forEach(product => {
                cartContainer.insertAdjacentHTML('beforeend',
                    `<h2>${product.title}</h2>`
                )
            });

        })
        .catch((error) => {
            console.error('Error:', error);
        });

})

cartClose.addEventListener('click', () => {
    cartDrawer.style.right = -100 + '%'
    cartDrawer.classList.remove('cart-open')
})