PImage imagenIlusionOptica ;
//link: https://www.youtube.com/watch?v=nAlb0powDzA
void setup(){
  size(800, 400) ;
  imagenIlusionOptica = loadImage ("grillaNueva.jpg") ; 
  imagenIlusionOptica.resize(400,400);

}
  String estado = "princ" ;

float colores(String est){   // retorna valor 
  float val=0;
  
     if(est == "evento"){
       if(mousePressed){
         val = mouseY/2;
       }else{
           val = random(255);
     }
     }
  return val;
}  
  
  void draw() { 
    grilla (400) ;
    image (imagenIlusionOptica, 0, 0) ;
}

void keyPressed(){
 
   if (key == 'm') 
     estado = "movimientoCuadraditos";
  if(key == 'e')
    estado="evento";
    else
    if(key == 'i')
     estado="princ";
  
}  
