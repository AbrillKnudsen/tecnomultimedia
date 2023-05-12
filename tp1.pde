//tiempo
int diferenciaTemporal;
int marcaEnElTiempo;
int pantallas;
//imagenes
PImage lechuzaEnCampoDeFlores ; 
PImage lechuzaVolando ;
PImage lechuzaConRayo ;
PImage lechuzaConFuego ;
PImage lechuzaQuemada ; 
PImage aveFenix ; 
//texto
PFont letrasLindas ; 
//animación de texto
float texto1 ;
float texto2 ;
int tamaño ;
//boton de reinicio
int x, y, d; 
float distancia, radio; 
color bg; 
int colorBoton ; 

void setup(){

  lechuzaEnCampoDeFlores = loadImage ("lechuzaEnCampoDeFlores.jpg") ; 
  lechuzaVolando = loadImage ("lechuzaVolando.jpg") ; 
  lechuzaConRayo = loadImage ("lechuzaConRayo.png") ; 
  lechuzaConFuego = loadImage ("lechuzaConFuego.png") ;
  lechuzaQuemada = loadImage ("lechuzaQuemada.png") ; 
  aveFenix = loadImage ("aveFenix.png") ; 
  
  letrasLindas = loadFont ("CenturyGothic-24.vlw") ; 
  texto1 = 1 ;
  texto2 = 3 ;
  tamaño = 0 ; 
  
  x = 320 ; 
  y = 280 ; 
  d = 70 ; 
  
  
  size ( 640 , 480 );
  pantallas = 0;
  
  bg = color(255) ; 
}

void draw(){
  
  diferenciaTemporal = millis() - marcaEnElTiempo;
  
  textSize(5) ; 
  fill(255) ;
  
  //maquina de estados
  if( pantallas == 0 ){ 
    background( 0 );
    textFont (letrasLindas) ; 
    texto1 = texto1 + texto2 ;
    text ( "La lechuza que sobrevivio", texto1, 200) ; 
    if( diferenciaTemporal >= 5000 ){  //5 segundos
      pantallas = 1;
      marcaEnElTiempo = millis();
    }
    
  }else if (pantallas == 1 ){
    image (lechuzaEnCampoDeFlores, 0, 0, 640, 480) ; 
    textFont (letrasLindas) ;
     textSize (tamaño) ;
      if ((tamaño>=0) && (tamaño<=24)) {tamaño++;}
    text ("La lechuza estaba tranquila \n en un campo de flores.", 20, 50) ;
    if( diferenciaTemporal >= 5000 ){  //5 segundos
      pantallas = 2;
      marcaEnElTiempo = millis();
      tamaño=0;
    }   
    
  }else if (pantallas == 2 ){
    image (lechuzaVolando, 0, 0, 640, 480) ;
    textFont (letrasLindas) ; 
     textSize (tamaño) ;
      if ((tamaño>=0) && (tamaño<=24)) {tamaño++;}
    text ("Decidio ir a volar un rato hasta que...", 70, 50) ;  
    if( diferenciaTemporal >= 5000 ){  //5 segundos
      pantallas = 3;
      marcaEnElTiempo = millis();  
       tamaño=0;
    }  
    
  }else if (pantallas == 3 ){
    image (lechuzaConRayo, 0, 0, 640, 480) ; 
    textFont (letrasLindas) ; 
     textSize (tamaño) ;
    if ((tamaño>=0) && (tamaño<=24)) {tamaño++;}
    text ("Empezó una tormenta, \n caian rayos y truenos.", 20, 30) ; 
    text("Un rayo le cayo en el ala \n y empezo a caer", 20, 440) ; 
    if( diferenciaTemporal >= 5000 ){  //5 segundos
      pantallas = 4;
      marcaEnElTiempo = millis(); 
       tamaño=0;
    }   
     
  }else if (pantallas == 4 ){
    image (lechuzaConFuego, 0, 0, 640, 480) ; 
    textFont (letrasLindas) ;
     textSize (tamaño) ;
    if ((tamaño>=0) && (tamaño<=24)) {tamaño++;}
    text ("Todo el bosque estaba en llamas, \n la lechuza quedo atrapada, \n estaba muy asustada.", 50, 50) ;  
    if( diferenciaTemporal >= 5000 ){  //5 segundos
      pantallas = 5;
      marcaEnElTiempo = millis();
       tamaño=0;
    } 
    
  }else if (pantallas == 5 ){ 
    image (lechuzaQuemada, 0, 0, 640, 480) ; 
    textFont (letrasLindas) ; 
     textSize (tamaño) ;
    if ((tamaño>=0) && (tamaño<=24)) {tamaño++;}
    text ("Aguantó todo lo que pudo, \n pero la consumió el fuego \n y quedo hecha cenizas. ", 50, 50) ; 
    if( diferenciaTemporal >= 5000 ) { //5 segundos 
      pantallas = 6; 
      marcaEnElTiempo = millis(); 
       tamaño=0;
    }
    
  }else if (pantallas == 6 ) {
    image (aveFenix, 0, 0, 640, 480) ; 
    textFont (letrasLindas) ; 
      textSize (tamaño) ;
    if ((tamaño>=0) && (tamaño<=24)) {tamaño++;}
    text ("Pero revivio, \n y se convirtio en un ave fenix.", 10, 430) ;
    if( diferenciaTemporal >= 5000 ) { //5 segundos 
      pantallas = 7; 
      marcaEnElTiempo = millis() ; 
       tamaño=0;
    }
    
  }else if (pantallas == 7) {
    background( 255 );
    fill (0) ; 
    textFont (letrasLindas) ; 
     textSize (tamaño) ;
    if ((tamaño>=0) && (tamaño<=24)) {tamaño++;}
    text ("Reviví esta linda historia.", 220, 200) ; 
    pantallas = 8; 
    distancia = dist (x, y, mouseX, mouseY) ; 
    radio = d / 2 ; 
    
    if (distancia < radio) { 
      colorBoton = 150 ;
      if (mousePressed) { 
        colorBoton = 20 ;
      }
      }else{ 
        colorBoton = 255 ; 
      
      }
  fill (colorBoton) ; 
  circle(x, y, d ) ; 
  textFont (letrasLindas) ;
       }
  
}
void mousePressed() {
  if (distancia < radio) { //cuando estoy dentro del circulo 
  bg = color (random(255), random(255), random(255) );
  }else if( pantallas == 8){
     pantallas = 0 ;
     diferenciaTemporal = millis();
     marcaEnElTiempo = millis() ; 
     texto1=1;
   }
  
}
