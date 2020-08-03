const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1 ,box2, ground1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(620,50,50,100);
    box2 = new Box(600,100,50,50);
    ground1 = new Ground(600,500,1200,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
  
    
   ground1.display();
   fill("yellow");
   box2.display();
}