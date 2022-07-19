
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

let categories = [
    {
        name: 'WINTER WEAR',
        image: './assets/images/icons/coat.svg',
        mount: '(58)'
    },
    {
        name: 'GLASSES & LENS',
        image: './assets/images/icons/glasses.svg',
        mount: '(53)'
    },
    {
        name: 'SHORTS & JEANS',
        image: './assets/images/icons/shorts.svg',
        mount: '(68)'
    },
    {
        name: 'T-SHIRTS',
        image: './assets/images/icons/tee.svg',
        mount: '(84)'
    },
    {
        name: 'JACKET',
        image: './assets/images/icons/jacket.svg',
        mount: '(35)'
    },
    {
        name: 'WATCH',
        image: './assets/images/icons/watch.svg',
        mount: '(16)',
    },
    {
        name: 'HAT & CAPS',
        image: './assets/images/icons/hat.svg',
        mount: '(39)',
    }
]

let categories_list = document.querySelector('#categories')

categories.forEach(e => {
    let prod = `
    <div class="col-3 col-md-4 col-sm-12 categories-col">
        <div class="categories-item">
            <div class="categories-item-img ">
                <img src="${e.image}" alt="">
            </div>
            <div class="categories-content-box">
                <div class="categories-item-info">
                    <div class="categories-item-name">
                    ${e.name}
                    </div>
                    <div class="categories-item-amount">
                    ${e.mount}
                    </div>
                </div>
                <div class="categories-btn">
                    <a href="#">show all</a>
                </div>
            </div>
        </div>
    </div>
    `
    categories_list.insertAdjacentHTML("beforeend", prod)
})


let new_products = [
    {
        category: 'JACKET',
        name: 'Mens Winter Leathers Jackets',
        image1: './assets/images/products/jacket-3.jpg',
        image2: './assets/images/products/jacket-4.jpg',
        sale: '15%',
        old_price: '$48.00',
        curr_price: '$75.00'
    },
    {
        category: 'SHIRT',
        name: 'Pure Garment Dyed Cotton Shirt',
        image1: './assets/images/products/shirt-1.jpg',
        image2: './assets/images/products/shirt-2.jpg',
        sale: '20%',
        old_price: '$45.00',
        curr_price: '$56.00'
    },
    {
        category: 'JACKET',
        name: 'MEN Yarn Fleece Full-Zip Jacket',
        image1: './assets/images/products/jacket-5.jpg',
        image2: './assets/images/products/jacket-6.jpg',
        sale: '33%',
        old_price: '$58.00',
        curr_price: '$65.00'
    },
    {
        category: 'SKIRT',
        name: 'Black Floral Wrap Midi Skirt',
        image1: './assets/images/products/clothes-3.jpg',
        image2: './assets/images/products/clothes-4.jpg',
        sale: '10%',
        old_price: '$25.00',
        curr_price: '$35.00'
    },
    {
        category: 'CASUAL',
        name: "Casual Men's Brown Shoes",
        image1: './assets/images/products/shoe-2.jpg',
        image2: './assets/images/products/shoe-2_1.jpg',
        sale: '15%',
        old_price: '$99.00',
        curr_price: '$105.00'
    },
    {
        category: 'WATCHES',
        name: 'Pocket Watch Leather Pouch',
        image1: './assets/images/products/watch-3.jpg',
        image2: './assets/images/products/watch-4.jpg',
        sale: '15%',
        old_price: '$150.00',
        curr_price: '$170.00'
    },
    {
        category: 'WATCHES',
        name: 'Smart Watche Vital Plus',
        image1: './assets/images/products/watch-1.jpg',
        image2: './assets/images/products/watch-2.jpg',
        sale: '20%',
        old_price: '$100.00',
        curr_price: '$120.00'
    },
    {
        category: 'PARTY WEAR',
        name: 'Womens Party Wear Shoes',
        image1: './assets/images/products/party-wear-1.jpg',
        image2: './assets/images/products/party-wear-2.jpg',
        sale: '15%',
        old_price: '$25.00',
        curr_price: '$30.00'
    },
    {
        category: 'JACKET',
        name: 'Mens Winter Leathers Jackets',
        image1: './assets/images/products/jacket-1.jpg',
        image2: './assets/images/products/jacket-2.jpg',
        sale: '30%',
        old_price: '$32.00',
        curr_price: '$45.00'
    },
    {
        category: 'SPORTS',
        name: 'Trekking & Running Shoes - Black',
        image1: './assets/images/products/sports-2.jpg',
        image2: './assets/images/products/sports-4.jpg',
        sale: '10%',
        old_price: '$48.00',
        curr_price: '$64.00'
    },
    {
        category: 'FORMAL',
        name: "Men's Leather Formal Wear Shoes",
        image1: './assets/images/products/shoe-1.jpg',
        image2: './assets/images/products/shoe-1_1.jpg',
        sale: '20%',
        old_price: '$50.00',
        curr_price: '$60.00'
    },
    {
        category: 'SHORTS',
        name: "Better Basics French Terry Sweatshorts",
        image1: './assets/images/products/shorts-1.jpg',
        image2: './assets/images/products/shorts-2.jpg',
        sale: '15%',
        old_price: '$78.00',
        curr_price: '$85.00'
    },
]

