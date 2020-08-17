var car,wall;
var speed,weight;
function setup() {
  createCanvas(800,400);
  car=createSprite(50,200,50,50);
  wall=createSprite(800,200,60,height/2);
  wall.shapecolor=80;
speed=7;
}

function draw() {
  background(0);  
  car.velocityX=speed;
  speed=random(55,90);
weight=random(400,1500);

    
      if(wall.x-car.x<(car.width+wall.width)/2){
        var deformation=0.5*weight*speed*speed/22500
        car.collide(wall)
      if (deformation<100) {
        car.shapeColor=rgb(255,0,0)
      }
      if (100<deformation<180) {
        car.shapeColor=color(230)
      }
      if (deformation>180) {
        car.shapeColor=rgb(255,255,255)
      }
    }
    
  
  drawSprites();
}