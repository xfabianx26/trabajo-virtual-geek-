

function bisiesto(anio) {
    return anio % 100 === 0 ? anio % 400 === 0 : anio % 4 === 0;
}

console.log(`¿El año 3 es bisiesto?: ${bisiesto(3)}`);