let new_products_list = document.querySelector('#new-products')

new_products.forEach(e => {
    let prod = `
    <div class="col-2 col-md-6 col-sm-12">
    <div class="showcase-products">

        <div class="showcase-banner">

            <img src="${e.image1}" alt="Mens Winter Leathers Jackets" width="300"
                class="product-img default">
            <img src="${e.image2}" alt="Mens Winter Leathers Jackets" width="300"
                class="product-img hover">

            <p class="showcase-badge">${e.sale}</p>

            <div class="showcase-actions">

                <button class="btn-action">
                    <i class='bx bx-heart'></i>
                </button>

                <button class="btn-action">
                    <i class='bx bx-low-vision'></i>
                </button>

                <button class="btn-action">
                    <i class='bx bx-repeat'></i>
                </button>

                <button class="btn-action">
                    <i class='bx bx-shopping-bag'></i>
                </button>

            </div>

        </div>

        <div class="showcase-content">

            <a href="#" class="showcase-category">${e.category}</a>

            <a href="#">
                <h3 class="showcase-title">${e.name}</h3>
            </a>

            <div class="showcase-rating">
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bx-star'></i>
                <i class='bx bx-star'></i>
            </div>

            <div class="price-box price-product-box">
                <p class="price">${e.curr_price}</p>
                <del${e.old_price}</del>
            </div>

        </div>
    </div>
</div>
    `
    new_products_list.insertAdjacentHTML("beforeend", prod)
})
// top rate 
let top_rated_products = [...new_products]

top_rated_products = shuffle(top_rated_products)

let top_rated_list = document.querySelector('#top-rated-products')

top_rated_products.forEach(e => {
    let prod = `
    <div class="col-2 col-md-6 col-sm-12">
    <div class="showcase-products">

        <div class="showcase-banner">

            <img src="${e.image1}" alt="Mens Winter Leathers Jackets" width="300"
                class="product-img default">
            <img src="${e.image2}" alt="Mens Winter Leathers Jackets" width="300"
                class="product-img hover">

            <p class="showcase-badge">${e.sale}</p>

            <div class="showcase-actions">

                <button class="btn-action">
                    <i class='bx bx-heart'></i>
                </button>

                <button class="btn-action">
                    <i class='bx bx-low-vision'></i>
                </button>

                <button class="btn-action">
                    <i class='bx bx-repeat'></i>
                </button>

                <button class="btn-action">
                    <i class='bx bx-shopping-bag'></i>
                </button>

            </div>

        </div>

        <div class="showcase-content">

            <a href="#" class="showcase-category">${e.category}</a>

            <a href="#">
                <h3 class="showcase-title">${e.name}</h3>
            </a>

            <div class="showcase-rating">
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bx-star'></i>
                <i class='bx bx-star'></i>
            </div>

            <div class="price-box price-product-box">
                <p class="price">${e.curr_price}</p>
                <del${e.old_price}</del>
            </div>

        </div>
    </div>
</div>
    `
    top_rated_list.insertAdjacentHTML("beforeend", prod)
})

// let categories_cols = document.querySelectorAll('.categories-col')
// categories_cols[3].style.paddingRight = "0px";
// categories_cols[7].style.paddingRight = "0px";
