var towerImg,tower,tower2;
var soldierImg,soldier;
var soldier2Img,soldier2;
var SpawnSoldiers;
function preload()
{
  towerImg = loadImage("tower.png");
  soldierImg = loadAnimation("soldier.png");
  soldier2Img = loadAnimation("soldier2.png");
}
function setup() {
  createCanvas(1600,800);

  tower = createSprite(1400,700,20,20);
  tower.addImage(towerImg)
  tower.scale = 0.2;

  tower2 = createSprite(200,700,20,20);
  tower2.addImage(towerImg)
  tower2.scale = 0.2;

  SpawnSoldiers = createButton("Spawn Soldiers")
  SpawnSoldiers.position(20,600);
  SpawnSoldiers.mousePressed(SpawnSoldiersFunction);

  

 
}
function draw() {
  background("green");  
  if(keyWentDown(RIGHT_ARROW))
  {
    soldiers.changeAnimation("def",soldier2Img);
  }
  if(keyWentUp(RIGHT_ARROW))
  {
    soldiers.changeAnimation("abc",soldierImg);
  }
  
  drawSprites();
}
function SpawnSoldiersFunction() {
    
    if (frameCount % 60 === 0) {
      var soldiers = createSprite(600,120,40,10);
      soldiers.addAnimation("abc",soldierImg);
      soldier.addAnimation("def",soldier2Img);
      soldiers.scale = 0.19;
      
    }
  }

