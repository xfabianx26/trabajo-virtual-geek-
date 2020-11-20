
const notificacion = document.querySelector("#notificacion")
const titulo = document.querySelector('h1')
const parrafo = document.querySelector('p')


    if(!notificacion.classList.contains('warning')){
        notificacion.classList.add('warning')
        titulo.textContent = "AVISO" 
        parrafo.textContent = "Tenga cuidado"

    } 
    if(!notificacion.classList.contains('error')){
        notificacion.classList.add('error')
        titulo.textContent = "ERROR" 
        parrafo.textContent = "Ha surgido un error"

    }
     if(!notificacion.classList.contains('success')){    
        notificacion.classList.add('success')
        titulo.textContent = "CORRECTO" 
        parrafo.textContent = "Los datos son correctos"

    }
    






