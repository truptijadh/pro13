

var garden,rabbit,apple,oleaf,rleaf
var gardenImg,rabbitImg,appleImg,oleafImg,rleafImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  oleafImg = loadImage("orangeLeaf.png");
  rleafImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
   drawSprites();
  
  var select_sprites = Math.round(random(1,3));
  
  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createApples();
    } else if (select_sprites == 2) {
      createOrange();
    }else {
      createRed();
    }
  }

}

function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
  
}

function createOrange() {
oleaf = createSprite(random(50, 350),40, 10, 10);
oleaf.addImage(oleafImg);
oleaf.scale=0.08;
oleaf.velocityY = 3;
}

function createRed() {
rleaf = createSprite(random(50, 350),40, 10, 10);
rleaf.addImage(rleafImg);
rleaf.scale=0.06;
  rleaf.velocityY = 3;
  drawSprites();
}