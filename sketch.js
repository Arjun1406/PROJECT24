
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,ball,bin1,bin2,bin3;
function preload()
{
	
}

function setup() {
	createCanvas(800,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(400,390,800,20);
ball=new Ball(20,380,20);
bin1=new Box(550,370,200,20);
bin2=new Box(450,310,20,150);
bin3=new Box(650,310,20,150);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  ball.display();
  bin1.display();
  bin2.display();
  bin3.display();
 if(keyDown(UP_ARROW)){
	 Matter.Body.applyForce(ball.body,ball.body.position,{x:10,y:-5});
 }
}



