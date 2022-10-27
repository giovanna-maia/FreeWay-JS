
// Código dos carros

let xCarros = [600, 600, 600, -50, -50, -50];
let yCarros = [45, 101, 153, 215, 268, 318];
let velocidadeCarros = [2, 2.7, 4, -3.9, -2.9, -2];
let comprimentoCarro = 50;
let alturaCarro = 30;

function mostraCarro(){
    for(let i = 0; i < imagemCarros.length; i++){
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
    }
}

function movimentaCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    if(passouTodaATelaEsquerda(xCarros[i])){
      xCarros[i] = 600;
    }
  }
  for (let k = 3; k < imagemCarros.length; k++){
    if(passouTodaATelaDireita(xCarros[k])){
      xCarros[k] = -20
    }
  }
}

function passouTodaATelaEsquerda(xCarro){
  return xCarro < - 50;
}

function passouTodaATelaDireita(xCarro){
  return xCarro > 600;
}