const nav = document.querySelectorAll('.nav-itens');
const moto = document.querySelector('#moto');
const car = document.querySelector('#car');
const bike = document.querySelector('#bike');

const nameCategory = document.querySelector('#name-category')

    nav[0].classList.add('active')

nav.forEach((e)=>{
    e.addEventListener('click',()=>{
        document.querySelector('.active')?.classList.remove('active')
        e.classList.add('active')
        if(e == nav[0]){
            nameCategory.innerHTML = 'Catalogo Carro';
        }else if(e == nav[1]){
            nameCategory.innerHTML = 'Catalogo Motos';
        }else if(e == nav[2]){
            nameCategory.innerHTML = 'Catalogo Bicicletas';
        }
    })
})


function api(url){

    const container = document.querySelector('.list-vehicle');
    const div = document.createElement('div')
    div.classList.add('info-vehicle')
    fetch(url).then(response => response.json())
    .then(data => {
        data.car.map((e)=>{
            div.innerHTML += `
            <article class="vehicle">
                    <h3 class="name-vehicle">${e.name}</h3>
                    <div class="img-vehicle">
                        <img src="${e.img}" alt="">
                    </div>
                    <ul class="info-vehicle">
                        <li><i class="material-symbols-outlined">today</i>${e.year}</li>
                        <li><i class="material-symbols-outlined">payments</i> R$ ${e.price.toFixed(3)}</li>
                    </ul>
                    <button class="btn-add">
                        <i class="material-symbols-outlined">pan_tool_alt </i>
                        ver mais
                    </button>
                </article>
                    `
                })
                
                container.appendChild(div)

      console.log(data)
    })
}
