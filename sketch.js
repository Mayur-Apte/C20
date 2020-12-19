var a,b;

function setup() {
  createCanvas(800,800);
 
//creating sprites
 a = createSprite(400, 200, 50, 50);
 b = createSprite(600,300,50,50);
 
 //changing the colour of the sprites 
 a.shapeColor = "blue";
 b.shapeColor = "blue";

}

function draw() {
  background(255,255,255);  

//moving a with the mouse
  a.x = World.mouseX;
  a.y = World.mouseY;
  
  //collison point
  if(a.x - b.x < b.width/2 + a.width/2 
    && b.x - a.x < b.width/2 + a.width/2 
    && a.y - b.y < b.height/2 + a.height/2 
    && b.y - a.y < b.height/2 + a.height/2){
   
   
   //changing the colour of the sprites
   a.shapeColor = "green";
   b.shapeColor = "red";
  }
  else {
    
  //keeping same colour for sprites
    a.shapeColor = "blue";
    b.shapeColor = "blue";
  }
  
  
  
  drawSprites();
}