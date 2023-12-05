//clase madre
class Juego {

  constructor() {
    //nuevas instancias
    // paso como parametro = lista
    this.gato = new gato(imagenes);
    this.pato=new pato();
    this.huevo=new huevo();
    this.estadoo = 0;
    this.tiempo = 0;
  }

  actualizar() {

    console.log("estado:" + this.estado);
    console.log("tiempo:" + this.tiempo);

    //logica estados
    if (this.estadoo == 0) {
      this.tiempo = 0;
      image(imagenes[9], 0, 0);
    } else if (this.estadoo == 1) {
      image(imagenes[8], 0, 0);
      push();
      textSize(40);
      text("Vida:" + this.gato.cantvida, 250, 580);
      pop();
      this.tiempo ++;
      this.gato.actualizar();
      this.pato.actualizar();
      this.huevo.actualizar();
      this.controlarcolision();
    } else if (this.estadoo == 2) {
      image(gifs[2], 0, 0);
      push();
      textSize(50);
      text("GANASTE", 200, 300);
      pop();
    } else if (this.estadoo == 3) {
      image(gifs[1], 0, 0, 600, 600);
      push();
      textSize(50);
      text("PERDISTE", 200, 300);
      pop();
    }

    if (this.estadoo == 1 && this.gato.vive == false) {
      this.estadoo = 2;
    }
    if (this.tiempo >= 150) {
      this.estadoo = 3;
    }
  }

  teclaPresionada(key) {

    if (this.estadoo === 0 && key === ' ') {
      this.estadoo = 1;
      this.comienzaeljuego = true;
    }
  }

  reiniciar() {
    this.gato.reiniciar();
    this.estadoo = 1;
    this.tiempo = 0;
  }

  mouseClickeadoo(clickeado) {
    this.pato.mouseClickeado(clickeado, clicX, clicY); // Pasa las coordenadas del clic a Pato por parametro
  }

  controlarcolision() {
    if (this.huevo.disparar) {
      this.gato.atacado(this.pato.huevo); //huevo como argumento
    }
  }
}
