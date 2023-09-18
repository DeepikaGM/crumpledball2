class Paper{
    constructor(x,y,RADIUS) {
        var options ={
          isStatic : false,    
          restitution : 0.3,
          friction : 0.5,
          density : 1.2
        }
        this.body = Bodies.circle(x,y,RADIUS,options);
        this.radius = RADIUS;

        this.image = loadImage("paper.png");

        World.add(world,this.body);

        
      }
        display()         
        {
          var pos = this.body.position;
          var angle = this.body.angle;
          push();
          translate(pos.x,pos.y);
          rotate(angle);
          rectMode(CENTER);
          image(this.image,0,0,this.radius,this.radius);
          fill("red");
          pop();
        }
    }
