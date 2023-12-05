class Aventura {

  constructor () {
    this.estado = 0 ;
    this.juego = new Juego ();
    this.momento = "inicio" ;
    this.boton = new Boton();
    this.boton2 = new Boton ();
  }

  actualizar () {
  }

  dibujar () {
    if (this.momento === "inicio") {
      this.mostrarInicio() ;
    } else if (this.momento === "historia") {
      this.mostrarHistoria () ;
    } else if (this.momento === "juego") {
      this.mostrarJuego() ;
    } else if (this.momento === "creditos") {
      this.mostrarCreditos () ;
    }
  }

  teclado(key) {
    if (this.estado === 0 && key === ' ') {
      this.estado = 1;
    } else if (this.estado === 1 && keyCode === RIGHT_ARROW) {  //LEFT_ARROW, RIGHT_ARROW para tomar distintos caminos hasta que nos anden los botones
      this.estado = 2;
    } else if (this.estado === 2 && keyCode === RIGHT_ARROW) {
      this.estado = 3;
    } else if (this.estado === 2 && keyCode === LEFT_ARROW) {
      this.estado = 7;
    } else if (this.estado === 3 && keyCode === RIGHT_ARROW) {  //acá va juego
      this.estado = 4; //juego
    } else if (this.estado === 4 && this.juego.estadoo === 2) { //condicion pasar pantalla ganaste
      this.estado = 6;
    } else if (this.estado === 4 && this.juego.estadoo === 3) {//condicion pasar pantalla perdiste
      this.estado = 5;
    } else if (this.estado === 7 && keyCode === RIGHT_ARROW) {
      this.estado = 8;
    } else if (this.estado === 8 && keyCode === RIGHT_ARROW) {
      this.estado = 9 ;
    } else if (this.estado === 9 && keyCode === RIGHT_ARROW) {
      this.estado = 10; //FINAL
    } else if (this.estado === 9 && keyCode === LEFT_ARROW) {
      this.estado = 11 ;
    } else if (this.estado === 11 && keyCode === RIGHT_ARROW) {
      this.estado = 12; //FINAL
    } //falta credutos


    //reiniciar
    if (key === 'r') {
      this.estado = 0;
      this.juego.reiniciar();
    }

    this.juego.teclaPresionada(key); // Llama a la función teclaPresionada del juego y pasa la tecla presionada como parámetro
  }

  mostrarInicio() {
    if (this.estado === 0) {
      image(imagenPantallas[0], 0, 0);
      this.boton.dibujar(250, 510, "creditos");
    } else if (this.estado === 1) {
      image (imagenPantallas[1], 0, 0) ;
      text (textos[0], 20, 420, 570, 300);
      this.boton.dibujar(250, 510, "Siguiente");
    } else if (this.estado === 2) {
      image (imagenPantallas[2], 0, 0) ;
      text (textos[1], 20, 420, 570, 300);
      this.boton.dibujar(450, 510, "Se queda");
      this.boton2.dibujar(150, 510, "Se marcha");
    } else if (this.estado === 3) {
      image (imagenPantallas[3], 0, 0) ;
      text (textos[2], 20, 420, 570, 300);
      this.boton.dibujar(450, 510, "Siguiente");
    } else if (this.estado === 4) {
      text (textos[3], 20, 420, 570, 300);
      this.mostrarJuego () ;
      if (this.estado === 4 && this.juego.estadoo === 2) { //condicion pasar pantalla ganaste
        this.boton.dibujar(450, 510, "Siguiente");
      } else if (this.estado === 4 && this.juego.estadoo === 3) {//condicion pasar pantalla perdiste
        this.boton.dibujar(450, 510, "Siguiente");
      }
    } else if (this.estado === 5 && "perdiste") { //final 1
      image (imagenPantallas[5], 0, 0) ;
      text (textos[4], 20, 420, 570, 300);
      text("apreta R para reinciar", 240, 570);
      this.juego.reiniciar();
    } else if (this.estado === 6 && "ganaste") {//FINAL 2
      image(imagenPantallas[6], 0, 0);
      text (textos[5], 20, 420, 570, 300);
      this.juego.reiniciar();
      text("apreta R para reinciar", 240, 570);
      //this.juego.gato.reiniciar();
      //this.juego.estadoo = 0;
    } else if (this.estado === 7) {
      image (imagenPantallas[7], 0, 0) ;
      text (textos[6], 20, 420, 570, 300);
      this.boton.dibujar(450, 510, "Siguiente");
    } else if (this.estado === 8) {
      image (imagenPantallas[8], 0, 0) ;
      text (textos[7], 20, 420, 570, 300);
      this.boton.dibujar(450, 510, "Siguiente");
    } else if (this.estado === 9) {
      image (imagenPantallas[9], 0, 0) ;
      text (textos[8], 20, 420, 570, 300);
      this.boton.dibujar(450, 510, "Acepta");
      this.boton2.dibujar(150, 510, "Se niega");
    } else if (this.estado === 10) {
      image (imagenPantallas[10], 0, 0) ;
      text (textos[11], 20, 420, 570, 300);
      text("apreta R para reinciar", 240, 570);
    } else if (this.estado === 11) {
      image (imagenPantallas[11], 0, 0) ;
      text (textos[9], 20, 420, 570, 300);
      this.boton.dibujar(450, 510, "Siguiente"); //esto puede ser array?
    } else if (this.estado === 12) {
      image(imagenPantallas[12], 0, 0) ;
      text (textos[10], 20, 420, 570, 300);
      text("apreta R para reinciar", 240, 570);
    } else if (this.estado === 13) {
      image (imagenPantallas[13], 0, 0) ; //creditosssssss
    }
  }

  mostrarJuego() {
    this.juego.actualizar();
  }

  mouseClickeado(clicX, clicY) {
    console.log(this.boton.dentrodelboton());
    if (this.estado === 0 && this.boton.dentrodelboton()) {
      this.estado = 13;
    } else if (this.estado === 1 && this.boton.dentrodelboton()) {
      this.estado = 2;
    } else if (this.estado === 2 && this.boton.dentrodelboton()) {
      this.estado = 3;
    } else if (this.estado === 2 && this.boton2.dentrodelboton()) {
      this.estado = 7;
    } else if (this.estado === 3 && this.boton.dentrodelboton()) {
      this.estado = 4;
    } else if (this.estado === 4 && this.juego.estadoo === 2) { //condicion pasar pantalla ganaste
      this.estado = 6;
    } else if (this.estado === 4 && this.juego.estadoo === 3) {//condicion pasar pantalla perdiste
      this.estado = 5;
    } else if (this.estado === 7 && this.boton.dentrodelboton()) {
      this.estado = 8;
    } else if (this.estado === 8 && this.boton.dentrodelboton()) {
      this.estado = 9;
    } else if (this.estado === 9 && this.boton.dentrodelboton()) {
      this.estado = 10;
    } else if (this.estado === 9 && this.boton2.dentrodelboton()) {
      this.estado = 11;
    } else if (this.estado === 11 && this.boton.dentrodelboton()) {
      this.estado = 12;
    }
    this.juego.mouseClickeadoo(true); // Llama a la función mouseClickeado del juego con el parámetro clickeado establecido
  }
}
