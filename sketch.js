var car , wall ; 
var speed , weight;
var deformation;

function setup() {
  createCanvas(1600,400);
 // createSprite(400, 200, 50, 50);
  
  speed=random(55,90);

  weight=random(400,1500);
  
car=createSprite(50,200,30,height/2)
car.velocityX = speed;
wall=createSprite(1500,200,50,50)

}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(car.isTouching(wall)){
  deformation=0.5*weight*speed*speed/22500

  }
  if(deformation<=100){
    wall.fill(0,255,0)

  }
  if(deformation>=100||deformation<=180){
   wall.fill(230,230,0)

  }
  if(deformation>=180){
    wall.fill(255,0,0)

  }
  //if(car.x=wall.x){
    //car.velocityX=0;

  //}

}