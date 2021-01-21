var bullet, wall, thickness;
var speed, weight;


function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness = random(22, 83);

  bullet = createSprite(50, 100, 60, 10);
  bullet.velocityX = speed;
  bullet1 = createSprite(50,300, 60, 10 );
  bullet1.velocityX = speed;

  wall = createSprite(1500,100,thickness,height/2);
  wall.shapeColor = "green";

  wall1 = createSprite(1500,300, thickness, height/2);
  wall1.shapeColor = "red";
}

function draw() {
  background(80,80,80); 
  



if(hascollided(bullet,wall)){
  bullet.velocityX = 0;
  var damage = 0.5* weight* speed/ (thickness* thickness* thickness);
  
   if(damage > 10){
    wall.shapeColor  = color(225,0,0);
  }
if(damage<10){
wall.shapeColor(0,225,0);
}}


if(hascollided(bullet1,wall1)){
  bullet1.velocityX = 0;
  var damage = 0.5* weight* speed/ (thickness* thickness* thickness);
  
   if(damage > 10){
    wall1.shapeColor  = color(225,0,0);
  }
if(damage<10){
wall1.shapeColor(0,225,0);
} }

  drawSprites();
}
