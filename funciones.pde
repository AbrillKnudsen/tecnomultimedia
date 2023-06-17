//Abril Knudsen 
//Legajo 94567/5
//link: https://www.youtube.com/watch?v=nAlb0powDzA 
 //Comisión 2 
 
 
 
 
 void grilla(int x){
      pushMatrix (); 
      translate (-30, -30) ;
       int l=57;
       noStroke();
       for(int f=0; f<8; f++){ 
         for(int c=0; c<=8; c++){
           
             if((f+c) % 2 == 0){
              fill(0);
               if(estado=="evento"){
                 fill(colores(estado), 100, 100);
               }
             }else{
                fill(255);}
            rect(x+f*l, c*l, l ,l);
         }    
       }
       pushMatrix (); 
       int l2 =32;
        for(int f=0; f<8; f++){ 
         for(int c=0; c<=8; c++){
         
                 fill(255);
                 if((f % 2 ==  0)&(c % 2 ==  0)){
            rect(x+(f*l)+30, (c*l)+30, l2 ,l2);
                 fill(0);
               rect(x+(f*l)+30, (c*l)+58, 26 ,6);
               rect(x+(f*l)+58, (c*l)+30, 6, 26) ; 
               if (estado == "movimientoCuadraditos") {
                 frameRate (10) ;
                 rotate (PI/random(0, 20)) ; 
                 }
                 
                 }
         }  
       }
       popMatrix(); 
       
 popMatrix();           
   }   
