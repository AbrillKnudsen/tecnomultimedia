//idea 1 hacer estados del sprite de la mano de romeo, mouseIsPressed estirar mano
//idea 2 hacer bala y que romeo este fijo
// idea 3 hacer que romeo salte y le pegue a las palabras
//idea 4 que la mano flotante aprete las palaba con el mouse

class Romeo {

  constructor(t) {
    // Declaro mis propiedades/variables y les asigno valor
    this.tam = t;
    //this.s = 0 ;
    this.ro = ro;
    this.spriteBrazo = spriteBrazo;
    this.totalFrames = [4];
    this.frame = 0;

    this.x = width / 2;
    this.y = 0;

    //this.v = 4;
  }


  moverTeclas (tecla, derecha, izquierda) {
    if (tecla == izquierda) {
      this.x -= this.tam;
    } else if ( tecla == derecha ) {
      this.x += this.tam;
    }
  }

  actualizar() {
  }

  dibujarConPropiedad() {

    if (mouseIsPressed) {
      //  this.v = 1;
      push();
      image (this.spriteBrazo[frameCount%4], width/2-25, 320);
      frameRate(20);
      pop();
      //acá preguntar colision
      //calcularColision(palabras);
    } else {
      push();
      //image (this.spriteBrazo[frameCount%4], width/2, 410);
      frameRate(60);
      pop();
    }
    //if (mouseIsClicked) {
    //rect(this.x, this.y --, this.tam/2, this.tam);
    //}
    //this.moverTeclas (keyCode, LEFT_ARROW, RIGHT_ARROW); //NO ANDA
  }

  //moverRo (keyCode){
  //  if (keyCode == UP_ARROW){
  // this.moverArriba();
  //} else if (keyCode == DOWN_ARROW){
  //  this.moverAbajo();
  //}
  //}

  dibujar() {
    //image (img[this.s], this.x, this.y, this.tam, width/2, 0);
    //this.bala.dibujar();
    // image(this.spriteBrazo[0], 260, 390);
    image(this.ro, width/2 - this.spriteBrazo.length, 420);
    push();
    //fill(0, 0, 200);
    //rect(this.x, this.y + 500, this.tam/2, this.tam);
    pop();
  }
  
  
  //  calcularColision(palabras) {
  //     console.log("Calculando colisión en Romeo");
  //  let distanciaColision = 70;

  //  for (let i = palabras.length - 1; i >= 0; i--) {
  //    let palabra = palabras[i];

  //    // Verifica la colisión comparando coordenadas y dimensiones
  //    if (
  //      this.x + 25 < palabra.x + palabra.t &&
  //      this.x + 25 + this.spriteBrazo[0].width > palabra.x &&
  //      320 < palabra.y + palabra.t / 2 &&
  //      320 + this.spriteBrazo[0].height > palabra.y
  //    ) {
  //      // Colisión detectada
  //      palabras.splice(i, 1);

  //      // Verifica si la palabra colisionada está en kePalabrasBien
  //      if (j.kePalabrasBien.includes(palabra.laPalabra)) {
  //        // Sumar puntos solo si la palabra es correcta
  //        j.contadorPuntos++;
  //        console.log("Palabra correcta colisionada:", palabra.laPalabra);
  //      }
  //    }
  //  }
  //}

  //calcularColision(palabras) { //ultima colision antes de cambiar de idea
  //  for (let i = palabras.length - 1; i >= 0; i--) {
  //    let palabra = palabras[i];

  //    // Calcula las coordenadas del centro del sprite de la mano
  //    let manoX = this.x + 25 + this.spriteBrazo[i].width / 2;
  //    let manoY = 320 + this.spriteBrazo[i].height / 2;

  //    // Calcula las coordenadas del centro de la palabra
  //    let palabraX = this.palabra.x + this.palabra.t;
  //    let palabraY = this.palabra.y + this.palabra.t / 2;

  //    // Calcula la distancia entre el centro de la mano y la palabra
  //    let distancia = dist(manoX, manoY, palabraX, palabraY);

  //    // Verifica si la distancia es menor que el radio de colisión
  //    let radioColision = 70;

  //    if (distancia < radioColision) {
  //      // Colisión detectada
  //      console.log("Colisión detectada con la palabra:", palabra.laPalabra);
  //      palabras.splice(i, 1);


  // Verifica si la palabra colisionada está en kePalabrasBien
  //if (j.kePalabrasBien.includes(palabra.laPalabra)) {
  //  // Sumar puntos solo si la palabra es correcta
  //  j.contadorPuntos++;
  //console.log("Palabra correcta colisionada:", palabra.laPalabra);
  //     console.log("Palabra correcta colisionada:");
  //      //} else {
  //      //  console.log("Palabra incorrecta colisionada:", palabra.laPalabra);
  //      //}
  //    }
  //  }
  //}
}
