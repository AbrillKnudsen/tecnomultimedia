//FUNCIONES

//funcion con parametros que retorna valor
boolean botonCircular (int x, int y, int r) {
  return dist (mouseX, mouseY, x, y) <= r;
}

void botonInicio (int tam) {
  if ( dist(mouseX, mouseY, 275, 225)<=50 ) {
    fill( 200, 0, 0 );
  } else {
    fill( 200 );
  }
  circle( 275, 225, 150 );
  fill (0) ;
  text ("Inicio", 275, 225) ;
  textSize (tam) ;
  textAlign (CENTER);
}

void botonX (int x, int y, int r, String texto, color co) {
  fill(200);
  circle (x, y, r) ;
  fill(255, 0, 0);
  textSize (15) ;
  fill(co);
  text (texto, x, y) ;
  textAlign (CENTER) ;
} 

void reiniciar () {
  estado = 0;
}
