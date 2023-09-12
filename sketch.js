var bg, bgImg;
var balloon, balloonImg;
var obsTop2img, obsBottom1img;
var obsTop2, obsBottom1;
var obsTop2Group, obsBottom1Group;
var gameState = 1;
var dieSound;

function preload(){
bgImg = loadImage("assets/bg.png")
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
obsTop2img = loadImage("assets/obsTop2.png");
obsBottom1img = loadImage("assets/obsBottom1.png");
dieSound = loadSound("assets/die.mp3");
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    //displaying background
    bg = createSprite(windowWidth/2, windowHeight/2);
    bg.addImage(bgImg);
    bg.scale = 1.35

    //creating balloon     
    balloon = createSprite(100,200,50,100);
    balloon.addAnimation("balloon",balloonImg);
    balloon.scale = 0.4;

    obsTop2Group = new Group();
    obsBottom1Group = new Group();
}

function draw() {
    background("black");

    if(gameState==1){

      if(keyIsDown(UP_ARROW) && balloon.y>80){
        balloon.y -=5;
      }
    
      if(keyIsDown(DOWN_ARROW) && balloon.y<500){
        balloon.y +=5;
      }
    
      if(keyIsDown(RIGHT_ARROW) && balloon.x<1150){
        balloon.x +=5;
      }
    
      if(keyIsDown(LEFT_ARROW)&& balloon.x>70){
        balloon.x -=5;
      }

      
    }
    

      for(i=0; i<obsBottom1Group.length; i++){
        if(obsBottom1Group[i].isTouching(balloon)){
          obsBottom1Group[i].destroy();
          gameState = 2
          dieSound.play();
        }
      }

      for(i=0; i<obsTop2Group.length; i++){
        if(obsTop2Group[i].isTouching(balloon)){
          obsTop2Group[i].destroy();
          gameState = 2
          dieSound.play();
        }
      }
      createObsTop();
      createObsBottom();

    drawSprites();
    if(gameState==2){
      obsBottom1Group.destroyEach();
      obsTop2Group.destroyEach();
      fill("black");
      textSize(50);
      text("You Lost! Better luck next time", 200, 100);
    }
}

function createObsTop(){
  if(frameCount%90==0){
    //creating top obstacle
    obsTop2 = createSprite (random(750,1200),random(200,750),20,20);
    obsTop2.addImage(obsTop2img);
    obsTop2.scale = 0.15
    obsTop2.velocityX-=2
    obsTop2.lifetime=600;
    obsTop2Group.add(obsTop2);
  }
  }

  function createObsBottom(){
    if(frameCount%200==0){
      //creating top obstacle
      obsBottom1 = createSprite (random(750,1200),random(200,550),20,20);
      obsBottom1.addImage(obsBottom1img);
      obsBottom1.scale = 0.15
      obsBottom1.velocityX-=2
      obsBottom1.lifetime=600;
      obsBottom1Group.add(obsBottom1);
    }
    }