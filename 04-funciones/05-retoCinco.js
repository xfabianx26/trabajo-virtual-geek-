


     let precio = 10;
     let iva = 2.1;
     const Ticket  = (precio,iva) => {
         const total=(precio*iva)/10+precio;

         return `precio sin iva  = ${precio} iva = ${iva} total = ${total}` 
     }
     console.log(Ticket(precio,iva));