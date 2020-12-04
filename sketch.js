const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground1;
var divisions=[];
var plinkos=[];
var particles=[];
var divisionHeight=300;

function setup() {

  createCanvas(480,800);

  engine= Engine.create();
  world= engine.world;
  
  ground1= new Ground(240,790,480,20);

  for(var k=0; k<=width; k=k+80){

    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  
  }

  for(var a=10; a<=width; a=a+50){
  
      plinkos.push(new Plinko(a,75));
    
  }

  for(var b=30; b<=width-10; b=b+50){
  
      plinkos.push(new Plinko(b,175));
      
  }

  for(var c=10; c<=width; c=c+50){
  
      plinkos.push(new Plinko(c,275));
    
  }

  for(var d=30; d<=width-10; d=d+50){
  
      plinkos.push(new Plinko(d,375));
  
  }
}

function draw() {
  background(0);

  Engine.update(engine);

  
  
  for(var k=0; k < divisions.length; k++){
  
      divisions[k].display();
  
  }

  for(var a=0; a < plinkos.length; a++){
  
    plinkos[a].display();
    
  }
  for(var b=0; b < plinkos.length; b++){
  
    plinkos[b].display();
  
  }
  for(var c=0; c < plinkos.length; c++){
  
   plinkos[c].display();

  }
  for(var d=0; d < plinkos.length; d++){
  
   plinkos[d].display();

  }

  if(frameCount % 50 === 0){

  particles.push(new Particle(random(230,250),10,10));

  }

  for(var l= 0; l < particles.length; l++){
  
    particles[l].display();
 
   }

  ground1.display();
}