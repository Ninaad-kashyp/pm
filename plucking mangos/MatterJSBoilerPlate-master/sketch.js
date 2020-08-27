
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,treeI;
var mango1,Mangoim;
var Boy,boyIm
function preload(){
	treeI=loadImage("Plucking mangoes/tree.png");
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	var treeOptions ={
		setStatic:false
	}

	tree=createSprite(800,498,20,40,treeOptions);
	tree.addImage(treeI);
	tree.scale=0.3;
   
	ground=new Ground(700.5,690,1500,10);
	
	mango1=new Mango(800,687)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  
  drawSprites();
  ground.display();
  mango1.display();
 
}



