class Boton {

  //string
  constructor(px, py, mensaje) {
    //las posiciones y el mensaje varian, boton 1 y 2
    this.px = px;
    this.py = py;
    this.mensaje = mensaje;
    this.colorrelleno = color(0);
  }

  dibujar(px, py, mensaje) {
    this.px = px;
    this.py = py;
    this.mensaje = mensaje;
    this.colorrelleno = color(0);

    console.log("posicion", this.mouseX);
    //boton
    stroke(250);
    fill(this.colorrelleno);
    rect(this.px, this.py, 100, 50);

    //texto
    fill(250);
    text(this.mensaje, this.px+27, this.py+30);

    if (this.dentrodelboton()) {
      this.colorrelleno = color(50);
    } else {
      this.colorrelleno = color(0);
    }
  }

  //creo que esto se queda en esta clase??
  dentrodelboton(px, py) {
    return mouseX > this.px && mouseX < this.px + 100 && mouseY > this.py && mouseY < this.py + 50;
  }
}
