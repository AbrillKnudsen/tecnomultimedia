PImage imagenbuho ; 

void setup () {
  size(800, 400) ; 
  background(112, 136, 95) ;
  imagenbuho = loadImage("imagenbuho.jpg") ; 
  imagenbuho.resize(400, 400) ; 
}

void draw () {
  
   //fondo
  noStroke() ;
  //color2
  fill(247, 219, 167) ; 
  circle(50, 80, 80) ;
  circle(120, 100, 50) ;
  circle(220, 140, 100) ;
  circle(350, 200, 120) ;
  circle(330, 40, 100) ;
  circle(220, 30, 60) ;
  circle(130, 10, 80) ;
  circle(150, 60, 150) ;
  circle(330, 120, 120) ;
  circle(380, 50, 100) ; 
  circle(380, 120, 100) ;
  //color1
  fill(255, 248, 191) ; 
  circle(20, 20, 40) ;
  circle(320, 50, 70) ; 
  circle(340, 10, 90) ;
  circle(260, 80, 90) ; 
  circle(150, 30, 80) ;
  circle(245, 0, 100) ; 
  circle(380, 0, 100) ;
  //color3
  fill(216, 193, 142) ; 
  circle(300, 200, 80) ;
  circle(0, 0, 180) ;
  circle(55, 130, 90) ;
  circle(130, 150, 90) ;
  circle(370, 280, 100) ;
  circle(200, 200, 140) ;
  //color4
  fill(173, 168, 110) ; 
  circle(100, 250, 90) ;
  circle(70, 170, 80) ; 
  circle(0, 120, 70) ; 
  circle(300, 260, 80) ;
  circle(360, 340, 100) ; 
  circle(10, 180, 60) ; 
  circle(120, 200, 50) ;
  circle (0, 400, 400) ; 
  circle (300, 400, 230) ; 
  circle (200, 300, 170) ; 
  circle(60, 200, 70) ; 
  //color5
  fill(112, 136, 95) ; 
  circle(20, 380, 100) ; 
  circle (70, 300, 90) ; 
  circle(360, 380, 100) ; 
  circle(280, 380, 70) ; 
  circle(90, 370, 80) ; 
  circle(190, 360, 120) ; 
  
  image(imagenbuho, 400, 0) ; 
  
  resetMatrix() ;
  
  //cuerpo
  stroke(116, 97, 62) ;
  //lo roté para que sea semejante a la imagen. 
  rotate(PI/6) ;
  fill(244, 214, 124) ;
  ellipse(300, 100, 100, 200) ;
  resetMatrix() ;
  
  //cola
  stroke(116, 97, 62) ;
  triangle(90, 310, 230, 190, 200, 290) ;
  
  //patitas
  stroke(116, 97, 62) ;
  //patita derecha
  line(200, 318, 200, 340) ;
  line(200, 340, 210, 350) ;
  line(200, 340, 220, 340) ;
  line(200, 340, 198, 355) ;
  //patita izquierda 
  line(185, 325, 185, 340) ;
  line(185, 340, 205, 350) ; 
  line(185, 340, 190, 350) ;
  line(185, 340, 178, 360) ;
  
  resetMatrix() ;
  
  //cabeza de buho 
  smooth () ;
  stroke(116, 97, 62) ;
  fill(244, 214, 124) ;
  circle(260, 130, 95) ;
  noStroke() ;
  fill(220) ;
  //roté dos "ellipse" para formar el "corazón" de la cara.
  rotate(PI/8) ;
  ellipse(300, 20, 60, 80) ;
  rotate(-PI/4) ;
  ellipse(180, 220, 60, 80) ;
  
  //facciones
  //ojos
  fill(0) ;
  rotate(PI/4) ;
  circle(270, 20, 12) ; 
  circle(310, 5, 12) ;
  fill(250) ;
  ellipse(270, 20, 8, 4) ;
  ellipse(310, 5, 8, 4) ;
  
  resetMatrix() ;
  
  //nariz 
  strokeWeight(2) ;
  stroke(196, 167, 113) ;
  fill(200) ;
  triangle(265, 150, 275, 125, 255, 125) ;
  
  //tronco
  rotate(-PI/8) ;
  stroke(93, 73, 36) ; 
  fill(93, 73, 36) ;
  rect(-150, 400, 240, 30) ;
  fill(112, 136, 95) ;
  noStroke() ;
  rect(55, 420, 40, 15) ;
  fill(137, 107, 52) ;
  rect(21, 405, 70, 8, 25) ; 
  
  resetMatrix() ;
  
  
  
}
