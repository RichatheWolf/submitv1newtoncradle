
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1, bob2, roof1;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var bobDiameter = 40;
	//Create the Bodies Here.
	bob1 = new ball(120, 340, 20);
	roof1 = new roof(width/2, height/4, 200, 20);
	rope1 = new rope(bob1.body, roof1.body, -bobDiameter*2, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);



	bob1.display();
	rope1.display();
	roof1.display();
 
}



