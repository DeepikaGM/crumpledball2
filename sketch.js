// creates the constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// variables
var engine, world;
var dustbinImg, dustbin;

function preload(){

  // loads the dustbin image
  dustbinImg = loadImage("dustbingreen.png");
}

function setup() {

  // creates the canvas
  createCanvas(1300, 700);
  
  // creates engine
  engine = Engine.create();
	world = engine.world;
  Engine.run(engine);
  
  // creates variables
  paper = new Paper(100,520,70);

  ground1 = new Ground(400,550,1900,15);

  dustbin = createSprite(1000,400,200,20);  
  dustbin.addImage(dustbinImg);
  dustbin.scale = 0.85;

  dustbin1 = new Dustbin(1000,535,180,15);
  dustbin2 = new Dustbin(880,400,15,285);
  dustbin3 = new Dustbin(1120,400,15,285);
  
  }
function draw() {
  
  rectMode(CENTER);

  // makes the background light pink
  background(255);
  
  // displays the variables

  paper.display();

  dustbin.display();

  ground1.display();
  
 }
 
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:1080,y:-1080});
  }
}