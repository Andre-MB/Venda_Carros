const nav = document.querySelectorAll('.nav-itens');
const moto = document.querySelector('#moto');
const car = document.querySelector('#car');
const bike = document.querySelector('#bike');

const nameCategory = document.querySelector('#name-category')

nav.forEach((e)=>{
    e.addEventListener('click',()=>{
        document.querySelector('.active')?.classList.remove('active')
        e.classList.add('active')
        console.log(e)
    })
})

