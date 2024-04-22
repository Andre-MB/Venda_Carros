const dialog = document.querySelector('dialog');
const btnClose = document.querySelector('.dialog-close')
const btnShow = document.querySelectorAll('.show');

const div = document.createElement('div');
const containerDialog = document.querySelector('.dialog-info')

btnShow[0].addEventListener('click',()=>{
    dialog.showModal()
    div.innerHTML = `
    <div class="dialog-info">
    <p>Giselle Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit culpa, necessitatibus ipsam itaque sit perferendis velit? Modi tempore laudantium quis a eligendi et. Nobis ipsam similique consequuntur repellat autem voluptate?</p>
    <h4>Entre em contato</h4>
    <hr>
    <ul>
        <li>
            <i class="bi bi-envelope-at"></i>
            <a href="#" target="_blank">email</a>
        </li>
        <li>
            <i class="bi bi-github"></i>
            <a href="https://github.com/Giselle2023">gitHub</a>
        </li>
        <li>
            <i class="bi bi-linkedin"></i>
            <a href="https://www.linkedin.com/in/gisellecristina2004/" target="_blank">linkedin</a>
        </li>
    </ul>
    
</div>
    `
    containerDialog.appendChild(div)
})


btnShow[1].addEventListener('click',()=>{
    dialog.showModal()
    div.innerHTML = `
    <div class="dialog-info">
    <p>Gabriel Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit culpa, necessitatibus ipsam itaque sit perferendis velit? Modi tempore laudantium quis a eligendi et. Nobis ipsam similique consequuntur repellat autem voluptate?</p>
    <h4>Entre em contato</h4>
    <hr>
    <ul>
        <li>
            <i class="bi bi-envelope-at"></i>
            <a href="">email</a>
        </li>
        <li>
            <i class="bi bi-github"></i>
            <a href="https://github.com/gabrielcpolitano" target="_blank">gitHub</a>
        </li>
        <li>
            <i class="bi bi-linkedin"></i>
            <a href="">linkedin</a>
        </li>
    </ul>
    
</div>
    `
    containerDialog.appendChild(div)

})

btnClose.addEventListener('click',()=>{
    dialog.close()
})