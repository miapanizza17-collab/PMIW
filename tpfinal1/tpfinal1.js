//Integrantes: Rodrigo Parra legajo: 122830/0 y Mia Panizza legajo:127008/7
//Comision 3
//link video Rodrigo: https://youtu.be/32yz7RL90SI
//link video Mia: https://youtu.be/HRKAAXoM39U
let pantalla = "inicio";
let escenaActual = "llegar";  
let escenas = [];
let botones = [];

let imgLlegar, imgViaje, imgColectivo, imgTarde, imgBicicleta, imgDescanso, imgQuien, imgMaria, imgAlejandra, imgFinal1, imgFinal2, imgFinal3;
let musicaFondo;

let imgPelotas = [];
let framePelota = 0;
let cantidadPelotas = 11;

function preload() {
  imgLlegar = loadImage("./data/llegar.png");
  imgViaje = loadImage("./data/viaje.jpg");
  imgColectivo = loadImage("./data/colectivo.jpg");
  imgTarde = loadImage("./data/tarde.jpg");
  imgBicicleta = loadImage("./data/bicicleta.jpg");
  imgDescanso = loadImage("./data/descanso.jpg");
  imgQuien = loadImage("./data/quien.jpg");
  imgMaria = loadImage("./data/maria.jpg");
  imgAlejandra = loadImage("./data/alejandra.jpg");
  imgFinal1 = loadImage("./data/final1.png");
  imgFinal2 = loadImage("./data/final2.jpg");
  imgFinal3 = loadImage("./data/final3.jpg");

  musicaFondo = loadSound("./data/musicaFondo.mp3");

  for (let i = 0; i < cantidadPelotas; i++) {
    imgPelotas[i] = loadImage("./data/secuenciapelota/pelota" + (i+1) + ".png");
  }
}

function setup() {
  createCanvas(800, 450);
  textFont("Arial");
  armarEscenas();
}

function draw() {
  background(235, 230, 220);
  botones = [];

  if (pantalla === "inicio") {
    inicio();
  } else if (pantalla === "creditos") {
    creditos();
  } else if (pantalla === "aventura") {
    mostrarEscena(escenaActual);
  }
}

function armarEscenas() {
  escenas = [
    {
      id: "llegar",
      imagen: imgLlegar,
      texto: "El día empieza y Martina tiene hoy su primera práctica de vóley. Se da cuenta de que se le hizo tarde. ¿Qué deberia hacer?",
      opciones: [ 
        { texto: "Quedarse en casa", destino: "final1" },
        { texto: "Ir a la práctica", destino: "viaje" }
      ]
    },
    {
      id: "viaje",
      imagen: imgViaje,
      texto: "Martina decide ir a la práctica. ¿Cómo va a ir? La aplicación del colectivo dice que llega en 5 minutos, aunque tambien puede ir en bicicleta pero tiene miedo de llegar cansada.",
      opciones: [
        { texto: "Tomar el colectivo", destino: "colectivo" },
        { texto: "Ir en bicicleta", destino: "bicicleta" }
      ]
    },
    {
      id: "colectivo",
      imagen: imgColectivo,
      texto: "Martina va a la parada y espera. El colectivo esta atrasado...",
      opciones: [
        { texto: "Continuar...", destino: "tarde" }
      ]
    },
    {
      id: "tarde",
      imagen: imgTarde,
      texto: "Martina llega tarde. Cuando llega, sus compañeras ya habian terminado de calentar. Con vergüenza, hace los calentamientos por su cuenta y continúa con la práctica.",
      opciones:[
        { texto: "continuar con la practica", destino : "descanso"}
      ]
    },
    {
      id: "bicicleta",
      imagen: imgBicicleta,
      texto: "Martina va en bicicleta y llega mientras las demás todavia están calentando. Ya hizo algo de calentamiento durante el camino y está un poco cansada y con vergüenza, pero se suma al calentamiento.",
      opciones: [
        { texto: "Continuar con la práctica", destino: "descanso" }
      ]
    },
    {
      id: "descanso",
      imagen: imgDescanso,
      texto: "El resto de la práctica sigue con normalidad hasta el descanso. Martina está muy cansada y tiene sed pero se da cuenta de que se olvidó su botella. ¿Qué hace?",
      opciones: [
        { texto: "Pedirle a una compañera", destino : "quien" },
        { texto: "Descansar sin preguntar", destino: "final2" }
      ]
    },
    {
      id: "quien",
      imagen: imgQuien,
      texto:"2 compañeras parecen amables y trajeron botellas ¿a cual le pide su botella?",
      opciones: [
        { texto: "Preguntarle a María", destino: "maria" },
        { texto: "Preguntarle a Alejandra", destino: "alejandra" }
      ]
    },
    {
      id: "maria",
      imagen: imgMaria,
      texto: "Martina le pide agua a María, pero ella se niega y le dice que debería haber traído su propia botella porque compartirla no es higienico. Martina vuelve a sentarse avergonzada y no le pregunta a nadie más",
      opciones: [
        { texto: "Continuar", destino: "final2" }
      ]
    },
    {
      id: "alejandra",
      imagen: imgAlejandra,
      texto: "Martina le pide agua a Alejandra y ella le comparte su botella. Las dos conversan mientras Martina toma agua y descansa.",
      opciones: [
        { texto: "Continuar", destino: "final3" }
      ]
    },
    {
      id: "final1",
      imagen: imgFinal1,
      texto: "Martina decide evitar la incomodidad de llegar tarde y se queda en casa. Aunque al principio se siente más tranquila, después se arrepiente de no haber ido a su primera práctica de vóley.",
      opciones: [
        { texto: "Volver al inicio", destino: "inicio" }
      ]
    },
    {
      id: "final2",
      imagen: imgFinal2,
      texto: "La práctica termina. Martina está muy cansada, sigue teniendo sed y se arrepiente de haber venido.",
      opciones: [
        { texto: "Volver al inicio", destino: "inicio" }
      ]
    },
    {
      id: "final3",
      imagen: imgFinal3,
      texto: "La práctica termina. Martina está muy cansada, pero contenta de haber ido y de haber superado algunas de sus verguenzas. Le alegra mucho haber conocido a alejandra y haber echo una amiga nueva",
      opciones: [
        { texto: "Volver al inicio", destino: "inicio" }
      ]
    }
  ];
}

