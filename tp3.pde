//Abril Knudsen 94789/5
//tp3 Aventura Grafica, "Romeo y Julieta" de William Shakespeare.
//link del video: https://www.youtube.com/watch?v=NpRWhFMLFr4

int c = 15; //cantidad de pantallas, imagenes y textos
PImage [] listaImagenes = new PImage[c];
int c2 = 11 ; //cantidad de textos para las opciones de los botones.
String [] listaTextos = new String[c];
String [] textosBotones = new String [c2];

boolean botonInicio, botonA, botonB, botonFinal, botonSiguiente, botonCreditos ;
boolean estado3 ;
int estado ;

void setup () {
  size (600, 600) ;

  for (int i = 0; i < c; i++) {
    listaImagenes[i] = loadImage ( "royju" + i + ".jpg") ;
  }
  estado = 0 ;
  listaTextos = loadStrings("textos.txt");
  //println( textos );
  for ( int i = 0; i < c; i++ ) {
    println( i + ": " + listaTextos[i] );
  }
  textosBotones = loadStrings ("textosBotones.txt");
  for (int i = 0; i < c2; i++ ) {
    println( i + ": " + textosBotones[i] ) ;
  }
}

void draw () {
  switch(estado) {
  case 0:
    image(listaImagenes[0], 0, 0);
    botonInicio (20);
    botonX (100, 550, 20, "Creditos", 0);
    text (listaTextos[0], 260, 70);
    textAlign (CENTER) ;
    //textSize (60) ;
    break;
  case 1:
    image(listaImagenes[1], 0, 0 );
    fill (50);
    rect (50, 30, 500, 200) ;
    fill(225) ;
    text(listaTextos[1], 250, 100, 300, 100) ;
    botonX(100, 100, 20, "A", 255);
    text (textosBotones[0], 130, 70 ) ;
    botonX (100, 150, 20, "B", 255) ;
    text (textosBotones[1], 100, 160, 100, 100) ;
    break;
  case 2:
    estado3 = false ;
    fill(0) ;
    image(listaImagenes[2], 0, 0);
    text(listaTextos[2], 260, 70, 300, 100) ;
    botonX (500, 550, 20, "Siguiente", 255) ;
    break;
  case 3:
    estado3 = true ;
    image(listaImagenes[3], 0, 0 );
    fill (50);
    rect (220, 30, 370, 180) ;
    fill(225) ;
    text(listaTextos[3], 260, 70, 300, 100) ;
    fill(255);
    botonX(500, 550, 20, "Siguiente", 255) ;
    break;
  case 4:
    fill(0) ;
    image(listaImagenes[4], 0, 0);
    text(listaTextos[4], 260, 70, 300, 100) ;
    if (estado3 == true) {
      botonX (100, 80, 20, "A", 255) ; //si paso por pantalla 3
      text (textosBotones[2], 100, 110) ;
    } else {
      botonX(-100, -100, 1, "A", 255) ;
      text (textosBotones[2], -100, -120) ;
    }
    botonX (100, 130, 20, "B", 255) ;
    text (textosBotones[3], 50, 150, 150, 100) ;
    break;
  case 5:
    image(listaImagenes[5], 0, 0 );
    text(listaTextos[5], 260, 70, 300, 100) ;
    botonX(500, 550, 20, "Siguiente", 255) ;
    break;
  case 6:
    image(listaImagenes[6], 0, 0);
    text(listaTextos[6], 260, 70, 300, 100) ;
    text (textosBotones[4], 400, 150, 150, 100) ;
    if (estado3 == true) {
      botonX (100, 100, 20, "A", 0) ; //si ppaso por panatlla 3
      text (textosBotones[5], 100, 70, 100, 100) ;
    } else {
      botonX (-100, -100, 20, "A", 0) ;
      text (textosBotones[5], -200, -220, 100, 100) ;
    }
    botonX (100, 140, 20, "B", 0) ;
    text (textosBotones[6], 100, 130, 150, 100) ;
    break;
  case 7:
    image(listaImagenes[7], 0, 0);
    text(listaTextos[7], 260, 70, 300, 100) ;
    textSize(15);
    botonX (550, 550, 40, "Final", 0) ;
    break;
  case 8:
    image(listaImagenes[8], 0, 0);
    text(listaTextos[8], 260, 70, 300, 100) ;
    textSize (15) ;
    botonX (550, 550, 40, "Final", 0) ;
    break;
  case 9:
    image(listaImagenes[9], 0, 0 );
    text(listaTextos[9], 260, 70, 300, 100) ;
    textSize (15);
    botonX(100, 100, 20, "A", 255) ;
    text (textosBotones[8], 100, 120) ;
    botonX(100, 500, 20, "B", 255) ;
    text (textosBotones[7], 100, 550) ;
    break;
  case 10:
    image(listaImagenes[10], 0, 0);
    textSize(12);
    text(listaTextos[10], 180, 290, 250, 250) ;
    botonX (550, 550, 20, "Siguiente", 255) ;
    break;
  case 11:
    image(listaImagenes[11], 0, 0);
    textSize(15);
    text(listaTextos[11], 100, 40, 400, 100) ;
    botonX (550, 550, 40, "Final", 0) ;
    break;
  case 12:
    image(listaImagenes[12], 0, 0);
    text(listaTextos[12], 260, 70, 300, 100) ;
    textSize(15) ;
    botonX(100, 100, 20, "A", 0) ;
    text (textosBotones[9], 100, 120) ;
    botonX (100, 500, 20, "B", 0) ;
    text (textosBotones[10], 100, 520) ;
    break;
  case 13:
    image(listaImagenes[13], 0, 0 );
    text(listaTextos[13], 220, 150, 160, 300) ;
    textSize(15) ;
    botonX(550, 550, 40, "Final", 100) ;
    break;
  case 14:
    image(listaImagenes[14], 0, 0);
    text(listaTextos[14], 260, 70, 200, 100) ;
    text ("Apreta ENTER para reiniciar", 500, 580) ;
    botonX(550, 550, 40, "Final", 0) ;
    break;
  }
}

