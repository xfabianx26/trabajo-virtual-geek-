
const datosInput = document.querySelector(".dato");
const boton = document.querySelector(".btn");




boton.addEventListener('click', () => {
   console.log(`Hola, ${datosInput.value}`)
});