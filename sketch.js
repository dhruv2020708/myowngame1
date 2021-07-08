var bg1,bg2,bg3,play,playImg;
var gameState="start";
function preload(){
  bg1=loadImage("./Images/background1.png");
  bg2=loadImage("./Images/background.png");
  bg3=loadImage("./Images/background2.png");
  playImg=loadImage("./Images/play.png");
}

function setup(){
  createCanvas(1200,600);
play=createSprite(1000,150);
play.addImage(playImg);
play.scale=0.15;
}


function draw(){
  background(bg1);
  if(gameState==="start"){
    play.visible =true;
    if(mousePressedOver(play)){ 
      background(bg2); 
      gameState="play";
    }
  }
  if(gameState==="play"){
    background(bg2); 
      play.visible=false;
    
  }
  
  drawSprites();

}

