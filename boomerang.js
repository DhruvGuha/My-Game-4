class Boomerang{
    constructor(x,y,w,h){
    var options={
        'restitution':1,
    }
    this.body= Bodies.rectangle(x,y,w,h,options)
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    this.image=loadImage("Boomerang.png")
    World.add(world,this.body)
    }
    
    display(){
    var angle= this.body.angle;
    
    
    push()
    rotate(angle)
    translate(this.body.position.x,this.body.position.y)
    imageMode(CENTER)
    
    image(this.image,0,0,15,25)
    pop()
    
    
    }
    
    
    }