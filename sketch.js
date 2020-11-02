const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Waste,dustbin,ground,dustbin1,dustbin2;

function preload()
{

}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	Waste = new Paper(200,450,20)
	ground = new Ground(800,690,1600,20)
	dustbin1 = new Dustbin(700,640,20,75); 
	dustbin2 = new Dustbin(650,670,75,20);
	 dustbin3 = new Dustbin(600,640,20,75);

	Engine.run(engine);
}


function draw() {
  background(0);
  rectMode(CENTER);
  Engine.update(engine)
  Waste.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

 drawSprites();
}
  function keyPressed() {
	 if (keyCode === UP_ARROW) {
		 Matter.Body.applyForce(Waste.body,Waste.body.position,{x:55,y:-55}); 
	 }

}