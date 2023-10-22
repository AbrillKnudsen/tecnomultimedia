
class Romeo {

constructor(t) {
  // Declaro mis propiedades/variables y les asigno valor
  this.tam = t;
  //this.s = 0 ; 
  this.ro = ro; 
  this.spriteBrazo = spriteBrazo; 
  this.totalFrames = [4]; 
  this.frame = 0; 
 
    this.x = width / 2;
    this.y = 0;
    
   //this.v = 4; 
}


  moverTeclas (tecla, derecha, izquierda) {
    if (tecla == izquierda) {
      this.x -= this.tam;
    } else if ( tecla == derecha ) {
      this.x += this.tam;
    }
  }

actualizar() {
}

dibujarConPropiedad(){
  
  if (mouseIsPressed) {
  //  this.v = 1; 
  image (this.spriteBrazo[frameCount%4] ,width/2, 430) 
  }
  //if (mouseIsClicked) {
  //rect(this.x, this.y --, this.tam/2, this.tam); 
  //}
  //this.moverTeclas (keyCode, LEFT_ARROW, RIGHT_ARROW); //NO ANDA
  
}

//moverRo (keyCode){
//  if (keyCode == UP_ARROW){
// this.moverArriba(); 
//} else if (keyCode == DOWN_ARROW){
//  this.moverAbajo();
//}
//}

dibujar() {
//image (img[this.s], this.x, this.y, this.tam, width/2, 0); 
//this.bala.dibujar(); 
image(this.spriteBrazo[0], 260, 390);
image(this.ro, width/2 - this.spriteBrazo.length , 420);
push(); 
fill(0,0,200); 
rect(this.x, this.y + 500, this.tam/2, this.tam); 
pop(); 
}

calcularColision (enemigos) { //palabras en enemigos??
let distanciaColision = 70; 
let i = 0; 
for (let i = 0; i < enemigos.length; i++){
  let distanciaRoPala = dist (this.x, this.y, enemigos[i].x, enemigos[i].y); 
  
  if (distanciaRoPala < distanciaColision){
    //eliminar cuadradito y pintar palabra o sumar 1 al contador ni idea 
    enemigos.splice(i,1); 
  }
 }
}
 
}
