const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint = Matter.Constraint

var engine,world,boy;
var boomerang, zombie;
var gameState="onsling"

function preload(){
boyimage1= loadAnimation("Boy1.png","Boy2.png","Boy3.png","Boy4.png","Boy5.png","Boy6.png","Boy7.png","Boy8.png","Boy9.png","Boy10.png")
boomerangImg=loadImage("Boomerang.png")
zombieImg = loadImage("Zombie.png")
}


function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world;


var ground_options={'isStatic': true}
ground=Bodies.rectangle(400,390,800,10,ground_options)
World.add(world,ground)




boy= new Boy(500,300,50,50)

boomerang= new Boomerang(100,150,40,50)

boomerangEffect= new BoomerangEffect(boy.body,boomerang.body)



}

function draw() {
  background("cyan");  
Engine.update(engine)



rectMode(CENTER)
rect(ground.position.x,ground.position.y,800,10)
boy.display()
boomerang.display()
  drawSprites();
}

function mouseReleased(){
  boomerang.fly();
  //removing the bird that flew from the array
  
  gameState = "launched";
}

//attaching new bird when space is pressed and when in launched state
function keyPressed(){
  if(keyCode === 32 && gameState === "launched"){
      Body.setPosition(boomerang.body,{x:200,y:50});
     
     
      gameState="onSling";
  }
}


