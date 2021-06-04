const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground;
var ball;
var box1,box2;

function setup() {
  createCanvas(600,600);
   
  engine = Engine.create();
  world = engine.world;

  var groundOptions = { 

   isStatic:true 
  
  }
  ground = Bodies.rectangle(300,500,600,20,groundOptions);

  World.add(world,ground);

  box1 = new Box(200,100,20,20);

  box2 = new Box(300,100,20,20);
}

function draw() {
  background(200,255,255);  

  Engine.update(engine);
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,600,20);
 
  box1.display();
  box2.display();
  
}