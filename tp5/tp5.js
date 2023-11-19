//Recuperatorio tp 5 juego de romeo y julieta
//Abril Knudsen 94789/5
//video recu: https://www.youtube.com/watch?v=AcrmlblQVrs

//https://www.youtube.com/watch?v=kIeghK8GA-U (video viejo, 1ra entrega tp 5)

//El juego consiste en palabras que salen de la boca de Julieta y pasan de izquierda a derecha, Romeo tiene que capturar las palabras necesarias para armar el mensaje de Julieta en el que le cuenta el plan del veneno.
//Si atrapa todas las palabras correctas gana, Romeo puede esperar a Julieta para escaparse juntos.
//Si no logra atrapar 4 palabras correctas en un tiempo determinado, pierde y Romeo se mata.

let j;
//let spriteBrazo;
let ju;
let ro;
let balcon;
let control;
let drone; 
//let spritesheet;

function setup() {
  createCanvas (600, 600);
  textSize( 24 );
  textAlign( CENTER, CENTER );

  j = new Juego();
}

function preload () {
  //spriteBrazo = [] ;
  ////  imgGan = loadImage("assets/reyju11.JPG");
  //for (let i = 0; i < 4; i++) {
  //  spriteBrazo[i] = loadImage("assets/spriteBrazo" + i + ".png");
  //}
  ju = [] ;
  for (let i = 0; i < 2; i++) {
    ju [i] = loadImage("assets/cuerpoJulieta" + i + ".png");
  }
  ro = loadImage ("assets/cuerpoRomeo.png");
  drone = loadImage ("assets/drone.png");
  balcon = loadImage ("assets/balcon.png");
  control = loadImage ("assets/controlDrone.png");
}

function draw() {
  background(150);
  j.actualizar();
  console.log("esto sirve..."); 
  j.dibujar();
}

function keyPressed () {
  j.teclado();
  //j.teclaPresionada(keyCode);
}

//function mouseClicked() {
//  clicX = mouseX; // Guarda la posición X del clic del mouse
//  clicY = mouseY; // Guarda la posición Y del clic del mouse
//  j.mouseClickeado (clicX, clicY); // Llama a la función mouseClickeado de la aventura y paso las cordenadas como paramtero
//}
