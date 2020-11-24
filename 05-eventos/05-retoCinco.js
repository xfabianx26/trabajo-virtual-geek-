
const li = document.querySelector('li');
const favorito = document.querySelector('.favorito');


li.addEventListener('click', () =>{
    li.classList.toggle('teacher--selected');
    favorito.innerHTML = 'Quitar';
});