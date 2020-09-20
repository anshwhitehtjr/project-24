var paper,groundSprite,pboxl,pboxm,pboxr,pbodyl,pbodym,pbodyr;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;

function setup() {
	createCanvas(1600, 800);
	rectMode(CENTER);
	
    engine= Engine.create();
	world = engine.world;

	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	paper = new Paper(100,groundSprite.y-100,30,30);
    
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
	pboxl = createSprite(550,groundSprite.y-55,20,100);
	pboxl.shapeColor=color("red");
 
	pboxm = createSprite(650,groundSprite.y-10,200,10);
	pboxm.shapeColor=color("red");

	pboxr = createSprite(750,groundSprite.y-55,20,100);
	pboxr.shapeColor=color("red");


	pbodyl = Bodies.rectangle(550,groundSprite.y-55,20,100);
	World.add(world, pbodyl);

	pbodym = Bodies.rectangle(650,groundSprite.y-10,200,10);
	World.add(world, pbodym);

	pbodyr = Bodies.rectangle(750,groundSprite.y-55,20,100);
	World.add(world, pbodyr);
}



function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  drawSprites();

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.applyForce(paper.body,paper.body.position,{x : 85,y : -85});
	
  }
}



