var bullet,wall;
var speed,weight,thickness;
function setup() {
  createCanvas(1400,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
 bullet=createSprite(50, 200, 50, 20);
 wall=createSprite(1200,200,thickness,height/2);
 bullet.shapeColor=("white");
 wall.shapeColor=(80,80,80);
}

function draw() {
  background("brown");  
  bullet.velocityX=speed;
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/thickness*thickness*thickness;
  if (damage>180) {
    bullet.shapeColor=(255,0,0);
  }
  if (damage<18) {
    bullet.shapeColor=(230,230,0);
  }
  if (damage>10) {
    bullet.shapeColor=(0,255,0);
  }
  }
  drawSprites();
}