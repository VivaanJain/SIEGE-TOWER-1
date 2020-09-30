const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, ground;
var stand1, stand2;
var ball;
var slingShot;
var polygonimg;

function preload() {
  polygonimg = loadImage("download.png");
}
function setup() {
  createCanvas(900, 400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Stand(450, 390, 900, 20);
  stand1 = new Stand(390, 300, 250, 10);
  stand2 = new Stand(700, 200, 200, 10);
   block1 = new Block(300, 275, 30, 40);
  block2 = new Block(330, 275, 30, 40);
  block3 = new Block(360, 275, 30, 40);
  block4 = new Block(390, 275, 30, 40);
  block5 = new Block(420, 275, 30, 40);
  block6 = new Block(450, 275, 30, 40);
  block7 = new Block(480, 275, 30, 40);
 block8 = new Block(330, 235, 30, 40);
  block9 = new Block(360, 235, 30, 40);
  block10 = new Block(390, 235, 30, 40);
  block11 = new Block(420, 235, 30, 40);
  block12 = new Block(450, 235, 30, 40);
 block13 = new Block(360, 195, 30, 40);
  block14 = new Block(390, 195, 30, 40);
  block15 = new Block(420, 195, 30, 40);
block16 = new Block(390, 155, 30, 40);
ball = Bodies.circle(50, 200, 20);
  World.add(world, ball);

  slingShot = new Slingshot(this.ball, { x: 100, y: 200 });
}
function draw() {
  background("white")
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
block8.display();
  block9.display();
  block11.display();
  block12.display();
block10.display();
block13.display();
  block14.display();
  block15.display();
  block16.display();
imageMode(CENTER);
  image(polygonimg, ball.position.x, ball.position.y, 40, 40);
slingShot.display();
}
function mouseDragged() {
  Matter.Body.setPosition(this.ball, { x: mouseX, y: mouseY });
}
function mouseReleased() {
  slingShot.fly();
}