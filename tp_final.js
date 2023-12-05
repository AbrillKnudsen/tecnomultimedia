//tp final
//abril y ari

let imagenPantallas;
let textos;
let a;


let imagenes = []; // Arreglo para almacenar las imágenes
let gifs = [];


function setup() {
  createCanvas (600, 600) ;

  a = new Aventura ();
}

function preload () {
  imagenPantallas = [] ;
  for (let i = 0; i < 14; i++) {
    imagenPantallas[i] = loadImage("assets/pantalla" + i + ".png");
  }

  textos = [] ; //cargar textos
  for (let i = 0; i < 12; i++) {
    textos = loadStrings("assets/textos.txt");
    console.log(i + ":" + textos[i]);
  }

  // Precarga de imágenes
  for (let i = 0; i < 11; i++) {
    imagenes[i] = loadImage('assets/imagenes/img' + i + '.png');
  }

  for (let i = 1; i < 3; i++) {
    gifs[i] = loadImage('assets/imagenes/giphy' + i + '.gif');
  }
}

function draw() {
  background (150) ;
  a.dibujar();
}

function keyPressed () {
  a.teclado(key);
}

//esto en primera ventana
function mouseClicked() {
  clicX = mouseX; // Guarda la posición X del clic del mouse
  clicY = mouseY; // Guarda la posición Y del clic del mouse
  a.mouseClickeado(clicX, clicY); // Llama a la función mouseClickeado de la aventura y paso las cordenadas como paramtero
}
