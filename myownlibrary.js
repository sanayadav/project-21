
var car , wall ;
var speed , weight;


function setup(){

    speed=random(55,90);
    weight=random(400,1500);

    car=createSprite(50,200,50,50);
    wall= createSprite(1500,200,60,height/2);
}


function draw(){
    Canvas(1600,400);
    background("orange");
    
    car.display();
    wall.display();
}