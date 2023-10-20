class Romeo {

constructor(t) {
  // Declaro mis propiedades/variables y les asigno valor
  this.tam = t;
    this.x = width / 2;
    this.y = height - this.tam/2;
    
    //this.aim = [] ; //cargar imagenes en preload principal??
    //this.miPreload (); 
    //this.sprite = this.spriteBrazo ; 
}

//actualizar () {
  moverTeclas (tecla, izquierda, derecha) {
    if (tecla == izquierda) {
      this.x -= this.tam;
    } else if ( tecla == derecha ) {
      this.x += this.tam;
    }
  }
//}

//dibujarConPropiedad(){
//  if (mouseIsPressed) {
//  image (this.aim[frameCount%4], width/2, 0) 
//  }
//}

//miPreload(){
//  for(let i = 0; i < 3; i++) {
//    this.mb.push(loadImage('assets/spriteBrazo'+i+'.png')); 
//  }
//}

dibujar() {
image (this.aim[0], width/2, 0); 
}
}
