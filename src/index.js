
const nameAdd = document.querySelector('#name-add');
const yearAdd = document.querySelector('#year-add');
const priceAdd = document.querySelector('#price-add')

function create(e){
    
    e.preventDefault()
    const name = document.querySelector('#name');
    //const price = document.querySelector('#price');
    //const year = document.querySelector('#year');
    

    name.innerHTML = nameAdd.value

}



document.querySelector('button').addEventListener('click',create)