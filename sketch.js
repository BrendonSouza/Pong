let XBolinha = 300;
let YBolinha = 200;
let velocidadeX = 6;
let velocidadeY = 6;
let raio = 8;


let YPlayer1 = 150;
let XPlayer1 = 5;
let CompPlayer1 = 90;
let largPlayer1 = 10;
let colidiup1 = false;

//player2
let YPlayer2 = 150;
let XPlayer2 = 585;
let CompPlayer2 = 90;
let largPlayer2 = 10;
let colidiup2 = false;

let velocidadeP2;

let p1Pontos=0;
let p2Pontos=0;
let trilha
let ponto
let raquete
function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("/Sons/ponto.mp3")
  raquete = loadSound("/Sons/raquetada.mp3")
}


function setup() {
  createCanvas(600, 400);
 trilha.play();
}

function draw() {
  background(0);
  mostraBola();
  rect(XPlayer1, YPlayer1, largPlayer1, CompPlayer1);
  rect(XPlayer2, YPlayer2, largPlayer2, CompPlayer2);

placar()
line(300, 0, 300, 400);

  
  movimentaBola();
  movimentaPlayer1()
  movimentaPlayer2()
  colisaoBola();
  colisaoRaquetep1();
  colisaoRaquetep2();
}
//rect(590,200,10,100);

function placar(){
  stroke(255)
  
  textAlign(CENTER);
  textSize(16)
  rect(150, 10, 40, 20);
  text(p1Pontos,170,26);
  rect(420, 10, 40, 20);
  text(p2Pontos,440,26);



  if(XBolinha>590){
    p1Pontos+=1
    ponto.play();
  }
  if(XBolinha<10){
    p2Pontos+=1
    ponto.play();
  }
}
function mostraBola() {

  circle(XBolinha, YBolinha, 16);
}

function movimentaBola() {
  XBolinha += velocidadeX;
  YBolinha += velocidadeY;
}


function colisaoBola() {
  if (XBolinha + raio > width || XBolinha - raio < 0) {
    velocidadeX *= -1;
  }
  if (YBolinha + raio > height || YBolinha - raio < 0) {
    velocidadeY *= -1;
  }
}

function colisaoRaquetep1() {
  if (YPlayer1 < 0) {
    YPlayer1 = 0;
  }
  if (YPlayer1 + 90 > height) {
    YPlayer1 = height - 90;
  }
  colidiu = collideRectCircle(XPlayer1, YPlayer1, largPlayer1, CompPlayer1,
     XBolinha, YBolinha, raio);

  if (colidiu) {
    velocidadeX *= -1;
    raquete.play();

  }

}

function colisaoRaquetep2() {

  if (YPlayer2 < 0) {
    YPlayer2 = 0;
  }
  if (YPlayer2 + 90 > height) {
    YPlayer2 = height - 90;
  }
  colidiu = collideRectCircle(XPlayer2, YPlayer2, largPlayer2, CompPlayer2,
     XBolinha, YBolinha, raio);

  if (colidiu) {
    velocidadeX *= -1;
    raquete.play();

  }

}

function movimentaPlayer2(){
  velocidadeP2=YBolinha - YPlayer2 - largPlayer2 / 2 - 30;
  YPlayer2+=velocidadeP2
}

function movimentaPlayer1(){
  if (keyIsDown(UP_ARROW)) {
    YPlayer1 -= 10;
  }

  if (keyIsDown(DOWN_ARROW)) {
    YPlayer1 += 10;
  }

}