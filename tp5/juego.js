
class Juego {

constructor() {
  // Declaro mis propiedades/variables y les asigno valor
  //imgenes 
 // this.imgGanaste = imgGan ;
  //this.spriteBrazo = spritesheet ; 
  //objetos del juego
  
  this.julieta = new Julieta (50) ; 
  this.ju = ju; 
  this.romeo = new Romeo (50);
  this.ro = ro; 
  this.spriteBrazo = spriteBrazo; 
  this.palabras = [];
   for ( let i = 0; i < 20; i++ ) {
      this.palabras.push( new Palabras( i*50 + 50 ) );
   }
   //estados
   this.estado = "instrucciones" ; 
   this.tiempoInicio = 0; 
   this.tiempoLimite = 30000;
   this.tiempoInicio= millis(); 
   //this.contador = 0; 
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
    this.romeo.calcularColision (this.palabras) ; 
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
   //if(this.estado== "instrucciones"){
   //  this.estado= "jugando"; 
   //}
 if (this.estado === "instrucciones") {
      this.estado = "jugando";
    } else if (this.estado === "jugando") {
      this.romeo.moverTeclas(keyCode, LEFT_ARROW, RIGHT_ARROW);
    }
    else if (this.estado === "jugando" & mouseIsPressed) {
      this.romeo.dibujarConPropiedad (); 
    }
  }
   mostrarInstrucciones() {
    background(200);
    textSize (15); 
    text("Instrucciones", width / 2, 100);
    text("Julieta le quiere contar su plan a Romeo, pero solo él puede saberlo", width/2, 130) ; 
    text("Para que no los descubran, Julieta envia un mensaje oculto", width/2, 160);
    text("Ayuda a Romeo a elegir las palabras correctas para armar el mensaje", width/2, 190) ; 
    text("funcionamiento del juego???");
    // Mostrar otras instrucciones
  }

  mostrarJuego() {
    //dibujar contaodr e inicializarlo 
    textSize(15);
    text("Mensaje de Julieta: El veneno no me matará, espera y nos escaparemos juntos", width / 2, 50);
    // Dibuja objetos de juego
    this.romeo.dibujar();
    this.romeo.dibujarConPropiedad(); 
    this.julieta.dibujar(); //dibujar adelante 

    for (let i = 0; i < 20; i++) {
      this.palabras[i].dibujar();
    }
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
