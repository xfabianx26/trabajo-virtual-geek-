const geekGirl1 = {
        nombre: 'Susana',
        edad: 34,
        carrera: 'periodista',
        showBio:function(){
            alert(`Mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.carrera}`)
        }

}
const geekGirl2 = {
    nombre: "Rocio",
    edad: "25 años",
    cargo: "actriz",
    showBio: function () {
        alert(`Mi nombre es ${this.nombre}, tengo ${this.edad} y soy ${this.cargo}`);               
    }
}
geekGirl1.showBio();
geekGirl2.showBio();


