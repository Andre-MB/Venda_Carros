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

console.log(nav)

