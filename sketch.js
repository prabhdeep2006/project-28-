const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var polygon;

function preload(){
  polygon_img=loadImage("polygon.png");
}



function setup() {
  createCanvas(800,400);
 engine=Engine.create();
 world=engine.world;


  ground = new Ground(400,390,800,10);
  ground2 = new Ground(500,340,300,10);
  block = new Box(500,310,50,50);
  block2 = new Box(552,310,50,50);
  block3 = new Box(604,310,50,50);
  block4 = new Box(448,310,50,50);
  block5 = new Box(396,310,50,50);
  block6 = new Box(500,257,50,50);
  block7 = new Box(552,257,50,50);
  block8 = new Box(448,257,50,50);
  block9 = new Box(472,204,50,50);
  block10 = new Box(525,204,50,50);
  block11 = new Box(500,152,50,50);

polygon = Bodies.circle(50,200,20);
World.add(world,polygon);

slingShot = new SlingShot(polygon,{x:100,y:200});



}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  ground2.display();
  block.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  

imageMode(CENTER);
image(polygon_img,polygon.position.x,polygon.position.y,40,40);
slingShot.display();
  drawSprites();
}

function mouseDragged(){
    Matter.body.setPosition(slingShot.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}