


const notificacion = document.querySelector("#notificacion")
const titulo = document.querySelector('h1')
const parrafo = document.querySelector('p')

// Operador ternario

// const valor = (!notificacion.classList.add('warning')) ? (titulo.textContent = "AVISO",parrafo.textContent = "Tenga cuidado") : 'La clase no existe' 

// const valor = (!notificacion.classList.add('error')) ? (titulo.textContent = "ERROR", parrafo.textContent = "Ha surgido un error") : 'La clase no existe' 


const valor = (!notificacion.classList.add('success')) ? (       titulo.textContent = "CORRECTO", parrafo.textContent = "Los datos son correctos") : 'La clase no existe' 


