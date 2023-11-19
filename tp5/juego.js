class Juego {

  constructor() {
    this.julieta = new Julieta (50) ;
    this.ju = ju;
    this.drone = drone;
    this.control = control;
    this.balcon = balcon;
    this.romeo = new Romeo (50);
    //this.spriteBrazo = spriteBrazo;
    this.palabras = [];
    for ( let i = 0; i < 20; i++ ) {
      this.palabras.push( new Palabras( i*70 + 50 ) );
    }
    //estados
    this.estado = "instrucciones" ;
    //contador
    this.contadorPuntos = 0;
    //tiempo pantalla
    this.tiempo = 0; 
    this.tiempoSec = 0; 
    //tiempo cuenta regresiva (lo hice porque no me tomaba el cambio de estado con la otra)
    this.contador = 0;
    this.tiempo2 = 2000;
  }


  actualizar() {
    // limitarMouse();
    for ( let i = 0; i < 20; i++ ) {
      this.palabras[i].actualizar();
      if (mouseIsPressed) {
        if (dist(mouseX, mouseY, this.palabras[i].x, this.palabras[i].y)<50) { //probar cambiar mousex y mouse y por medidas de cuadraadito
          background(0);
          this.palabras[i].y = -50;
          //if (this.kePalabrasBien.includes(this.laPalabra)) {
          if (this.palabras[i].kePalabrasBien.includes(this.palabras[i].laPalabra)) {
            this.contadorPuntos ++;
            if (this.estado === "jugando" && this.contadorPuntos>=4) {
              this.estado = "ganaste";
            }
          }
        }
      }
    }
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
      this.romeo.moverTeclas(keyCode, LEFT_ARROW, RIGHT_ARROW, UP_ARROW, DOWN_ARROW);
      // this.romeo.moverRo(keyCode); //estao no funciona
      if (mouseIsPressed == true) {
        console.log("Mouse presionado. Calculando colisión...");
        this.romeo.dibujarConPropiedad ();
      }
    }
    if (key === 'r') {
     this.reiniciar();  
    }
  }
  
  mostrarInstrucciones() {
    background(128, 191, 255);
    textSize (15);
    text("Instrucciones", width / 2, 100);
    text("Julieta le quiere contar su plan a Romeo, pero solo él puede saberlo", width/2, 130) ;
    text("Para que no los descubran, Julieta envia un mensaje oculto", width/2, 160);
    text("Ayuda a Romeo a elegir las palabras correctas para armar el mensaje", width/2, 190) ;
    text("Con ayuda del mouse posicionate donde prefieras para agarrar las palabras correctas", width/2, 220); 
    text("Hace click para seleccionarlas, !Tenes 20 seg para agarrar 4 palabras correctas!", width/2, 250); 
    text("Apreta space para comenzar", width/2, 530); 
    // Mostrar otras instrucciones
  }

  mostrarJuego() {
    //dibujar contador e inicializarlo
    console.log ('tiempo transcurrido' + this.tiempo2); 
    this.tiempo2 --;
    this.contador += 1; 
    
    this.tiempo++;
    if(this.tiempo >= 60){
     this.tiempoSec++; 
     this.tiempo = 0; 
    }
    text ("Tiempo " + this.tiempoSec, 50, 20);
    
    textSize(15);
    text("Julieta: El veneno es falso", width / 2, 50);
    text("Palabras correctas" + this.contadorPuntos + "/4", 525, 20);
    // Dibuja objetos de juego
    this.romeo.dibujar();
    this.romeo.dibujarConPropiedad();
    //this.botonesRect.palabras();
    this.julieta.dibujar();
    for (let i = 0; i < 20; i++) {
      this.palabras[i].dibujar();
    }
    this.limitarMouse();
    push();
    if (this.tiempo2 === 0){
     this.estado = "perdiste";
    }
    pop();
  }

  mostrarGanaste() {
    background(0, 152, 70);
    text("¡Ganaste!", width / 2, height / 2);
    text("Apreta R para reiniciar", width/2, 530);
  }

  mostrarPerdiste() {
    background(200, 0, 0);
    text("¡Perdiste!", width / 2, height / 2);
    text("Apreta R para reiniciar", width/2, 530);
  }
  
  reiniciar () {
    this.estado = "instrucciones";
    this.tiempo = 0; 
    this.tiempoSec = 0; 
    this.tiempo2 = 2000; 
    this.contador = 0; 
    this.contadorPuntos = 0;
    
  }

  limitarMouse () {
    let mouseYLimited
      // Limita el movimiento del mouse solo al eje Y
      mouseYLimited = mouseY;
    // Dibuja un objeto que sigue el movimiento del mouse solo en el eje Y
    push();
    fill(0, 0, 255);
    image (this.drone, width / 2, mouseYLimited, 50, 50);
    pop();
  }
}
