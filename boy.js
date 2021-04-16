class Boy{
constructor(x,y,w,h){
var options={
    'isStatic':false,
}

this.x=x;
this.y=y;
this.w=w;
this.h=h;
this.body= Bodies.rectangle(x,y,w,h,options)
this.image=loadImage("Boy1.png")
World.add(world,this.body)
}

display(){

//this.body.position.y = mouseY
//this.body.position.x = mouseX
imageMode(CENTER)
image(this.image,this.body.position.x,this.body.position.y,50,80)


}


}