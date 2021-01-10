const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5, bob6;
var rope1, rope2, rope3, rope4, rope5, rope6;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(240,500,80);	
	bob2 = new Bob(310,500,80);
	bob3 = new Bob(400,500,80);
	bob4 = new Bob(500,500,80);
	bob5 = new Bob(500,500,80);

	roof = new Roof(400,200,400,20);

  rope1 = new Rope(bob1.body, roof.body,-160, 0);
  rope2 = new Rope(bob2.body, roof.body,-90, 0);
	rope3 = new Rope(bob3.body, roof.body,0, 0);
	rope4 = new Rope(bob4.body, roof.body,90, 0);
	rope5 = new Rope(bob5.body, roof.body,160, 0);

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(225);
  
  ellipseMode(CENTER);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rectMode(CENTER);
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-200,y:-200});
  
	}
}

