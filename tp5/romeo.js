

class Romeo {

  constructor(t) {
    // Declaro mis propiedades/variables y les asigno valor
    this.tam = t;
    //this.s = 0 ;
    this.ro = ro;
    this.control = control; 
    //this.spriteBrazo = spriteBrazo;
    //this.totalFrames = [4];
    //this.frame = 0;

    this.x = width / 2;
    this.y = 0;

    //this.v = 4;
  }


  moverTeclas (tecla, derecha, izquierda, arriba, abajo) {
    if (tecla == izquierda) {
      this.x -= this.tam;
    } else if ( tecla == derecha ) {
      this.x += this.tam;
    } else if (tecla == arriba) {
      this.y -= this.tam; 
    }else if (tecla == abajo) {
      this.y += this.tam; 
    }
  }

  actualizar() {
  }

  dibujarConPropiedad() {
    if (mouseIsPressed) {
      //  this.v = 1;
      push();
     // image (this.spriteBrazo[frameCount%4], width/2-25, 320);
      frameRate(20);
      pop();
    } else {
      push();
      frameRate(60);
      pop();
    }
  }
  
  dibujar() { 
    image(this.ro, width/2, 420);
    image (this.control, this.x, this.y + 500, this.tam/2, this.tam); 
  }
}
