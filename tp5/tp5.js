//tp 5 juego de romeo y julieta 

//El juego consiste en palabras que salen de la boca de Julieta y pasan de izquierda a derecha, Romeo tiene que capturar las palabras necesarias para armar el mensaje de Julieta en el que le cuenta el plan del veneno. 
//Si atrapa todas las palabras correctas gana, Romeo puede esperar a Julieta para escaparse juntos.
//Si atrapa 3 palabras incorrectas o no logra armar el mensaje en un tiempo determinado, pierde y Romeo se mata.

let j;
let imgGan;
//let spritesheet;

//function preload() {
  //cargar imagenes
  //imgGan = loadImage('assets/royju11.jpg'); 
 // spritesheet = loadImage ('assets/spriteBrazo.png');
//}

function setup() {
createCanvas (600, 600); 
  textSize( 24 );
  textAlign( CENTER, CENTER );
  
  j = new Juego(); 
  }
  
  function preload (){
    imgGan = loadImage('assets/reyju11.jpg');
    
  }

function draw() {
  background(150); 
j.actualizar();
j.dibujar(); 
}

function keyPressed (){
  j.teclado();
}
