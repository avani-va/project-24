const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper,dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
 createCanvas(1600,400);
  
	engine = Engine.create();
	world = engine.world;

	var ground_options ={
		isStatic: true
	  }

	 //Create the Bodies Here.
   ground   = new Ground(600,382,2000,10,ground_options);
   paper    = new PaperBall(150,4,29);
   dustbin1 = new DustBin(1448,365,200,20);
   dustbin2 = new DustBin(1546,322,20,100);
   dustbin3 = new DustBin(1346,322,20,100);

  Engine.run(engine);

  console.log(ground);
}
 

  function draw() {
      background(0);
      Engine.update(engine);

      //createEdgeSprites();
      //paper.bounceOff(edges);

      paper.display();
      ground.display();
      dustbin1.display();
      dustbin2.display();
      dustbin3.display();

      rectMode(CENTER);
      //rect(ground.position.x,ground.position.y,300,20);
      KeyPressed();
      //stroke("white");
      textSize(20);
      fill(0,255,0)
      //text(mouseX+","+mouseY,mouseX,mouseY);

      drawSprites();
  }

function KeyPressed(){

 if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:2.5,y:-2.5});
 }

}
