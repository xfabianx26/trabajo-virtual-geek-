


const body = document.querySelector('body');


body.addEventListener('keydown',(evento)=>{
    const teclaPulsada = evento.key.toLowerCase();
    if(teclaPulsada === 'r'){
        body.style.background = 'red';
    }else if(teclaPulsada === 'm'){
        body.style.background = 'purple';
    }else{
        body.style.background = 'white';
    }
});

