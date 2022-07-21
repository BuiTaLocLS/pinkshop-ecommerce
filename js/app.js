document.querySelectorAll('.dropdown > a').forEach(e => {
    e.addEventListener('click', (event) => event.preventDefault())
})

document.querySelectorAll('.mega-dropdown > a').forEach(e => {
    e.addEventListener('click', (event) => event.preventDefault())
})

document.querySelectorAll('#menu a').forEach(e => {
    e.addEventListener('click', (event) => event.preventDefault())
})


let menu_list = document.querySelectorAll('#menu>ul>li');

menu_list.forEach(e => {
    e.addEventListener('click', () => {
        let symbol = e.children[0].children[1];
        if (e.classList.contains('active')) {
            e.classList.remove('active')
            symbol.innerHTML = '+'
        } else {
            e.classList.add('active')
            symbol.innerHTML = '-'
        }
    })
})

document.querySelectorAll('.dropdown > a').forEach(e => {
    e.addEventListener('click', (event) => event.preventDefault())
})

document.querySelectorAll('.mega-dropdown > a').forEach(e => {
    e.addEventListener('click', (event) => event.preventDefault())
})

document.querySelector('#mb-menu-toggle').addEventListener('click', () => document.querySelector('#header-wrapper').classList.toggle('active'))
document.querySelector('#mb-menu-close').addEventListener('click', () => document.querySelector('#header-wrapper').classList.remove('active'))
document.querySelector('#mb-grid-toggle').addEventListener('click', () => document.querySelector('#menu').classList.toggle('mb-active'))
document.querySelector('#mb-grid-close').addEventListener('click', () => document.querySelector('#menu').classList.remove('mb-active'))