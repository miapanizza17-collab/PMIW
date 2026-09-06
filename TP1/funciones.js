function dibujaPantallaDeInicio() {
  background(0);
  fill(255); textSize(40); textAlign(CENTER, CENTER);
  text("Puppet´s box", width * 0.5, height * 0.46); 
  if (mouseSobreRectangulo(320, 340, 155, 58)) fill(0, 255, 0); else fill(255, 180, 20); 
  rect(320, 340, 155, 58); fill(0); textSize(20); text("Iniciar", 320, 340);
}
