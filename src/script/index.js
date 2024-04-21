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

    const itens = document.createElement('article');
    const container = document.createElement('div')
    container.classList.add('list-vehicle')
    const sectionMain = document.querySelector('.container-vehicle');
    itens.classList.add('vehicle')
    container.classList.add('list-vehicle')

    
    fetch(url).then(response => response.json())
    .then(data => {
        data.car.map((e)=>{
            itens.innerHTML += `
            <h3 class="name-vehicle">${e.name}</h3>
            <div class="img-vehicle">
            <img src="${e.img}" alt="">
                    </div>
                    <ul>
                    <li><i class="material-symbols-outlined">today</i>${e.year}</li>
                    <li><i class="material-symbols-outlined">payments</i>${e.price.toFixed(3)}</li>
                    </ul>
                    <button class="btn-add">
                    <i class="material-symbols-outlined">pan_tool_alt </i>
                    ver
                    </button>
                    `
                    console.log(e)
                })
                
        container.appendChild(itens)
        sectionMain.appendChild(container)

      console.log(data)
    })
}
