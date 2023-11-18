//tp 5 juego de romeo y julieta
//Abril Knudsen 94789/5
//https://www.youtube.com/watch?v=kIeghK8GA-U

//El juego consiste en palabras que salen de la boca de Julieta y pasan de izquierda a derecha, Romeo tiene que capturar las palabras necesarias para armar el mensaje de Julieta en el que le cuenta el plan del veneno.
//Si atrapa todas las palabras correctas gana, Romeo puede esperar a Julieta para escaparse juntos.
//Si atrapa 3 palabras incorrectas o no logra armar el mensaje en un tiempo determinado, pierde y Romeo se mata.

let j;
let imgGan;
let spriteBrazo;
let ju;
let ro;
//let spritesheet;

function setup() {
  createCanvas (600, 600);
  textSize( 24 );
  textAlign( CENTER, CENTER );

  j = new Juego();
}

function preload () {
  spriteBrazo = [] ;
  //  imgGan = loadImage("assets/reyju11.JPG");
  for (let i = 0; i < 4; i++) {
    spriteBrazo[i] = loadImage("assets/spriteBrazo" + i + ".png");
  }
  ju = [] ;
  for (let i = 0; i < 2; i++) {
    ju [i] = loadImage("assets/cuerpoJulieta" + i + ".png");
  }
  ro = loadImage ("assets/cuerpoRomeo.png");
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

function mouseClicked() {
  clicX = mouseX; // Guarda la posición X del clic del mouse
  clicY = mouseY; // Guarda la posición Y del clic del mouse
  j.mouseClickeado (clicX, clicY); // Llama a la función mouseClickeado de la aventura y paso las cordenadas como paramtero
}
