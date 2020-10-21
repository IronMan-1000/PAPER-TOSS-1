
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground,dustbin

function setup() {
	createCanvas(1540, 600);


	engine = Engine.create();
	world = engine.world;

   paper= new Paper(100,200,50)
   ground = new Ground(770,600)
   dustbin = new Dustbin(1100,580)

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("lightgreen");
  paper.display()
  ground.display()
  dustbin.display()
  
  
 
}

function keyPressed(){
  if (keyCode ===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
  }
}