function inicio() {
  fill(45, 48, 60);
  textAlign(CENTER, CENTER);
  textSize(30);
  text("Martina y su primera practica de volley", 400, 145);
  boton("Comenzar", 285, 235, 230, 45, function() {
    pantalla = "aventura";
    escenaActual = "llegar";
    if (musicaFondo &&!musicaFondo.isPlaying()) {
      musicaFondo.loop(); 
    }
  });
  boton("Créditos", 325, 295, 150, 40, function() {
    pantalla = "creditos";
    framePelota = 0; 
  });
}

function creditos() {
  fill(45, 48, 60);
  textAlign(CENTER, CENTER);
  textSize(30);
  text("Créditos", 400, 105);
  textSize(17);
  text("Martina y su primera vez haciendo vóley", 400, 210);
  text("Realizado por: Rodrigo Parra y Mia Panizza", 400, 250);
  text("Comision 3", 400, 290);

  if (frameCount % 8 === 0) {
    framePelota = (framePelota + 1) % cantidadPelotas;
  }
  if (imgPelotas[framePelota]) {
    image(imgPelotas[framePelota ],1, -30, 800, 450) ;
  }
 

  boton("Volver al inicio", 300, 320, 200, 45, function() {
    pantalla = "inicio";
  });
}

function mostrarEscena(id) {
  let escena = buscar(id);
  if (escena === null) {
    return;
  }
  if (escena.imagen) {
    image(escena.imagen, 35, 20, 730, 300);
  }
  fill(250, 247, 240);
  stroke(100, 95, 85);
  rect(35, 275, 730, 139);
  fill(45, 48, 60);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(16);
  textLeading(22);
  text(escena.texto, 55, 270, 690, 105);
  let cantidad = escena.opciones.length;
  let ancho = 230;
  let alto = 43;
  let espacio = 15;
  let total = cantidad * ancho + (cantidad - 1) * espacio;
  let inicioX = (width - total) / 2;
  for (let i = 0; i < cantidad; i++) {
    let opcion = escena.opciones[i];
    let x = inicioX + i * (ancho + espacio);
    boton(opcion.texto, x, 365, ancho, alto, function() {
      cambiar(opcion.destino);
    });
  }
}

function buscar(id) {
  for (let i = 0; i < escenas.length; i++) {
    if (escenas[i].id === id) return escenas[i];
  }  
  return null;
}

function cambiar(destino) {
  if (destino === "inicio") {
    pantalla = "inicio";
    escenaActual = "llegar";
    if (musicaFondo && musicaFondo.isPlaying()) {
      musicaFondo.stop();
    }
  } else {
    pantalla = "aventura";
    escenaActual = destino;
  }
}

function boton(textoBoton, x, y, ancho, alto, accion) {
  let nuevoBoton = { texto: textoBoton, x: x, y: y, width: ancho, height: alto, accion: accion };
  botones.push(nuevoBoton);
  stroke(40);
  strokeWeight(1);
  fill(220, 215, 200);
  rect(x, y, ancho, alto);
  fill(40);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(15);
  text(textoBoton, x + ancho / 2, y + alto / 2);
}

function mousePressed() {
  for (let i = 0; i < botones.length; i++) {
    let b = botones[i];
    if (mouseX >= b.x && mouseX <= b.x + b.width && mouseY >= b.y && mouseY <= b.y + b.height) {
      b.accion();
      break;
    }
  }
}
