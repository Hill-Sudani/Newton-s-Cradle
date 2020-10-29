class pendulum
{
    constructor(x,y,radius)
    {
        this.x = x;
        this.y = y;
        this.radius = radius;

        var options = 
        {
            isStatic : false
        }

        this.body = Bodies.circle(this.x,this.y,this.radius/2,options);
        World.add(world,this.body);
    }

    display()
    {
        push()
        translate(this.body.position.x,this.body.position.y);
        fill("blue");
        ellipseMode(CENTER);
        ellipse(0,0,this.radius);
        pop();
    }
}

