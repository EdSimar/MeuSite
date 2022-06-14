let contador=0;
document.getElementById("rad-circ0").checked = true;

setInterval (function(){
    proximaImg();
}, 2000);

function proximaImg(){
    contador++;
    if(contador > 10){
        contador = 0;
    }
    document.getElementById("rad-circ"+contador).checked = true;
}