void mousePressed() {  //botones

  if ( estado == 0 && botonCircular(275, 225, 50)) {
    estado = 1;
  }
  if (botonCircular(100, 550, 20)) {//boton crediotos agregar
    estado = 14 ;
  }//-------------- pantalla1
  else if ( estado == 1) {
    if (botonCircular (100, 100, 20)) {//botonA
      estado = 2;
    }
    if (botonCircular(100, 150, 20)) {//botonB
      estado = 3;
    }
  }//-------------- pantalla2
  else if  ( estado == 2) {
    if (botonCircular(500, 550, 20)) {//boton siguiente
      estado = 4;
    }
  }//-------------- pantalla3
  else if  ( estado == 3) {
    if (botonCircular(500, 550, 20)) {
      estado = 4;
    }
  }//-------------- pantalla4
  else if  ( estado == 4) { 
    if (botonCircular (100, 80, 20)) {
      estado = 5;
    }
    if (botonCircular(100, 130, 20)) {
      estado = 6;
    }
  }//-------------- pantalla5
  else if  ( estado == 5) {
    if (botonCircular(500, 550, 20)) {
      estado = 9;
    }
  }//-------------- pantalla6
  else if  ( estado == 6) {
    if (botonCircular (100, 100, 20)) {
      estado = 7;
    }
    if (botonCircular(100, 140, 20)) {
      estado = 8 ;
    }
  }//-------------- pantalla7
  else if  ( estado == 7) {
    if (botonCircular (550, 550, 40)) {//botonfinal
      estado = 0;
    }
  }//-------------- pantalla8
  else if  ( estado == 8) {
    if (botonCircular (550, 550, 40)) {
      estado = 0;
    }
  }//-------------- pantalla9
  else if  ( estado == 9) {
    if (botonCircular (100, 100, 20)) {
      estado = 10;
    }

    if (botonCircular(100, 500, 20)) {
      estado = 11 ;
    }
  }//-------------- pantalla10
  else if  ( estado == 10) {
    if (botonCircular (550, 550, 100)) {
      estado = 12;
    }
  } //-------------- pantalla11
  else if  ( estado == 11) {
    if (botonCircular (550, 550, 40)) {
      estado = 0;
    }
  } //-------------- pantalla12
  else if ( estado == 12 ) {
    if (botonCircular (100, 100, 20)) {
      estado = 0;
    }
    if (botonCircular(100, 500, 20)) {
      estado = 13;
    }
  } //-------------- pantatalla13
  else if (estado == 13) {
    if (botonCircular (550, 550, 40)) {
      estado = 0 ;
    }
  } else if (estado == 14) {
    if (botonCircular (550, 550, 40)) {
      estado = 0 ;
    }
  }
}

void keyPressed() {
  if ( key == ENTER) { //con enter se reinicia
    reiniciar();
  }
}
