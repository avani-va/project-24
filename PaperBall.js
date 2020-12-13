class PaperBall {
  constructor(x, y,r) {
    var options = {
        isStactic: false,
        //'restitution':0.1,
        'friction':1.5,
        'density':1.0
    };
    this.x=x
    this.y=y
    this.r=r
    this.body = Bodies.circle(x, y,r/2,options);
    this.width = 50;
    this.height = 50;
    World.add(world, this.body);

  };
  display()
  {

    //var pos =this.body.position;
    //pos.x = mouseX;
    //pos.y = mouseY;
    //var angle = this.body.angle;

    var pos =this.body.position;
  
    push();
    translate(pos.x,pos.y);
    rectMode(CENTER);
    //strokeWeight(3);
    //stroke(3);
    fill(0,255,0);
    ellipse(0,0,this.r,this.r)
    pop();
  };
};
