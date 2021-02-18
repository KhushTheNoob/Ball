//namespacing

const Engine=Matter.Engine;   // universe
const World= Matter.World;   // Globe
const Bodies= Matter.Bodies;   // Object

var engine,world,ground,racket;


function setup() {
  createCanvas(400,400);
  //createSprite(200,200,50,50);
//  racket = createSprite(150,200,10,60)
 engine=Engine.create();
 world=engine.world;

var ground_options = {

  isStatic: true

}

 ground=Bodies.rectangle(200,350,400,20,ground_options);
 World.add(world,ground);

 var ball_options = {

  restitution: 1.5

 }
ball=Bodies.circle(200,250,20,ball_options)
World.add(world,ball)

racket = Bodies.rectangle(150,200,10,100)
World.add(world,racket)
console.log(ground);

}

function draw() {

  background(0,0,0);  
  Engine.update(engine)
  rectMode (CENTER);
// rect(200,200,50,50)
fill ("yellow")
  rect (ground.position.x,ground.position.y,400,20);

 ellipse(ball.position.x,ball.position.y,20)
 
 rect(racket.position.x,racket.position.y,10,100)
//  racket.y = world.mouseY
//  racket.x = world.mouseX

 drawSprites();
}