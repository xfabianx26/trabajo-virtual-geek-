

const boton = document.querySelector('#btn');
const contenedorPeli = document.querySelector('#peliculas');





const  mostrarPeliculas = ()=>{
    
    contenedorPeli.innerHTML = ` 
    <p clas="pelicula1" value="1">Inception</p>
    <p clas="pelicula2">The butterfly effect</p>
    <p clas="pelicula3">Eternal sunshine of the spotless mind</p>
    <p clas="pelicula4">Blue velvet</p>
    <p clas="pelicula5">Split</p>`;


}



boton.addEventListener('click', () => {
    mostrarPeliculas()
});
contenedorPeli.addEventListener('click', function(e){
        e.preventDefault();
        if(e.target){
            console.log(e.target.innerText)
        }else{
            console.log('No has elegido una opción correcta')
        }

});



