//Mia Panizza 127008/7
let pantalla = 'inicio'; 
let fondo;
let animacion1 = []; 
let animacion2 = [];
let totalCuadros1 = 27; 
let totalCuadros2 = 10;
let cuadro1 = 0; 
let cuadro2 = 0; 

let velocidadAnimacion = 5; 
let tiempoEspera = 2000; 
let momentoReinicio = 0; 
let enEspera = true;     

let tiempoPausaImagen11 = 1000; // 1 segundo de pausa
let momentoPausa = 0;
let pausa = false;
let continuar = false; //reanudar

function preload() {
  fondo = loadImage('data/fondoPuppet.png');
  
  for (let i = 0; i < totalCuadros1; i++) {
    animacion1[i] = loadImage('data/puppetsecuencia/puppet' + i + '.png');
  }
  for (let i = 0; i < totalCuadros2; i++) {
    animacion2[i] = loadImage('data/box/puppetbox' + i + '.png');
  }
}

function setup() {
  createCanvas(800, 600);
  frameRate(30); 
}

function draw() {
  if (pantalla === 'inicio') {
    dibujarPantallaInicio();
  } else if (pantalla === 'animacion') {
    dibujarPantallaAnimacion();
  }
}


function dibujarPantallaInicio() {
  background(30, 40, 60); 
  
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Puppet´s box", width / 2, 120);
  
  fill(180, 180, 255);
  rectMode(CENTER);
  rect(400, 240, 130, 50); 
  
  fill(255);
  textSize(20);
  text("iniciar", width / 2, 240);
}


function dibujarPantallaAnimacion() {
  background(100, 150, 200);
  
  imageMode(CENTER);
  image(fondo, 400, 300); 
  
  
  image(animacion1[cuadro1], 400, 300); 
  image(animacion2[cuadro2], 400, 300); 
  imageMode(CORNER); 

  
  rectMode(CORNER);
  fill(80, 90, 120);
  rect(20, 20, 100, 40, 5); 
  fill(255);
  textSize(18);
  textAlign(CENTER, CENTER);
  text("Volver", 70, 40); 

  // --- CONTROL DEL TIEMPO DE ESPERA INICIAL / REINICIO (2 SEGUNDOS) ---
  if (enEspera) {
    if (millis() >= momentoReinicio) {
      enEspera = false;
    } else {
      return; // Bloquea todo el código de abajo mientras dure la pausa
    }
  }


  if (pausa) {
    if (millis() >= momentoPausa) {
      pausa = false;
      continuar = true; 
    } else {
      return; 
    }
  }


  if (frameCount % velocidadAnimacion === 0) {
    
    let reiniciarCiclo = false;

    
    if (cuadro2 >= 3) {
      
      if (cuadro1 === 10 && !continuar) {
        pausa = true;
        momentoPausa = millis() + tiempoPausaImagen11;
        return;
      }

      if (cuadro1 < totalCuadros1 - 1) {
        cuadro1++;
        
        if (cuadro1 !== 10) {
          continuar = false;
        }
      } else {
        cuadro1 = 0;
        reiniciarCiclo = true; 
        continuar = false; 
      }
    }
    
    // 2. CONTROL DE ANIMACIÓN caja
    if (reiniciarCiclo) {
      cuadro2 = 0;
      enEspera = true;
      momentoReinicio = millis() + tiempoEspera;
    } else if (cuadro2 < totalCuadros2 - 1) {
      if (cuadro2 === 5) {
        if (cuadro1 >= 23) {
          cuadro2++;
        }
      } else {
        cuadro2++;
      }
    }
    
  }
}

function mousePressed() {
  if (pantalla === 'inicio') {
   
    if (mouseX > 335 && mouseX < 465 && mouseY > 215 && mouseY < 265) {
      pantalla = 'animacion'; 
      cuadro1 = 0;
      cuadro2 = 0;
      enEspera = true;
      momentoReinicio = millis() + tiempoEspera;
      continuar = false;
    }
  } else if (pantalla === 'animacion') {
    if (mouseX > 20 && mouseX < 120 && mouseY > 20 && mouseY < 60) {
      pantalla = 'inicio';
    }
  }
}
