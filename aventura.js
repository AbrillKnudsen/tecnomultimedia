class Aventura {
  
constructor () {
this.pantallass = imagenPantallas; 
this.pantallas = [] ;     
    for ( let i = 0; i < 13; i++ ) {  //pantalla inicio es la 13? 12 pantallas de aventura
      this.pantallas.push(new Pantallas  (0) ); //corregir medidas: no aparecen todas al mismo tiempo 
   }
   this.textos = textos; 
   this.estado = "inicio" ; 
   this.juego = new Juego (); 
}
  
actualizar () {
  
}

dibujar () {
  if (this.estado === "inicio") {
    this.mostrarInicio() ; 
  }else if (this.estado === "historia"){
    this.mostrarHistoria () ; 
  }else if (this.estado === "juego") {
    this.mostrarJuego() ;
  }else if (this.estado === "ganaste") {
    this.historiaSigueUno ();
  }else if (this.estado === "perdiste"){
    this.historiaSigueDos (); 
}
}

teclado (){
  this.pantallas.teclado (); //esto ta bien? 
  if (this.estado === "inicio") {
    this.estado = "historia"; 
  } else if (this.estado === "historia"){
    this.estado = "juego"; 
  } else if (this.estado === "juego"){
    this.estado = "ganaste" ; //agregar condiciones ganaste/perdiste
    this.estado = "perdiste";
  }
}

mostrarInicio() {
  background (200) ; 
  //agregar botones
}

mostrarHistoria(){
 this.pantallas.dibujar ();  
}

mostrarJuego(){
  this.juego.dibujar(); 
}

historiaSigueUno(){
  //indicar que pantallas se dibujan acá
}

historiaSigueDos(){
  //indicar que pantallas se dibujan acá 
}

}
