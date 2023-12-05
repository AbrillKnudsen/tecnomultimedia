class huevo {

  constructor(pox, poy) {
    this.pox= pox;
    this.poy= poy;
    this.disparado=false;
    this.vel=15;
  }

  actualizar() {
    this.dibujar();
  }

  dibujar() {
    // Imprime la posición actual en la consola
    //console.log("Huevo estado:" + this.disparado);
    if (this.disparado) {
      image(imagenes[7], this.pox, this.poy);
      this.mover();
    } else {
      image(imagenes[6], this.pox, this.poy);
    }
  }

  disparar(pox, poy) {
    this.disparado = true;
    this.pox = pox;
    this.poy = poy;
  }

  mover() {
    this.poy -= 20;
    if (this.poy <= 330) {
      this.disparado = false;
    }
  }
}
//se mueve y se dibuja solo aqui
