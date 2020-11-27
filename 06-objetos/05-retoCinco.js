
const elementos = document.querySelector("input");
const boton = document.querySelector('button');

function enviarConsola() {
   
    console.dir(elementos);
    // value fabian
    //nodeName input
    //requerid false
    //Estamos trabajado sobre un objeto es propiedad
   

}    

boton.addEventListener('click', enviarConsola);

