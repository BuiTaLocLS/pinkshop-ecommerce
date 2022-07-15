
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

let categories_cols = document.querySelectorAll('.categories-col')
categories_cols[3].style.paddingRight = "0px";
categories_cols[7].style.paddingRight = "0px";
