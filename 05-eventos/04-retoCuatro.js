const pelicula1 = document.querySelector('#pelicula1');
const pelicula2 = document.querySelector('#pelicula2');
const pelicula3 = document.querySelector('#pelicula3');
const pelicula4 = document.querySelector('#pelicula4');
const pelicula5 = document.querySelector('#pelicula5');

const boton = document.querySelector('#btn');


const mostrarPeliculas = () =>{
    pelicula1.innerHTML = 'Inception'
    pelicula2.innerHTML = 'The butterfly effect'
    pelicula3.innerHTML = 'Eternal sunshine of the spotless mind'
    pelicula4.innerHTML = 'Blue velvet'
    pelicula5.innerHTML = 'Split'
}; 


boton.addEventListener('click', ()=>{
    mostrarPeliculas();
});

pelicula1.addEventListener('click', ()=>{
    console.log('Inception'); 
});
pelicula2.addEventListener('click', ()=>{
    console.log('The butterfly effect'); 
});

pelicula3.addEventListener('click', ()=>{
    console.log('Eternal sunshine of the spotless mind'); 
});

pelicula4.addEventListener('click', ()=>{
    console.log('Blue velvet'); 
});

pelicula5.addEventListener('click', ()=>{
    console.log('Split'); 
});




