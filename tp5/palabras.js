
class Palabras {

  constructor() {
    // Declaro mis propiedades/variables y les asigno valor
    this.x = int( random(-200, -500 ) );
    this.y = int (random (200, 330));
    this.t = 40;
    this.v = random( 0.9, 1.2 );  //acomodar medidas

    this.kePalabras = [ "el", "veneno", "es", "falso", "amor", "mueras", "por", "yo", "te", "busques"] ;
    this.kePalabrasBien = [ "el", "veneno", "es", "falso"] ;
    //this.kePalabrasMal = ["amor", "mueras",  "por", "yo", "te", "busques"] ;
    this.laPalabra = random (this.kePalabras);

    //this.isClicked = false;

    //const estaBien = kePalabrasBien.includes (laPalabra);
    //const todas = kePalabras.includes(laPalabra);
  }

  actualizar () {
    //acomodarr
    this.x = this.x + this.v;  // this.x += this.v;

    // "metodo" para reciclar
    if ( this.x >= width+this.t ) {
      // reinicio la posicion en x
      this.x = int( random(-200, -500 ) );  // se teletransporta al lado izquierdo
      // establezco una nueva velocidad
      this.v = random( 0.5, 1.5);
    }
  }

  dibujar() {
    //dibujar palabras arriba de cuadrados??
    push();
    fill (0, 200, 0);
    rect( this.x, this.y + 5, this.t*2, this.t );
    fill (0) ;
    if (this.kePalabrasBien.includes(this.laPalabra)) {
      fill(255); // Cambia el color a blanco solo si la palabra está en el arreglo kePalabrasBien
    }
    text(this.laPalabra, this.x + this.t, this.y + this.t / 2);
    pop();
  }
  //probar boton y colisionn 
  dentroCuadrado() {
  //  //verifica si el mouse esta dentro
  return (mouseX > this.x && mouseX < this.x + 100 && mouseY > this.y && mouseY < this.y + 50);  //me parece que el error esta acá, hace falta agregar velocidad? NO FUNCIONO 
  //// // return this.x + this.tam > mouseX && this.x < mouseX + Obstaculo.tam && this.y + this.tam > mouseY && this.y < mouseY + this.tam
   //return (this.x + this.t > mouseX && this.x < mouseX && this.y + this.t > mouseY && this.y < mouseY + this.t);
  }
  
}
