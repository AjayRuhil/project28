
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy,ground,rock,tree,m1,m2,m3,m4,m5,m6,chain;
var GameState = "onSling";
var m7,m8,m9,m10,m11,m12;

function preload()
{
	boy = loadImage("boy.png");
	boy1 = loadImage("boy - Copy.png")
	tree = loadImage("tree.png");
	backgroundImg = loadImage("bg.png");
}

function setup() {
	createCanvas(1280, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rock = new Stone(320,225);
	chain = new SlingShot(rock.body,{x:600 , y:305});
	m1 = new mango(1050,200,6);
	m2 = new mango(1100,160,5);
	m3 = new mango(1130,200,6);
	m4 = new mango(1200,200,4);
	m5 = new mango(1150,140,6);
	m6 = new mango(1250,220,4);
	m7 = new mango(50,200,6);
	m8 = new mango(100,160,5);
	m9 = new mango(130,200,6);
	m10 = new mango(200,200,4);
	m11 = new mango(150,140,6);
	m12 = new mango(250,220,4);
	ground = Bodies.rectangle(640,385,1290,20,{isStatic:true});
	World.add(world,ground);
	
	Engine.run(engine);
	  
}




function draw() {


    rectMode(CENTER);
    background(backgroundImg);
    push();
    rect(width/2,400,width,20);
	chain.display();
    drawSprites();
    console.log(rock);
    imageMode(CENTER);
	image(boy,650,350,150,200);

	image(tree,1125,250,300,300);
	image(tree,150,250,300,300)
	rock.display();
	m1.display();
	m2.display();
	m3.display();
	m4.display();
	m5.display();
	m6.display();
	m7.display();
	m8.display();
	m9.display();
	m10.display();
	m11.display();
	m12.display();
	collision(rock,m1);
	collision(rock,m2);
	collision(rock,m3);
	collision(rock,m4);
	collision(rock,m5);
	collision(rock,m6);
	collision(rock,m7);
	collision(rock,m8);
	collision(rock,m9);
	collision(rock,m10);
	collision(rock,m11);
	collision(rock,m12);
	

	strokeWeight(3);
	stroke(0);
	fill(255);
	text('Press SpaceBar To Throw Again!', 550, 22);
	text('Pluck All The Mangoes To Win!', 555, 42);
	
	if(m1.body.position.y>400 && m2.body.position.y>350 && m3.body.position.y>350 && m4.body.position.y>350 && m5.body.position.y>350 && m6.body.position.y>350 && m7.body.position.y>350 && m8.body.position.y>350 && m9.body.position.y>350 && m10.body.position.y>350 && m11.body.position.y>350 && m12.body.position.y>350){
	text('YOU WIN!!!', 630, 262);	
	}
	
}
function collision(a,b){
	var d = dist(a.body.position.x,a.body.position.y,b.body.position.x,b.body.position.y)
	if(d <= 50){
		Body.setStatic(b.body,false);
	}
}
function mouseDragged(){
    if(GameState!=="launch") {Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
}
}

function mouseReleased(){
    chain.fly();
    GameState = "launch"; 
}

function keyPressed(){
    if(keyCode === 32){
		chain.attach();
		GameState="onSling";
    }
}