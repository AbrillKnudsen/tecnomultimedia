class pato {

  constructor(poy) {
    this.poy= 490; //fijo
    this.pox= mouseX;
    this.huevo = new huevo();
  }

  actualizar() {
    this.dibujar();
  }

  dibujar() {
    this.pox= mouseX;
    this.huevo.dibujar();
    image(imagenes[10], this.pox, this.poy);
  }

  dispararHuevo() {
    // Crea una instancia de Huevo y pasa las coordenadas del pato
    this.huevo.disparar(this.pox, this.poy);
  }

  //controlar el disparo del huevo y su movimiento
  //huevo disparado
  mouseClickeado(clickeado) {
    if (clickeado) {
      console.log("Huevo disparado");
      this.dispararHuevo();
    }
  }
}
//indica que se tenga que disparar la bala
