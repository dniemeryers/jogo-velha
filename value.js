var jogador = 'X';

var vencedor = null;

var jogadorselecionado = document.getElementById('jogador-selecionado');  

var vencedorselecionado = document.getElementById('vencedor-selecionado');

var Quadrados = getElementByClassName('quadrado');

mudarjogador (valor = 'X');

function escolher_quadrado(id){

    if(vencedor !== null){
        return;
    }
   
    var Quadrado = document.getElementById(id);
    if(Quadrado.innerHTML !== '-' ){
        return;
    }

    Quadrado.innerHTML = jogador;

    Quadrado.style.color = '#000';

    if(jogador === 'X'){
        jogador = 'O'

    }else{
        jogador = 'X'
    }
    mudarjogador(jogador);
    checa();

}



function mudarjogador(valor) {
    jogador = valor;
    jogadorselecionado.innerHTML = jogador;

   
}

function checa(){
    var Quadrado1 = document.getElementById(1); 
    var Quadrado2 = document.getElementById(2); 
    var Quadrado3 = document.getElementById(3);
    var Quadrado4 = document.getElementById(4);
    var Quadrado5 = document.getElementById(5);
    var Quadrado6 = document.getElementById(6);
    var Quadrado7 = document.getElementById(7);
    var Quadrado8 = document.getElementById(8);
    var Quadrado9 = document.getElementById(9);

    if (checavencedor(Quadrado1, Quadrado2, Quadrado3)){
        mudaCorQuadrado (Quadrado1, Quadrado2, Quadrado3);
        mudarvencedor(Quadrado1);
        return;
   }

   if (checavencedor(Quadrado4, Quadrado5, Quadrado6)){
    mudaCorQuadrado (Quadrado4, Quadrado5, Quadrado6);
    mudarvencedor(Quadrado4);
    return;
}

if (checavencedor(Quadrado7, Quadrado8, Quadrado9)){
    mudaCorQuadrado (Quadrado7, Quadrado8, Quadrado9);
    mudarvencedor(Quadrado7);
    return;
}

if (checavencedor(Quadrado1, Quadrado4, Quadrado7)){
    mudaCorQuadrado (Quadrado1, Quadrado4, Quadrado7);
    mudarvencedor(Quadrado1);
    return;
}

if (checavencedor(Quadrado2, Quadrado5, Quadrado8)){
    mudaCorQuadrado (Quadrado2, Quadrado5, Quadrado8);
    mudarvencedor(Quadrado2);
    return;
}
if (checavencedor(Quadrado3, Quadrado6, Quadrado9)){
    mudaCorQuadrado (Quadrado3, Quadrado6, Quadrado9);
    mudarvencedor(Quadrado3);
    return;
}

if (checavencedor(Quadrado1, Quadrado5, Quadrado9)){
    mudaCorQuadrado (Quadrado1, Quadrado5, Quadrado9);
    mudarvencedor(Quadrado1);
    return;
}



if (checavencedor(Quadrado3, Quadrado5, Quadrado7)){
    mudaCorQuadrado (Quadrado3, Quadrado5, Quadrado7);
    mudarvencedor(Quadrado3);
    return;
}

}

function mudarvencedor (Quadrado){
    vencedor = Quadrado.innerHTML;
    vencedorselecionado.innerHTML = vencedor;
}




function mudaCorQuadrado (Quadrado1, Quadrado2, Quadrado3){
    Quadrado1.style.background =  '#00FF7F';
    Quadrado2.style.background =  '#00FF7F';
    Quadrado3.style.background =  '#00FF7F';
}

function checavencedor (Quadrado1, Quadrado2, Quadrado3){
    var eigual = false;

    if(Quadrado1.innerHTML !== '-' && Quadrado1.innerHTML === Quadrado2.innerHTML && Quadrado2.innerHTML === Quadrado3.innerHTML) {
        eigual=true;
    }
    return eigual;

}

function reiniciar() {
    jogador = 'X';
    vencedor = null;
    vencedorselecionado.innerHTML= '';

    for (var i = 1; i<=9 ; i++){
     var Quadrado = document.getElementById(i);
     Quadrado.style.background = '#eee';
     Quadrado.style.color = '#eee';
     Quadrado.innerHTML = '-';
    }
    mudarjogador (valor = 'X');

}


