
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var  paperObject,paperImg,groundObject;	
var  cannon_img;
var ball;
var world,engine;

function preload()
{
	cannon_img=loadImage("cannon.png");
}

function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	paperObject=new Ball(320,260,40);

	groundObject=new ground(600,600,1200,40);

	ball = Bodies.circle(200,400,100);
	World.add(world,ball);
	
//level one
	box1 = new Box(770,400,60,100);
	box2 = new Box(830,400,60,100);
	box3 = new Box(890,400,60,100);
	box4 = new Box(950,400,60,100);
	box5 = new Box(1010,400,60,100);

// level second	
	box11 = new Box(950,350,60,100);
	box12 = new Box(830,350,60,100);
	box13 = new Box(890,350,60,100);

//level third	
	box21 = new Box(890,300,60,100);
	
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  imageMode(CENTER)
  image(cannon_img ,ball.position.x,ball.position.y,400,450);
  
  textSize(25);
  fill("white");
  text("Press Space to Destory the Building",50,50);
 
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  box11.display();
  box12.display();
  box13.display();

  box21.display();
  
  paperObject.display();
  groundObject.display();
  
}

function keyPressed() {
  	if (keyCode === 32) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:80,y:-80});
    
  	}
}





