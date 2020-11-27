

const creandoContador = {
    maximo: 20,
    minimo: 0,
    valorActual: 0,
    valorInicial: 2,
    aumentar: function(){
        if(this.valorActual < this.valorInicial){
            this.valorActual ++;
            console.log(this.valorActual)
        }else{
            this.valorActual = this.valorInicial;
            console.log(this.valorActual)
        }
    },
    disminuir: function(){
        if(this.valorActual >this.minimo){
            this.valorActual--;
            console.log(this.valorActual);
        }else{
            this.valorActual = this.valorInicial;
            console.log(this.valorActual)
        }

    },
    restablecer: function(){
        this.valorActual = 0;
        console.log(this.valorActual);
    }
}

creandoContador.aumentar()
creandoContador.aumentar()
creandoContador.aumentar()
creandoContador.aumentar()
creandoContador.disminuir()
creandoContador.restablecer()