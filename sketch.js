
var bullet,wall,thickness;

var speed,weight;


function setup() {
  createCanvas(1600,800);

  speed=random(233,321);
  weight=random(30,52);
  thickness=random(22,83)

  bullet=createSprite(50,200,50,50);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  bullet.depth=wall.depth+1;
}

function draw() {
  background(255,255,255);  

  bullet.velocityX=speed;

  if(hasCollided(bullet,wall)) {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if (damage>10) {
        wall.shapeColor=color(255,0,0)
    }

    if (damage<10) {
        wall.shapeColor=color(0,255,0);
    }

  }


  drawSprites();

}

function hasCollided(object1,object2) {

  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge) {
    return true;
  }
  else{
    return false
  }

}






