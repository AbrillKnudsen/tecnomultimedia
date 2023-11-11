class Aventura {
  
constructor () {
//this.imagenPantallas = imagenPantallas; 
//this.pantallas = [] ;     
   // for ( let i = 0; i < 13; i++ ) {  //pantalla inicio es la 13? 12 pantallas de aventura
   //   this.pantallas.push(new Pantallas  (0) ); //corregir medidas: no aparecen todas al mismo tiempo 
   //}
   //this.textos = textos; 
   this.estado = 0 ; 
   this.juego = new Juego (); 
   this.momento = "inicio" ;
   this.boton = new Boton (); //esto puede ser array? AGREGAR MENSAJE ACÁ 
   
}
  
actualizar () {
  
}

dibujar () {
  if (this.momento === "inicio") {
    this.mostrarInicio() ; 
  }else if (this.momento === "historia"){
    this.mostrarHistoria () ; 
  }else if (this.momento === "juego") {
    this.mostrarJuego() ;
  }else if (this.momento === "ganaste") {
    //this.historiaSigueUno ();
    this.mostrarHistoria (); 
  }else if (this.momento === "perdiste"){
    //this.historiaSigueDos (); 
    this.mostrarHistoria (); 
  }else if (this.momento === "creditos") {
    this.mostrarCreditos () ; 
  }
}

teclado(key) {
 if (this.estado === 0 && key === ' '){
   this.estado = 1; 
 }
}

mostrarInicio() { 
  //agregar botones
  if (this.estado === 0) {
  image(imagenPantallas[0], 0, 0);
   this.boton = new Boton (250, 510, "creditos"); //esto puede ser array? AGREGAR MENSAJE ACÁ
   this.boton.dibujar(); 
   text (textos[0], 300, 300);
  }else if (this.estado === 1){
  image (imagenPantallas[1], 0, 0) ;
  }else if (this.estado === 2){
   image (imagenPantallas[2], 0, 0) ; 
   }else if (this.estado === 3){ 
   image (imagenPantallas[3], 0, 0) ;
    }else if (this.estado === 4){
   image (imagenPantallas[4], 0, 0) ;
    }else if (this.estado === 5){
      this.mostrarJuego () ; 
   //image (imagenPantallas[5], 0, 0) ; //juego
    }else if (this.estado === 6 && "ganaste"){
   image(imagenPantallas[6], 0, 0); //final 1 
    }else if (this.estado === 7 && "perdiste"){
  image (imagenPantallas[7], 0, 0) ; //FINAL 2 
   }else if (this.estado === 8){
   image (imagenPantallas[8], 0, 0) ; 
    }else if (this.estado === 9){
   image (imagenPantallas[9], 0, 0) ;
    }else if (this.estado === 10){
   image (imagenPantallas[10], 0, 0) ;
    }else if (this.estado === 11){
   image (imagenPantallas[11], 0, 0) ;
    }else if (this.estado === 12){
   image(imagenPantallas[12], 0, 0);
    }else if (this.estado === 13){
  image (imagenPantallas[13], 0, 0) ;
    }
}

//mostrarHistoria(){
// //this.pantallas.dibujar (); 
// image (imagenPantallas[1], 0, 0)
 
   
 
 
//}

mostrarJuego(){
  this.juego.dibujar(); 
}

//historiaSigueUno(){
//  //indicar que pantallas se dibujan acá
//}

//historiaSigueDos(){
//  //indicar que pantallas se dibujan acá 
//}

mostrarCreditos(){
//pantalla creditos   
}

//esto en clase aventura
mouseClickeado(clicX, clicY) {
  if(this.estado === 0 && this.boton.dentrodelboton){ //ejemplo boton pantalla 0 - iniicio 
  }
  }

}
