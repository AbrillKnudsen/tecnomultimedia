
class Palabras {

constructor() {
  // Declaro mis propiedades/variables y les asigno valor
   this.x = int( random(-200, -500 ) );
    this.y = int (random (280, 400));
    this.t = 40;
    this.v = random( 0.5, 2.5 );  //acomodar medidas
  

this.kePalabras = [ "el", "veneno", "es", "falso", "amor", "mueras",  "por", "yo", "te", "busques"] ;
this.laPalabra = random (this.kePalabras); 
}

actualizar () {
  //acomodarr 
  this.x = this.x + this.v;  // this.x += this.v;
    
    // "metodo" para reciclar
    if( this.x >= width+this.t ){
      // reinicio la posicion en x
      this.x = int( random(-200, -500 ) );  // se teletransporta al lado izquierdo
      // establezco una nueva velocidad
      this.v = random( 0.5, 3.5 );
    }
}



dibujar() {
  //dibujar palabras arriba de cuadrados??
    push();  
    fill (0,200,0);
    rect( this.x, this.y + 5, this.t*2, this.t );
    fill (0) ;
    //const palabra = this.obtenerPalabraAleatoria(); 
    text(this.laPalabra, this.x + this.t, this.y + this.t / 2);
    pop();
    //push();
    //fill(0); 
    //this.texto = String (random ("el", "veneno", "es", "falso", "esperame", "y", "nos", "escapamos", "juntos", "amor", "mueras", "encontrame", "por", "Paris", "yo", "te", "busques", "justo", "elixir" )); 
    ////como poner las palabras dentro de los rect
    //pop();
    //this.kPalabras = [ random ] ; //porque no funcionaa
    
}


}
