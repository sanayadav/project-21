
var bullet , wall ;
var speed , weight , thickness;


function setup(){
     
    speed=random(321,326);
    weight=random(30,52);
    thickness=random(22,83);

    bullet = createSprite(50,200,10,5);
    bullet.shapeColor=233;
    bullet.velocityX = speed ;
    wall = createSprite(290,200,thickness,height/2);
    wall.shapeColor=color("red");
}


function draw(){
   
    background("orange");

    
        var damage=0.5 * weight * speed * speed/(thickness);


        if (damage>10)
        {
            wall.shapeColor=color("green");

        }

        else 
        {
            wall.shapeColor=color("red");

        }

        
       

    
    
   drawSprites();
}


