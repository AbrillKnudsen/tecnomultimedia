
class Romeo {

constructor(t) {
  // Declaro mis propiedades/variables y les asigno valor
  this.tam = t;
  //this.s = 0 ; 
  this.ro = ro; 
  this.spriteBrazo = spriteBrazo; 
  this.totalFrames = [4]; 
  this.frame = 0; 
 // this.frameWidth = this.spriteBrazo.width / this.totalFrames;
  
    this.x = width / 2;
    this.y = 0;
    
    //this.aim = [] ; //cargar imagenes en preload principal??
    //this.miPreload (); 
    //this.sprite = this.spriteBrazo ; 
}


  moverTeclas (tecla, izquierda, derecha) {
    if (tecla == izquierda) {
      this.x -= this.tam;
    } else if ( tecla == derecha ) {
      this.x += this.tam;
    }
  }

actualizar() {
  // this.frame = (this.frame + 1) % this.totalFrames;
}

dibujarConPropiedad(){
  
  if (mouseIsPressed) {
  image (this.spriteBrazo[frameCount%4], width/2, 430) 
  //img.resize (200, 200); //esto no funciona 
  this.moverTeclas (keyCode, LEFT_ARROW, RIGHT_ARROW); //NO ANDA
  }
}

//miPreload(){
//  for(let i = 0; i < 3; i++) {
//    this.mb.push(loadImage('assets/spriteBrazo'+i+'.png')); 
//  }
//}

dibujar() {
//image (img[this.s], this.x, this.y, this.tam, width/2, 0); 
image(this.spriteBrazo[0], width/2, 430);
image(this.ro, width/2 - this.spriteBrazo.length , 420); 
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
