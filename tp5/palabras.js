class Palabras {

constructor() {
  // Declaro mis propiedades/variables y les asigno valor
   this.x = int( random(-200, -500 ) );
    this.y = y;
    this.t = 40;
    this.v = random( 1, 3 );  //acomodar medidas
    //this.texto = String ; 
//     this.kPalabras = [] ; 
     
//     kPalabras [0] = "el" ; 
//      kPalabras [1] = "veneno" ; 
//       kPalabras [2] = "es" ; 
//        kPalabras [3] = "falso" ; 
//         kPalabras [4] = "esperame" ; 
//          kPalabras [5] = "y" ; 
//           kPalabras [6] = "nos" ; 
//            kPalabras [7] = "escaparemos" ; 
//             kPalabras [8] = "juntos" ; 
//              kPalabras [9] = "amor" ; 
//               kPalabras [10] = "no" ; 
//                kPalabras [11] = "yo" ; 
//                 kPalabras [12] = "te" ; 
//                  kPalabras [13] = "elixir" ; 
//                   kPalabras [14] = "vivir" ; 
//                    kPalabras [15] = "mueras" ; 
//                     kPalabras [16] = "encontrame" ; 
//                      kPalabras [17] = "por" ; 
//                       kPalabras [18] = "Paris" ; 
//                        kPalabras [19] = "justo" ; 

this.kePalabras = [ "el", "veneno", "es", "falso", "esperame", "y", "nos", "escapamos", "juntos", "amor", "mueras", "encontrame", "por", "Paris", "yo", "te", "busques", "justo", "elixir" ] ;
}

actualizar () {
  //acomodarr 
  this.x = this.x + this.v;  // this.x += this.v;
    
    // "metodo" para reciclar
    if( this.x >= width+this.t ){
      // reinicio la posicion en x
      this.x = int( random(-200, -500 ) );  // se teletransporta al lado izquierdo
      // establezco una nueva velocidad
      this.v = random( 1, 3 );
    }
}

obtenerPalabraAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * this.kePalabras.length);
    return this.kePalabras[indiceAleatorio];
  }

dibujar() {
  //dibujar palabras arriba de cuadrados??
    push();  
    noFill ();
    rect( this.x, this.y + 5, this.t*2, this.t );
    obtenerPalabraAleatoria(); 
    pop();
    //push();
    //fill(0); 
    //this.texto = String (random ("el", "veneno", "es", "falso", "esperame", "y", "nos", "escapamos", "juntos", "amor", "mueras", "encontrame", "por", "Paris", "yo", "te", "busques", "justo", "elixir" )); 
    ////como poner las palabras dentro de los rect
    //pop();
    //this.kPalabras = [ random ] ; //porque no funcionaa
    
}

}
const instancia = new MiClase();

// Llama al método para obtener una palabra aleatoria
const palabraAleatoria = instancia.obtenerPalabraAleatoria();
console.log("Palabra aleatoria:", palabraAleatoria);
