var trex, trex_running;
var ground, invisibleGround,groundImage;
var cloud, cloudGroup,cloudImage;


function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");
}

function setup(){
  createCanvas(600,200);
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running",trex_running);

  trex.scale = 0.5;
  trex.x = 50;

  ground = createSprite(200,180,400,20);
  ground.addAnimation("ground",groundImage);
  ground.x = ground.width/2;

  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw(){
background("red");
ground.velocityX = -2;
console.log(ground.x);


if(keyDown("space") && trex.Y >= 100){
  trex.velocityY = -5;
}

trex.velocityY = trex.velocityY + 0.9;

spawnClouds();
trex.collide(invisibleGround);
drawSprites();
}


function spawnClouds(){
  if(frameCount % 60 === 0){
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage);
    cloud.Y = Math.round(random(10,60));
    cloud.scale = 0.4;
    cloud.velocityX  = -3;


    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
  }
}