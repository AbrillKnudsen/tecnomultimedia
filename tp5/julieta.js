
class Julieta {

constructor(t) {
  // Declaro mis propiedades/variables y les asigno valor
   this.tam = t;
   //this.s = 0;
    this.x = 50;
    this.y = height /2 + this.tam + 50;
    
    this.ju = ju; 
    this.totalFrames = [2]; 
    this.frame = 0; 
}

actualizar () {
  
}

dibujar() {
  push(); 
  frameRate = 2 ; //corregir
   image (this.ju[frameCount%2],-250 , -50) 
   
  pop(); 
}

}
