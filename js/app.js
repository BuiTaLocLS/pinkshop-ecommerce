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