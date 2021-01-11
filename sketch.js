const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var leftsideObj, rightsideObj, bottomObj, topObj;
var groundObj, bgImg;
var engine, world;
var score = 0;
var turn = 0;
var particle;
var gameState = "play";
var divisionHeight = 200 
var plinkos = [];
var divisions = [];

function preload() {
  bgImg = loadImage("bg2.jpg");
}
function setup() {
  createCanvas(1300,600);

  engine = Engine.create();
  world = engine.world;

  leftsideObj = new Boundries(5,790,10,2000);
  rightsideObj = new Boundries(1295,790,10,2000);
  bottomObj = new Boundries(5,595,3000,10);
  topObj = new Boundries(5,5,3000,10);

  groundObj = new Ground(5,785,2000,10);

  for(var k = 0; k <= width; k = k + 80) {
    divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight));
   }

  for(var j = 50; j <= width; j = j + 50) {
      plinkos.push(new Plinko(j, 75, 10));
    }
  
  for(var j = 75; j <= 1250; j = j + 50){
      plinkos.push(new Plinko(j, 125, 10));
    }

  for(var j = 50; j <= width; j = j + 50) {
      plinkos.push(new Plinko(j, 175, 10));
    }

  for(var j = 75; j <= 1250 - 10; j = j + 50){
      plinkos.push(new Plinko(j, 225, 10));
    }

    for(var j = 50; j <= width; j = j + 50) {
      plinkos.push(new Plinko(j, 275, 10));
    }

    for(var j = 75; j <= 1250 - 10; j = j + 50){
      plinkos.push(new Plinko(j, 325, 10));
    }


}



function draw() {
  background(0); 
  Engine.update(engine);
  
  groundObj.display();

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
 }

  for (var i = 0; i < plinkos.length; i++) {   
    plinkos[i].display();
 } 


 strokeWeight(0);
  stroke("black");
  fill(random(0, 255), random(0, 255), random(0, 255));
  textSize(25);
  textFont("Segoe Print");

  text("Score : " + score, 50, 50);

  text("500", 20, 400);
  text("500", 100, 400);
  text("500", 180, 400);
  text("500", 260, 400);
  text("500", 340, 400);

  text("100", 420, 400);
  text("100", 500, 400);
  text("100", 580, 400);
  text("100", 660, 400);
  text("100", 740, 400);

  text("200", 820, 400);
  text("200", 900, 400);
  text("200", 980, 400);
  text("200", 1060, 400);
  text("200", 1140, 400);
  text("200", 1220, 400);
  if(particle != null) {
    particle.display();

    if(particle.body.position.y > 400){

      if(particle.body.position.x < 420){
           score = score + 500;
           particle = null;

           if(turn >= 5) gameState = "end";
           
    }
     }
  }

  if(particle != null) {
    particle.display();

    if(particle.body.position.y > 400){

      if(particle.body.position.x < 820){
           score = score + 100;
           particle = null;

           if(turn >= 5) gameState = "end";
           
    }
     }
  }

  if(particle != null) {
    particle.display();

    if(particle.body.position.y > 400){

      if(particle.body.position.x < 1300){
           score = score + 200;
           particle = null;

           if(turn >= 5) gameState = "end";
           
    }
     }
  }


  if(gameState === "end") {
    background(bgImg);

  strokeWeight(3);
  stroke("black");
  fill(random(0, 255), random(0, 255), random(0, 255));
  textSize(50);
  textFont("Segoe Print");

  text("Score : " + score, 50, 50);
  text("Press Space to Restart", 200, 550);

    
  }
  
  leftsideObj.display();
  rightsideObj.display();
  bottomObj.display();
  topObj.display();

  drawSprites();
 
}


function mousePressed(){
  if(gameState !== "end"){
    turn++;
    particle = new Particle(mouseX, 10, 10)
  }
}

function keyPressed() {
  if(keyCode === 32){
    gameState = "play";
    background(0);
    turn = 0;
    score = 0;
   }
}
