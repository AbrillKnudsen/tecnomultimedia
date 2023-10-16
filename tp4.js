//Abril Knudsen 
//Legajo: 94789/5
//Link: https://www.youtube.com/watch?v=LlmJo9VYrtI

// Variables del cañón
let cx, cy, can, calt;
let disparada ;

// Variables de la pelota
let bx, by, btam;

// Variables de los bichos
let nx, ny, nancho, nalto;
let di;

// Página actual
let pag = 0;

// Imágenes
let bichos, raid;

// Arreglos para múltiples bichos
let nnx = [];
let nny = [];
let dnx = [];
let cant = 5;

// Contadores
let Muertas = 0;
let seEscapan = 0;

// Cargador
let cargador = 0;
let cargadorLleno = true;

// Estado del juego
let estado = 0;

function setup() {
  createCanvas(600, 400);
  can = 40;
  calt = 80;
  cx = width / 2;
  cy = height - calt / 2;
  bx = cx;
  by = cy;
  btam = can;
  nx = 0;
  ny = 50;
  nancho = 100;
  nalto = 40;
  disparada = false ; 

  for (let i = 0; i < cant; i++) {
    nnx[i] = random(-300, -100);
    nny[i] = i * nalto;
    dnx[i] = random(0.18, 1.6);
  }

  textSize(20);
}

function preload() {
  bichos = loadImage("assets/bichos.png");
  raid = loadImage("assets/raid.png");
}

function draw() {
  background(100);

  switch (estado) {
    case 0:
      drawMenu();
      break;
    case 1:
      drawGame();
      break;
    case 2:
      drawCredits();
      break;
    case 3:
      drawInstructions();
      break;
    case 4:
      drawWin();
      break;
    case 5:
      drawLose();
      break;
  }
}

function drawMenu() {
  fill(255);
  text("Menu", 300, 100);
  drawButton(150, 200, "Start");
  drawButton(280, 200, "Credits");
  drawButton(400, 200, "Instructions");
}

function drawButton(x, y, label) {
  // Dibuja un botón en la posición (x, y)
  rectMode(CENTER);
  let buttonWidth = 100;
  let buttonHeight = 50;

  if (mouseX > x - buttonWidth / 2 && mouseX < x + buttonWidth / 2 &&
    mouseY > y - buttonHeight / 2 && mouseY < y + buttonHeight / 2) {
    fill(200, 0, 0); // Cambia de color si el mouse está encima
    if (mouseIsPressed) {
      handleButtonClick(label);
    }
  } else {
    fill(200);
  }

  rect(x, y, buttonWidth, buttonHeight);
  fill(255);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}

function handleButtonClick(buttonLabel) {
  // Maneja las acciones según el botón presionado
  switch (buttonLabel) {
    case "Start":
      estado = 1; // Juego
      break;
    case "Credits":
      estado = 2; // Créditos
      break;
    case "Instructions":
      estado = 3; // Instrucciones
      break;
    case "Menu":
      estado = 0; // Volver al menú principal
      break;
  }
}

function mousePressed() {
}

function drawGame() {
  // Código del juego
  arma(cx, cy, can, calt);

  for (let i = 0; i < cant; i++) {
    bichito(nnx[i], nny[i], nancho, nalto);
    nnx[i] += dnx[i];

    if (nnx[i] > width) {
      nnx[i] = random(-300, -100);
      seEscapan++;
    }

    if (impacto(bx, by, nnx[i], nny[i], nancho, nalto)) {
      disparada = false;
      nnx[i] = random(-300, -100);
      Muertas++;
    } else if (Muertas > 9) {
      estado = 4;
    }
  }

  if (keyIsPressed === true) {
    if (keyCode === RIGHT_ARROW && cx < width - can / 2) {
      cx += 2;
    }
    if (keyCode === LEFT_ARROW) {
      cx -= 2;
    }
  }

  if (disparada && by > 0) {
    by -= 10;
  } else {
    bx = cx;
    by = cy;
    disparada = false;
  }

  proyectil(bx, by, btam);

  if (impacto(bx, by, nx, ny, nancho, nalto)) {
    disparada = false;
    nx = -nancho;
  }

  if (cargadorLleno) {
    if (seEscapan > 2) {
      estado = 5;
    } else if (Muertas > 9) {
      estado = 4;
    }
  }

  fill(255);
  textSize(20);
  text("Muertas: " + Muertas, 450, 30);
  text("Se escaparon: " + seEscapan, 450, 50);
  text(cargador, width / 2, 50);
}

function drawCredits() {
  fill(255);
  text("Credits", width / 2, height / 2);
  text("Producción: Abril Knudsen", width / 2, height / 2 + 30);
  drawButton(width / 2, height - 50, "Menu");
}

function drawInstructions() {
  fill(255);
  text("Instructions", width / 2, height / 2);
  text("Mata a los insectos!", width / 2, height / 2 + 30);
  text("Dispara con espacio y mueve el spray con las flechas", width / 2, height / 2 + 60);
  text("Si se te escapan más de 3, pierdes. Si matas a más de 10, ganas.", width / 2, height / 2 + 90);
  drawButton(width / 2, height - 50, "Menu");
}

function drawWin() {
  fill(255);
  text("¡Ganaste!", width / 2, height / 2);
   drawButton(width / 2, height - 50, "Menu");
   Muertas = '0'; 
  seEscapan = '0'; 
  cargador = '0' ; 
   push ();
   for (let i = 0; i < cant; i++) {
    nnx[i] = random(-300, -100);
    nny[i] = i * nalto;
    dnx[i] = random(0.18, 1.6);
   }
   pop(); 
}

function drawLose() {
  fill(255);
  text("¡Perdiste!", width / 2, height / 2);
   drawButton(width / 2, height - 50, "Menu");
   Muertas = '0'; 
  seEscapan = '0'; 
  cargador = '0' ; 
  push ();
   for (let i = 0; i < cant; i++) {
    nnx[i] = random(-300, -100);
    nny[i] = i * nalto;
    dnx[i] = random(0.18, 1.6);
   }
   pop(); 
}

function keyPressed() {
  if (cargador < 100) {
    if (keyCode === 32) {
      disparada = true;
      cargador++;
    }
  } else {
    cargadorLleno = false;
  }
}

function bichito(x, y, ancho, alto) {
  fill(200, 600, 100);
  rectMode(CORNER);
  noFill();
  noStroke();
  rect(x, y, ancho, alto);
  image(bichos, x, y, 90, 80);
}

function proyectil(x, y, diam) {
  fill(150);
  circle(x, y, diam);
}

function impacto(x, y, px, py, ancho, alto) {
  if (x > px && x < px + ancho && y > py && y < py + alto) {
    return true;
  } else {
    return false;
  }
}

function arma(x, y, ancho, alto) {
  fill(200);
  rectMode(CENTER);
  rect(x, y, ancho, alto);
  image(raid, x-150, y-60); 
}
