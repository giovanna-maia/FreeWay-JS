// Código do ator

let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function mostraEstrela(){
  image(imagemEstrela, 35, 4, 25, 25);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMoverY()){
    yAtor += 3;
      }
  }
  if (keyIsDown(RIGHT_ARROW)){
      if(podeSeMoverDireita()){
    xAtor += 3;
      }
    }
  if (keyIsDown(LEFT_ARROW)){
      if(podeSeMoverEsquerda()){
    xAtor -= 3;
      }
    } 
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 10)
    if (colisao){
      voltaAtorPosicaoInicial();
      somColisao.play();
    if (pontosMaiorQueZero()){
      meusPontos -= 1;
      }
    }
  }
}

function voltaAtorPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textSize(25);
  textAlign(CENTER);
  textStyle(BOLD);
  stroke("#000000");
  strokeWeight(2);
  fill(color("#181818"));
  rect(width/4.9-30, 6.5, 55, 23, 3);
  fill(color(255, 240, 60))
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    somPonto.play();
    voltaAtorPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMoverY(){
  return yAtor < 366;
}

function podeSeMoverDireita(){
  return xAtor < 466;
}

function podeSeMoverEsquerda(){
  return xAtor > 0;
}