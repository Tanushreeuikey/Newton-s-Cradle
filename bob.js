class Bobs
{
    constructor(x,y,radius)
    {
        var option1=
	{    	
		isStatic:false,
		restitution:1.1,
        density:20
		
    }
       this.body=Bodies.circle(x,y,radius,option1)
       World.add(world,this.body);
    }
     
    display()
    {
        var pos =this.body.position;
       
        ellipseMode(RADIUS)
        fill("pink")
        ellipse(pos.x,pos.y,50)
        
    }

}