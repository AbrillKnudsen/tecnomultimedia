//tp final 

let pantallass; 
let textos; 
let a; 

function setup() {
createCanvas (600, 600) ; 

a = new Aventura (); 
}

function preload (){
 pantallass = [] ; 
 for(let i = 0; i < 12; i++){
      pantallass[i] = loadImage("assets/" + i + ".png"); //armar carpeta assets y cargar imagenes 
 }
 
 textos = [] ; //cargar textos 
  //for(let i = 0; i < 12; i++){
  //    pantallas[i] =
 // }
}


function draw() {
  background (150) ; 
  a.dibujar(); 
}


function keyPressed (){
  a.teclado(); 
  
}
