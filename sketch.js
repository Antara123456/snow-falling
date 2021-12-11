function preload(){
  bgimage=loadImage("snow2.jpg");
}
function setup() {
  createCanvas(800,400);
  snow7=new snow(400, 200, 50, 50);
}

function draw() {
  background(bgimage);
  snow7.display();  
  drawSprites();
}