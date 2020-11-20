let borderBox = true;

let ancho= 800;
let padding=20;
let borde=10;
const calcularAncho = (tipo,ancho,padding,borde) =>{
    let total =0;
    if (borderBox) total = ancho+padding+borde;               
    else total =ancho;
    return total;
    
}
console.log("el ancho es  "+calcularAncho(borderBox,ancho,padding,borde))