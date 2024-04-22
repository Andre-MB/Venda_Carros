const nav = document.querySelectorAll('.nav-itens');
const moto = document.querySelector('#moto');
const car = document.querySelector('#car');
const bike = document.querySelector('#bike');
const searchInput = document.querySelector('#search-input');


const nameCategory = document.querySelector('#name-category')

nav[0].classList.add('active')

nav.forEach((e) => {
    e.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active')
        e.classList.add('active')
        if (e == nav[0]) {
            nameCategory.innerHTML = 'Catálogos de Carros';
        } else if (e == nav[1]) {
            nameCategory.innerHTML = 'Catálogos de Motos';
        } else if (e == nav[2]) {
            nameCategory.innerHTML = 'Catálogos de Bicicletas';
        }
    })
})


function api(url) {

    const container = document.querySelector('.list-vehicle');
    const div = document.createElement('div')
    div.classList.add('info-vehicle')

    fetch(url).then(response => response.json())
        .then(data => {
            data.car.map((e) => {
                div.innerHTML += `
            <article class="vehicle">
                    <h3 class="name-vehicle">${e.name}</h3>
                    <div class="img-vehicle">
                        <img src="${e.img}" alt="">
                    </div>
                    <ul class="info-vehicle">
                        <li><i class="bi bi-calendar4-week"></i>${e.year}</li>
                        <li><i class="bi bi-currency-dollar"></i>${e.price.toFixed(3)}</li>
                    </ul>
                    <button class="btn-add">
                    ver mais
                    <i class="bi bi-hand-index"></i>
                    </button>
                </article>
                    `
            })
            container.appendChild(div)

        })
}


document.querySelector('.btn-search-input').addEventListener('click', () => {
    fetch('/src/script/vehicle.json').then(response => response.json())
        .then(data => {
            data.car.map((e) => {
                if (searchInput.value == e.name) {
                    return console.log(`There's this vehicle with name ${searchInput.value}`)
                } else {
                    return console.log(`There ins't this vehicle with name ${searchInput.value}`)
                }
            })
        })
})

const btnSignIn = document.querySelector('#sign-in');
btnSignIn.addEventListener('click', () => {
    window.location = '/login.html'

})
