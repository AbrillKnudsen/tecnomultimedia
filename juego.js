
class Juego {

  constructor() {
    this.julieta = new Julieta (50) ;
    this.ju = ju;
    this.romeo = new Romeo (50);
    this.spriteBrazo = spriteBrazo;
    this.palabras = [];
    for ( let i = 0; i < 20; i++ ) {
      this.palabras.push( new Palabras( i*70 + 50 ) );
    }
    //estados
    this.estado = "instrucciones" ;
    this.tiempoInicio = 0;
    this.tiempoLimite = 30000;
    this.tiempoInicio= millis();
    this.contadorPuntos = 0;
  }


  actualizar() {
    for ( let i = 0; i < 20; i++ ) {
      this.palabras[i].actualizar();
    }
    // Verifica el tiempo límite
    const tiempoActual = millis();
    if (tiempoActual - this.tiempoInicio > this.tiempoLimite) {
      this.estado = "perdiste";
    }
    // this.romeo.calcularColision (this.palabras) ;
    //contador++; //???
    //agregar cuando pierde/gana
  }


  dibujar() {

    if (this.estado === "instrucciones") {
      this.mostrarInstrucciones();
    } else if (this.estado === "jugando") {
      this.mostrarJuego();
    } else if (this.estado === "ganaste") {
      this.mostrarGanaste();
    } else if (this.estado === "perdiste") {
      this.mostrarPerdiste();
    }
  }

  teclado() {
    if (this.estado === "instrucciones") {
      this.estado = "jugando";
    } else if (this.estado === "jugando") {
      this.romeo.moverTeclas(keyCode, LEFT_ARROW, RIGHT_ARROW);
      this.romeo.moverRo(keyCode); //estao no funciona
      
    } else if (this.estado === "jugando" && mouseIsPressed) {
       console.log("Mouse presionado. Calculando colisión...");
      this.romeo.dibujarConPropiedad ();
     
      this.romeo.calcularColision (this.palabras);
    }
    //this.romeo.estadosMano (key);
  }
  mostrarInstrucciones() {
    background(200);
    textSize (15);
    text("Instrucciones", width / 2, 100);
    text("Julieta le quiere contar su plan a Romeo, pero solo él puede saberlo", width/2, 130) ;
    text("Para que no los descubran, Julieta envia un mensaje oculto", width/2, 160);
    text("Ayuda a Romeo a elegir las palabras correctas para armar el mensaje", width/2, 190) ;
    // Mostrar otras instrucciones
  }

  mostrarJuego() {
    //dibujar contador e inicializarlo
    textSize(15);
    text("Julieta: El veneno es falso", width / 2, 50);
    text("Palabras correctas" + this.contadorPuntos + "/4", 525, 20);
    // Dibuja objetos de juego
    for (let i = 0; i < 20; i++) {
      this.palabras[i].dibujar();
    }
    this.romeo.dibujar();
    this.romeo.dibujarConPropiedad();
    //this.botonesRect.palabras();
    this.julieta.dibujar();

    
  }

  mostrarGanaste() {
    background(0);
    // image(this.imgGanaste, 0, 0, width, height);
    text("¡Ganaste!", width / 2, height / 2);
  }

  mostrarPerdiste() {
    background(200, 0, 0);
    text("¡Perdiste!", width / 2, height / 2);
  }
}
