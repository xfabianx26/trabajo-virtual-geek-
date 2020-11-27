

const geekGirl = {
    datoSusana:{
        nombre: 'Susana',
        edad: 34,
        carrera: 'periodista',
        accediendoDatosSusana: 'Mi nombre es Susana, tengo 34 años y soy periodista',
    },
   
    datosRocio:{
        nombre: 'Rocío',
        edad: 25,
        carrera: 'actriz',
        accediendoDatosRocio: 'Mi nombre es Rocio, tengo 24 años y soy actriz'

    },
    run:()=> {
        console.log('Estoy Corriendo')
    },
    runAMarathon: (distance)=>{
        console.log(`Estoy corriendo un maratón de ${distance} kilómetros`)
    }
   
};


// Susana
console.log(geekGirl.datoSusana )
console.log(geekGirl.accediendoDatosSusana)
// Rocio
console.log(geekGirl.datosRocio)
console.log(geekGirl.accediendoDatosRocio)

// Método correr
geekGirl.run()
geekGirl.runAMarathon(50)