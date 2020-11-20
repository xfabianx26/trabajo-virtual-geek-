
const caja = document.querySelector("#caja");


const url = "http://placehold.it/300x300"
var variable = ""

if(url === ""){
    variaBasia  = `<li><img src="http://placehold.it/300x300" alt=""></li>`
    caja.innerHTML = variaBasia
}else{
    variableLlena  =  `<li><img src="http://www.fillmurray.com/300/300" alt=""></li>`
    caja.innerHTML = variableLlena
}