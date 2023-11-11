//tp final 

let imagenPantallas; 
let textos; 
let a; 

function setup() {
createCanvas (600, 600) ; 

a = new Aventura (); 
}

function preload (){
 imagenPantallas = [] ; 
 for(let i = 0; i < 12; i++){
      imagenPantallas[i] = loadImage("assets/pantalla" + i + ".png"); 
 }
 
 textos = [] ; //cargar textos 
  for(let i = 0; i < 12; i++){
     textos[i] = loadStrings("assets/textos.txt");
     console.log(i + ":" + textos[i]);
  }
}


function draw() {
  background (150) ; 
  a.dibujar(); 
}


function keyPressed (){
  a.teclado(key); 
  
}

//esto en primera ventana
function mouseClicked() {
  this.clicX = mouseX; // Guarda la posición X del clic del mouse
  this.clicY = mouseY; // Guarda la posición Y del clic del mouse
  a.mouseClickeado(clicX,clicY); // Llama a la función mouseClickeado de la aventura y paso las cordenadas como paramtero
}
  
  


